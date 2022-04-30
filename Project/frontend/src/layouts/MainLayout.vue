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
    title: 'Arcades',
    icon: 'genres/Arcades',
    path: '/arcades'
  },
  {
    title: 'Fighters',
    icon: 'genres/Fighters',
    path: '/fighters'
  },
  {
    title: 'Quizzes',
    icon: 'genres/Quizzes',
    path: '/quizzes'
  },
  {
    title: 'Puzzles',
    icon: 'genres/Puzzles',
    path: '/puzzles'
  },
  {
    title: 'Races',
    icon: 'genres/Races',
    path: '/races'
  },
  {
    title: 'Childish',
    icon: 'genres/Childish',
    path: '/childish'
  },
  {
    title: 'For Girls',
    icon: 'genres/ForGirls',
    path: '/for-girls'
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

