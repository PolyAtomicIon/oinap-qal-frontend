<template>
  <q-card class="iframe__container">
    <iframe
      :src="gameUrl"
      frameborder="0"
      width="100%"
      height="100%"
      ref="iframe"
      class="iframe"
      @load="onIframeLoaded"
    >
    </iframe>
    <!-- ad window -->
    <transition name="fade">
      <q-card v-if="!isGameLoaded" class="loader-container" square>
        <div>
          <div class="loader"></div>
          <img
            class="absolute-center"
            :src="require('../../assets/logo/logo.svg')"
            height="42"
            alt=""
          />
        </div>
      </q-card>
    </transition>
    <q-card
      v-show="adActive"
      class="q-pa-lg ad-container"
      ref="ad-container"
      square
      bordered
    >
      <span>There will be Ad</span>
      <q-btn
        @click="closeAd"
        color="white"
        round
        flat
        icon="close"
        class="q-ml-lg"
      ></q-btn>
    </q-card>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { GameMessageInterface, IGameRouteQueries } from '../../entities';
import { provider } from '../../services';
import fixProblemWithViewHeight from '../../services/utils';
// import QCard from 'quasar'

export default defineComponent({
  name: 'SDKGameContainer',
  setup() {
    const $route = useRoute();
    const iframe = ref<HTMLIFrameElement | null>(null);
    const sdk = ref<HTMLDivElement | null>(null);
    const score = ref(0);
    const gameUrl = ref('https://biz-oinaimyz.herokuapp.com/games/');
    const isGameLoaded = ref(false);

    const adActive = ref(true);
    const showAd = () => {
      adActive.value = true;
    };
    const closeAd = () => {
      adActive.value = false;
    };
    const onGameFinished = async (finalScore: number) => {
      score.value = finalScore;

      // @ts-ignore
      const { uid, iid, chatid, msgid }: IGameRouteQueries = $route.query;

      if (uid && msgid && chatid) {
        await provider().Game.setScoreTelegramApi(`/setscore/uid/${uid}/chat/${chatid}/msg/${msgid}/score/${score.value}`)
      }
      else if (uid && iid) {
        await provider().Game.setScoreTelegramApi(`/setscore/uid/${uid}/iid/${iid}/score/${score.value}`)
      }
    }

    // catch messages from iframe
    window.onmessage = async (e: GameMessageInterface) => {
      // @ts-ignore
      if (e.data.name === 'gameFinished') {
        // @ts-ignore
        await onGameFinished(+e.data.finalScore);
      }
      if (e.data.name === 'showAd') {
        // @ts-ignore
        showAd();
      }
    };

    const pauseGame = () => {
      // console.log(iframe.value)
      iframe.value?.contentWindow?.postMessage('pause', '*');
    };

    const restartGame = () => {
      // console.log(iframe.value)
      iframe.value?.contentWindow?.postMessage('restart', '*');
    };

    const onIframeLoaded = () => {
      isGameLoaded.value = true;
      console.log('Game Loaded');
    };

    onMounted(() => {
      const gameFileId = $route.params.game_id;
      gameUrl.value += gameFileId.toString() + '/index.html';

      fixProblemWithViewHeight();
    });

    return {
      iframe,
      sdk,
      score,
      pauseGame,
      restartGame,
      adActive,
      showAd,
      closeAd,
      onIframeLoaded,
      gameUrl,
      isGameLoaded,
    };
  },
});
</script>

<style lang="scss" scoped>
$inner-container-height: 96px;

.iframe {
  height: 100%;
  width: 100%;
  &__container {
    position: relative;
    width: 100%;
    // height: calc(100vh - 138px);
    height: calc(var(--vh, 1vh) * 100 - 74px);
    background: $secondary;
    @media screen and (max-width: $breakpoint-sm) {
      height: calc(var(--vh, 1vh) * 100 - 50px);
    }
  }
  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    background: $dark-grey;
    width: 100%;
    height: $inner-container-height;
  }
}

.ad-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  color: white;
  font-size: 24px;
  font-weight: bold;

  @include dynamic-gradient-background;
}

.loader-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background: $dark;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
