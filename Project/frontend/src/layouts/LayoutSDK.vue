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

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      elevated
      class="bg-dark flex column justify-center "
      width="450"
    >
      <q-splitter
        v-model="splitterModel"
        style="height: 100%"
      >

        <template v-slot:before>
          <q-tabs
            v-model="tab"
            indicator-color="transparent"
            active-color="white"
            class="text-grey sdk__navbar"
            vertical
          >
            <q-tab name="info" icon="info" />
            <q-tab name="feedback" icon="message"  />
            <q-tab name="rating" icon="star"  />
            <q-tab name="share" icon="share"  />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
            class="bg-secondary text-white"
            dark
            style="height: 100%"
          >
            <q-tab-panel name="info">
              <div class="text-h4 q-mb-md">Mails</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="feedback">
              <div class="text-h4 q-mb-md">Alarms</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="rating">
              <div class="text-h4 q-mb-md">Movies</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
            <q-tab-panel name="share">
              <div class="text-h4 q-mb-md">Movies</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>

      </q-splitter>

    </q-drawer>

    <q-page-container class="sdk__page-container">
      <div class="sdk__highscore-container">
        <p class="sdk__highscore-container__text">
          HighScore: 2455
        </p>
      </div>

      <demo-sdk></demo-sdk>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SdkHeader from '../components/SDK/SdkHeader.vue'
import DemoSdk from '../components/DemoSdk.vue';

export default defineComponent({
  name: 'LayoutSDK',
  components: {
    SdkHeader,
    DemoSdk
  },
  setup () {
    const leftDrawerOpen = ref(false);
    const tab = ref('info');

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      tab,
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
