<template>
  <q-layout
    class="bg-dark"
    view="hHh lpR lFf"
  >
    <studio-header
      :add-game="toggleAddGameDialog"
    ></studio-header>

    <q-page-container class="page-container">
      <studio-drawer/>
      <q-page
        class="bg-dark-light q-pa-md"
      >
        <Suspense>
          <router-view />
        </Suspense>
        <studio-upload-dialog
          :is-dialog-active="isAddGameDialogActive"
          :close-dialog="toggleAddGameDialog"
        >
        </studio-upload-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import StudioHeader from '../components/molecules/StudioHeader.vue';
import StudioDrawer from '../components/molecules/StudioDrawer.vue';
import StudioUploadDialog from '../components/molecules/StudioUploadDialog.vue';

import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'StudioLayout',
  components: {
    StudioHeader,
    StudioDrawer,
    StudioUploadDialog,
  },
  setup() {
    const leftDrawerOpen = ref(true);
    const isAddGameDialogActive = ref(false);
    const toggleAddGameDialog = () => {
      isAddGameDialogActive.value = !isAddGameDialogActive.value
    }

    return {
      leftDrawerOpen,
      basic: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleAddGameDialog,
      isAddGameDialogActive,
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
