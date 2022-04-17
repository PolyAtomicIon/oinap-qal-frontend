<template>
  <base-layout>
    <template #header>
      <app-header
        :add-game="toggleAddGameDialog"
      ></app-header>
    </template>

    <template #drawer>
      <user-drawer />
    </template>

    <template #router-view>
      <router-view />
    </template>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from './BaseLayout.vue';
import UserDrawer from '../components/molecules/UserDrawer.vue';
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
    UserDrawer,
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
