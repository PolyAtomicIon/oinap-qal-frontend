<template>
  <q-layout
    class="bg-dark"
    view="hHh lpR lFf"
  >
    <slot name="header">
    </slot>

    <q-page-container class="page-container">

      <slot name="drawer">
      </slot>

      <q-page
        class="bg-dark-light scroll-container"
      >
        <Suspense>
          <slot name="router-view">
          </slot>
        </Suspense>

        <slot name="modals">
        </slot>

        <app-footer></app-footer>
      </q-page>

    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppFooter from '../components/molecules/AppFooter.vue';
export default defineComponent({
  name: 'BaseLayout',
  components: {
    AppFooter
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
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (max-width: 1280px) {
    margin: 0;
  }
  @media screen and (max-width: $breakpoint-sm) {
    grid-template-columns: minmax(0, 1fr);
  }
}
.scroll-container {
  overflow-y: scroll;
}
</style>
