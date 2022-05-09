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
        class="bg-dark-light main-content"
      >
        <Suspense>
          <slot name="router-view">
          </slot>
        </Suspense>


        <sign-in-dialog />
        <sign-up-dialog />
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
import SignInDialog from '../components/templates/SignInDialog.vue';
import SignUpDialog from '../components/templates/SignUpDialog.vue';
export default defineComponent({
  name: 'BaseLayout',
  components: {
    AppFooter,
    SignInDialog,
    SignUpDialog,
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
  // height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas: "drawer main-content";
  @media screen and (max-width: 1280px) {
    margin: 0;
  }
  @media screen and (max-width: $breakpoint-md) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "main-content";
  }
}
.main-content {
  grid-area: main-content;
  height: max-content;
}
</style>
