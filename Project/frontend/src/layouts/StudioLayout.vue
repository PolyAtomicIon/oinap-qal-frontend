<template>
  <base-layout>
    <template #header>
      <studio-header
        :add-game="toggleAddGameDialog"
      ></studio-header>
    </template>

    <template #drawer>
      <app-drawer
        drawer-title="Your studio"
        :links-list="linksList"
      />
    </template>

    <template #router-view>
      <app-horizontal-drawer
        :links-list="linksList"
      />
      <router-view />
    </template>

    <template #modals>
      <studio-add-game-dialog
        :is-dialog-active="isAddGameDialogActive"
        :close-dialog="toggleAddGameDialog"
      />
    </template>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from './BaseLayout.vue';
import AppDrawer from '../components/molecules/AppDrawer.vue';
import AppHorizontalDrawer from '../components/molecules/AppHorizontalDrawer.vue';
import StudioHeader from '../components/molecules/StudioHeader.vue';
import StudioAddGameDialog from '../components/templates/StudioAddGameDialog.vue';

import { defineComponent, ref } from 'vue';


const linksList = [
  {
    title: 'My games',
    icon: 'generics/games',
    path: '/studio'
  },
  {
    title: 'Statistics',
    icon: 'generics/statistics',
    path: '/studio/statistics'
  },
  {
    title: 'Guide',
    icon: 'generics/document',
    path: '/studio/guide'
  },
];

export default defineComponent({
  name: 'StudioLayout',
  components: {
    BaseLayout,
    AppDrawer,
    AppHorizontalDrawer,
    StudioHeader,
    StudioAddGameDialog,
  },
  setup() {
    const step = ref(1)

    const isAddGameDialogActive = ref(false)
    const toggleAddGameDialog = () => {
      isAddGameDialogActive.value = !isAddGameDialogActive.value
    }

    return {
      isAddGameDialogActive,
      toggleAddGameDialog,
      step,
      linksList
    };
  },

});
</script>

<style lang="scss">
</style>
