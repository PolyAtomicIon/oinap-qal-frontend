<template>
  <base-layout>
    <template #header>
      <studio-header
        :add-game="toggleUploadGameDialog"
      ></studio-header>
    </template>

    <template #drawer>
      <studio-drawer/>
    </template>

    <template #router-view>
      <router-view />
    </template>

    <template #modals>
      <studio-upload-dialog
        :is-dialog-active="isUploadGameDialogActive"
        :close-dialog="toggleUploadGameDialog"
      />
      <studio-add-game-form
        :is-dialog-active="isAddGameFormActive"
        :close-dialog="toggleAddGameForm"
      >
      </studio-add-game-form>
    </template>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from './BaseLayout.vue';
import StudioHeader from '../components/molecules/StudioHeader.vue';
import StudioDrawer from '../components/molecules/StudioDrawer.vue';
import StudioUploadDialog from '../components/molecules/StudioUploadDialog.vue';
import StudioAddGameForm from '../components/molecules/StudioAddGameForm.vue';

import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'StudioLayout',
  components: {
    BaseLayout,
    StudioHeader,
    StudioDrawer,
    StudioUploadDialog,
    StudioAddGameForm,
  },
  setup() {
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
</style>
