<template>
  <base-layout>
    <template #header>
      <app-header
        :add-game="toggleAddGameDialog"
      ></app-header>
    </template>

    <template #drawer>
      <app-drawer
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
import AppHeader from '../components/molecules/AppHeader.vue';

import { defineComponent, ref } from 'vue';


const linksList = [
  {
    title: 'Profile',
    icon: 'generics/games',
    path: '/user/profile'
  },
  {
    title: 'Settings',
    icon: 'generics/statistics',
    path: '/user/settings'
  },
];

export default defineComponent({
  name: 'UserLayout',
  components: {
    BaseLayout,
    AppDrawer,
    AppHorizontalDrawer,
    AppHeader,
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
