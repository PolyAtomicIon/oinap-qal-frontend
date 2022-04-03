<template>
  <q-layout view="hHh lpR fFf" class="sdk">

    <sdk-header
      :toggle-left-drawer="toggleLeftDrawer"
    ></sdk-header>

    <div
      class="bg-overlay mobile-hide"
      v-show="leftDrawerOpen"
      @click="toggleLeftDrawer"
    ></div>

    <sdk-drawer
      :left-drawer-open="leftDrawerOpen"
    ></sdk-drawer>

    <q-page-container class="sdk__page-container">
      <q-page
        :style-fn="myTweak"
      >
        <div class="sdk__highscore-container">
          <p class="sdk__highscore-container__text">
            HighScore: 2455
          </p>
        </div>

        <game-container></game-container>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import SdkHeader from '../../components/molecules/SdkHeader.vue'
import SdkDrawer from '../../components/molecules/SdkDrawer.vue'
import GameContainer from '../../components/molecules/SdkGameContainer.vue';

export default defineComponent({
  name: 'GamePage',
  components: {
    SdkHeader,
    SdkDrawer,
    GameContainer
  },
  setup () {
    const leftDrawerOpen = ref(false);
    const myTweak = (offset: number) => {
      // "offset" is a Number (pixels) that refers to the total
      // height of header + footer that occupies on screen,
      // based on the QLayout "view" prop configuration

      // this is actually what the default style-fn does in Quasar
      return { minHeight: offset ? `calc(var(--vh, 1vh) - ${offset}px)` : 'calc(var(--vh, 1vh))' }
    }

    const fixProblemWithViewHeight = () => {
          // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
          let vh = window.innerHeight * 0.01;
          // Then we set the value in the --vh custom property to the root of the document
          document.documentElement.style.setProperty('--vh', `${vh}px`);
          // We listen to the resize event
          window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
          });
        };
    onMounted(fixProblemWithViewHeight);

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      myTweak,
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
      @media screen and (max-width: $breakpoint-sm) {
        padding: 10px 0;
      }
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
      }
    }

    &__page-container {
      background: $dark;
      overflow: hidden;
    }

    .bg-overlay {
      position: absolute;
      top: 74px;
      width: 100%;
      height: calc(100% - 74px);
      background: rgba($color: #000000, $alpha: 0.45);
      z-index: 2999;
      @media screen and (max-width: $breakpoint-sm) {
        top: 50px;
        height: calc(100% - 50px);
      }
    }

  }
</style>
