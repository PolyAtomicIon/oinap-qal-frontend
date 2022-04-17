<template>
  <q-layout
    class="bg-dark"
    view="hHh lpR lFf"
  >
    <studio-header
      :add-game="toggleUploadGameDialog"
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
          :is-dialog-active="isUploadGameDialogActive"
          :close-dialog="toggleUploadGameDialog"
        />
        <studio-add-game-form
          :is-dialog-active="isAddGameFormActive"
          :close-dialog="toggleAddGameForm"
        >
        </studio-add-game-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import StudioHeader from '../components/molecules/StudioHeader.vue';
import StudioDrawer from '../components/molecules/StudioDrawer.vue';
import StudioUploadDialog from '../components/molecules/StudioUploadDialog.vue';
import StudioAddGameForm from '../components/molecules/StudioAddGameForm.vue';

import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'StudioLayout',
  components: {
    StudioHeader,
    StudioDrawer,
    StudioUploadDialog,
    StudioAddGameForm,
  },
  setup() {
    const leftDrawerOpen = ref(true)
    const step = ref(1)

    const isAddGameFormActive = ref(false)
    const toggleAddGameForm = () => {
      isAddGameFormActive.value = !isAddGameFormActive.value
    }

    const isUploadGameDialogActive = ref(false)
    const toggleUploadGameDialog = () => {
      if(step.value > 2)
        toggleAddGameForm()
      isUploadGameDialogActive.value = !isUploadGameDialogActive.value
      step.value += 1;
    }

    return {
      leftDrawerOpen,
      basic: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      isUploadGameDialogActive,
      toggleUploadGameDialog,
      isAddGameFormActive,
      toggleAddGameForm,
      step,
    };
  },


});
</script>

<style lang="scss">
.page-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
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
</style>
