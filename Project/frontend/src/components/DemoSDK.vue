<template>
  <q-page>
    <q-btn @click="$router.go(-1)" class="q-ma-md">Go back</q-btn>

    <q-card
      class="iframe__container"
    >
      <iframe
        src="http://127.0.0.1:5500/Project/frontend/games-gh-pages/games-gh-pages/bounce/index.html"
        frameborder="0"
        width="100%"
        height="500px"
        ref="iframe"
        class="iframe"
      >
      </iframe>
      <q-card class="q-pa-lg iframe__inner" ref="sdk">
        <q-btn @click="semdMessageToIframe" color="primary">Score: {{ score }}</q-btn>
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

    interface gameMessageInterface {
      data: {
        name: string
        finalScore: number
      }
    }

    window.onmessage = (e: gameMessageInterface) => {
      // @ts-ignore
      if( e.data.name === 'gameFinished' ){
      // @ts-ignore
        score.value = e.data.finalScore
      }
    };

    const semdMessageToIframe = () => {
      // console.log(iframe.value)
      iframe.value?.contentWindow?.postMessage('pause', '*');
    }

    onMounted(() => {
      // console.log(iframe.value?.getElementsByTagName('iframe'))
    });

    return {
      iframe,
      sdk,
      semdMessageToIframe,
      score
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
  }
  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    background: $primary;
    width: 100%;
    height: $inner-container-height;
  }
}
</style>
