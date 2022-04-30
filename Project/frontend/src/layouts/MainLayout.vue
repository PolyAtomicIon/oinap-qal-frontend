<template>
  <base-layout>
    <template #header>
      <app-header
      ></app-header>
    </template>

    <template #drawer>
      <app-drawer
        drawer-title="Categories"
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
      <sign-in-dialog
      />
      <sign-up-dialog
      />
    </template>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from './BaseLayout.vue';
import AppHeader from '../components/molecules/AppHeader.vue';
import AppDrawer from '../components/molecules/AppDrawer.vue';
import AppHorizontalDrawer from '../components/molecules/AppHorizontalDrawer.vue';
import SignInDialog from '../components/templates/SignInDialog.vue';
import SignUpDialog from '../components/templates/SignUpDialog.vue';
import { defineComponent } from 'vue';

const linksList = [
  {
    id: 1,
    title: 'Arcades',
    icon: 'genres/Arcades',
    path: '/Arcades/1'
  },
  {
    id: 2,
    title: 'Fighters',
    icon: 'genres/Fighters',
    path: '/Fighters/2'
  },
];

export default defineComponent({
  name: 'MainLayout',
  components: {
    BaseLayout,
    AppHeader,
    AppDrawer,
    AppHorizontalDrawer,
    SignInDialog,
    SignUpDialog,
  },

  setup() {
    return {
      linksList,
    };
  },
});
</script>

