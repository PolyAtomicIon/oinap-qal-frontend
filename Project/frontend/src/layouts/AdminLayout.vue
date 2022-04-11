<template>
  <q-layout
    class="bg-dark"
    view="hHh lpR lFf"
  >
    <app-header></app-header>

    <q-page-container class="page-container">
      <!-- <studio-drawer/> -->
      <div></div>
      <q-page
        class="bg-dark-light q-pa-md"
      >
        <Suspense>
          <router-view />
        </Suspense>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import AppHeader from '../components/molecules/AppHeader.vue';
// import StudioDrawer from '../components/molecules/StudioDrawer.vue';

import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'StudioLayout',
  components: {
    AppHeader,
    // StudioDrawer,
  },
  setup() {
    const leftDrawerOpen = ref(true)

    return {
      leftDrawerOpen,
      basic: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },


});
</script>

<style lang="scss">
.page-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (max-width: 1280px) {
    margin: 0;
  }
  @media screen and (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
</style>
