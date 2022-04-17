<template>
  <base-layout>
    <template #header>
      <app-header></app-header>
    </template>

    <template #drawer>
      <app-drawer/>
    </template>

    <template #router-view>
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

// const GameList = [
//       {
//         img:'GameCard.png',
//         title:'Element Blocks',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:2
//       },
//       {
//         img:'image34.png',
//         title:'Onet connect',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:5
//       },
//       {
//         img:'image35.png',
//         title:'Om nom run',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:4
//       },
//       {
//         img:'image36.png',
//         title:'Wiggle',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:3
//       },
//       {
//         img:'image37.png',
//         title:'Maze',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:3
//       },
//       {
//         img:'image38.png',
//         title:'Bubble tower',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:5
//       },
//       {
//         img:'image39.png',
//         title:'Slackinng game',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:4
//       },
//       {
//         img:'image40.png',
//         title:'Merge jewels',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:3
//       },
//       {
//         img:'image41.png',
//         title:'Blazze kick',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:4
//       },
//       {
//         img:'image42.png',
//         title:'Pop-it! 3D',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:1
//       },
//       {
//         img:'image43.png',
//         title:'Yatzy classic',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:4
//       },
//       {
//         img:'image44.png',
//         title:'3D anime fantasy',
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
//         rating:5
//       },

//     ];

import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    BaseLayout,
    AppHeader,
    AppDrawer,
  },
  setup() {
    return {
    };
  },
});
</script>

