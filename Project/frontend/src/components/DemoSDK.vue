<template>
  <q-page>
    <q-card class="q-ma-md q-pa-lg">
      <q-btn @click="$router.go(-1)">Go back</q-btn>
    </q-card>

    <iframe
      src="https://biz-oinaimyz.herokuapp.com/index.html"
      frameborder="0"
      width="100%"
      height="500px"
      class="iframe"
      ref="iframe"
    >
    </iframe>

    <q-card class="q-pa-lg iframe__inner" ref="sdk">
      <q-btn @click="showIframe" color="primary">Hello</q-btn>
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

    const showIframe = () => {
      console.log(iframe.value)
    }

    onMounted(() => {
      console.log(iframe.value)
      // console.log(iframe.value?.getElementsByTagName('iframe'))
    });

    return {
      iframe,
      sdk,
      showIframe
    }
  }
});
</script>

<style lang="scss" scoped>
.iframe {
  position: relative;
  margin: 15px;
  &__inner {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background: $primary;
    width: 100%;
    height: 160px;
  }
}
</style>
