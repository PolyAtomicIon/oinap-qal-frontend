<template>
  <base-layout>
    <template #header>
      <app-header></app-header>
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
    </template>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from './BaseLayout.vue';
import AppHeader from '../components/molecules/AppHeader.vue';
import AppDrawer from '../components/molecules/AppDrawer.vue';
import AppHorizontalDrawer from '../components/molecules/AppHorizontalDrawer.vue';

const linksList = [
  {
    title: 'Arcades',
    icon: 'genres/Arcades',
    path: '/home/arcades'
  },
  {
    title: 'Fighters',
    icon: 'genres/Fighters',
    path: '/home/fighters'
  },
  {
    title: 'Quizzes',
    icon: 'genres/Quizzes',
    path: '/home/quizzes'
  },
  {
    title: 'Puzzles',
    icon: 'genres/Puzzles',
    path: '/home/puzzles'
  },
  {
    title: 'Races',
    icon: 'genres/Races',
    path: '/home/races'
  },
  {
    title: 'Childish',
    icon: 'genres/Childish',
    path: '/home/childish'
  },
  {
    title: 'For Girls',
    icon: 'genres/For Girls',
    path: '/home/for-girls'
  },
];

import { defineComponent,  } from 'vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    BaseLayout,
    AppHeader,
    AppDrawer,
    AppHorizontalDrawer,
  },
  setup() {
    return {
      linksList
    };
  },
});
</script>

