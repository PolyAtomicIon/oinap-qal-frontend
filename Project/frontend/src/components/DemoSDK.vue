<template>
  <q-page>
    <q-btn @click="$router.go(-1)" class="q-ma-md">Go back</q-btn>

    <q-card
      class="iframe__container"
      :class="{'iframe__container--fullscreen': $q.fullscreen.isActive}"
    >
      <iframe
        src="http://127.0.0.1:5500/Project/frontend/games-gh-pages/games-gh-pages/bounce/index.html"
        frameborder="0"
        width="100%"
        height="100%"
        ref="iframe"
        class="iframe"
        @load="showAd"
      >
      </iframe>
      <!-- controller -->
      <q-card
        class="q-pa-lg iframe__inner row justify-between"
        ref="sdk"
        square
        bordered
      >
        <q-btn @click="pauseGame" color="primary">Score: {{ score }}</q-btn>
        <q-btn-group>
          <q-btn color="accent" icon="pause" @click="pauseGame" />
          <q-btn color="accent" icon="refresh" @click="restartGame" />
        </q-btn-group>
        <q-btn
          color="secondary"
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
        />
      </q-card>
      <!-- ad window -->
      <q-card v-show="adActive" class="q-pa-lg ad-container" ref="ad-container" square bordered>
        <h3>There will be Ad</h3>
        <q-btn @click="closeAd" color="primary">Close</q-btn>
      </q-card>
    </q-card>

  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref} from 'vue';
// import QCard from 'quasar'

export default defineComponent({
  name: 'DemoSDK',
  setup() {

    const iframe = ref<HTMLIFrameElement | null>(null);
    const sdk = ref<HTMLDivElement | null>(null);
    const score = ref(0);

    const adActive = ref(false);
    const showAd = () => {
      adActive.value = true;
    };
    const closeAd = () => {
      adActive.value = false;
    };

    interface gameMessageInterface {
      data: {
        name: string
        finalScore: number
      }
    }

    // catch messages from iframe
    window.onmessage = (e: gameMessageInterface) => {
      // @ts-ignore
      if( e.data.name === 'gameFinished' ){
      // @ts-ignore
        score.value = e.data.finalScore
      }
      if( e.data.name === 'showAd' ){
      // @ts-ignore
      showAd();
      }
    };

    const pauseGame = () => {
      // console.log(iframe.value)
      iframe.value?.contentWindow?.postMessage('pause', '*');
    }

    const restartGame = () => {
      // console.log(iframe.value)
      iframe.value?.contentWindow?.postMessage('restart', '*');
    }

    onMounted(() => {
      // console.log(iframe.value?.getElementsByTagName('iframe'))
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
    }
  }
});
</script>

<style lang="scss" scoped>
$inner-container-height: 96px;
.iframe {
  height: 100%;
  width: 100%;
  &__container {
    position: relative;
    background: $secondary;
    width: 100%;
    height: 600px;
    padding-top: $inner-container-height;
    &--fullscreen {
      position: absolute;
      z-index: 2999;
      top: 0;
      left: 0;
      height: 100vh;
      padding-top: 0;
    }
  }
  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    background: $accent;
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
  background: $accent;
}
</style>
