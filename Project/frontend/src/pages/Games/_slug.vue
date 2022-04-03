<template>
  <q-layout view="hHh lpR fFf" class="sdk">

    <sdk-header
      :toggle-left-drawer="toggleLeftDrawer"
    ></sdk-header>

    <div
      class="bg-overlay"
      v-show="leftDrawerOpen"
      @click="toggleLeftDrawer"
    ></div>

    <sdk-drawer
      :left-drawer-open="leftDrawerOpen"
    ></sdk-drawer>

    <q-page-container class="sdk__page-container">
      <div class="sdk__highscore-container">
        <p class="sdk__highscore-container__text">
          HighScore: 2455
        </p>
      </div>

      <game-container></game-container>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SdkHeader from '../../components/SDK/SdkHeader.vue'
import SdkDrawer from '../../components/SDK/SdkDrawer.vue'
import GameContainer from '../../components/SDK/index.vue';

export default defineComponent({
  name: 'GamePage',
  components: {
    SdkHeader,
    SdkDrawer,
    GameContainer
  },
  setup () {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
});
</script>

<style lang="scss" scoped>
  .sdk {
    position: relative;
    &__highscore-container {
      padding: 20px 0;
      background: $secondary;
      text-align: center;
      &__text {
        margin: 0;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        // PURPLE LINEAR
        background: linear-gradient(137.44deg, #8451D9 0%, #C5A2FF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }

    &__navbar {
      background: $dark;
      width: 64px;
    }

    &__page-container {
      background: $dark;
      height: calc(100vh - 64px);
    }

    .bg-overlay {
      position: absolute;
      top: 74px;
      width: 100%;
      height: calc(100% - 74px);
      background: rgba($color: #000000, $alpha: 0.45);
      z-index: 2999;
    }

  }
</style>
