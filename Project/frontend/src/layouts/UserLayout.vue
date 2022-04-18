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

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserLayout',
  components: {
    BaseLayout,
    UserDrawer,
    AppHeader,
  },
  setup() {
    return {
    };
  },

});
</script>

<style lang="scss">
</style>
