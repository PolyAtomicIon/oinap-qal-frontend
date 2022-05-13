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
      @close="toggleLeftDrawer"
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

      <sign-in-dialog />
      <sign-up-dialog />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import SdkHeader from '../../components/molecules/SdkHeader.vue'
import SdkDrawer from '../../components/molecules/SdkDrawer.vue'
import SignInDialog from '../../components/templates/SignInDialog.vue';
import SignUpDialog from '../../components/templates/SignUpDialog.vue';
import GameContainer from '../../components/molecules/SdkGameContainer.vue';
import fixProblemWithViewHeight from '../../services/utils'

export default defineComponent({
  name: 'GamePage',
  components: {
    SdkHeader,
    SdkDrawer,
    GameContainer,
    SignInDialog,
    SignUpDialog,
  },
  setup () {
    const leftDrawerOpen = ref(false);
    const myTweak = (offset: number) => {
      return { minHeight: offset ? `calc(var(--vh, 1vh) - ${offset}px)` : 'calc(var(--vh, 1vh))' }
    }

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
      display: none;
      padding: 20px 0;
      background: $secondary;
      text-align: center;
      @media screen and (max-width: $breakpoint-sm) {
        padding: 10px 0;
        display: none;
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
