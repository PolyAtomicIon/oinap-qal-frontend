<template>
  <q-layout
    class="main-layout bg-dark"
    view="hHh Lpr lFf"
  >
    <app-header></app-header>
    <app-drawer></app-drawer>

    <q-page-container>
      <q-page
        class="bg-dark-light q-pa-md"
      >
        <my-banner></my-banner>
        <div class="category">
          <span>All games</span>
        </div>
        <div class="main-layout__list">
          <my-game-card
            class="main-layout__game-card"
            v-for="game in GameList"
            :key="game.title"
            :img="game.img"
            :title="game.title"
            :description="game.description"
            :rating="game.rating"
          ></my-game-card>
        </div>
        <q-dialog v-if="true"  v-model="basic">
          <my-auth></my-auth>
        </q-dialog>

        <!-- <Suspense>
          <router-view />
        </Suspense> -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import AppHeader from '../components/AppHeader.vue';
import AppDrawer from '../components/AppDrawer.vue';
import MyBanner from '../components/Banner.vue';
import MyAuth from '../pages/Auth.vue';
import MyGameCard from '../components/GameCard.vue'
const linksList = [
  {
    title: 'Arcades',},
  {
    title: 'Fighters',},
  {
    title: 'Quizzes',  },
  {
    title: 'Puzzles',  },
  {
    title: 'Races',},
  {
    title: 'Childish',},
  {
    title: 'ForGirls',},
];
const GameList = [
      {
        img:'GameCard.png',
        title:'Element Blocks',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:2
      },
      {
        img:'image34.png',
        title:'Onet connect',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:5
      },
      {
        img:'image35.png',
        title:'Om nom run',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:4
      },
      {
        img:'image36.png',
        title:'Wiggle',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:3
      },
      {
        img:'image37.png',
        title:'Maze',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:3
      },
      {
        img:'image38.png',
        title:'Bubble tower',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:5
      },
      {
        img:'image39.png',
        title:'Slackinng game',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:4
      },
      {
        img:'image40.png',
        title:'Merge jewels',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:3
      },
      {
        img:'image41.png',
        title:'Blazze kick',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:4
      },
      {
        img:'image42.png',
        title:'Pop-it! 3D',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:1
      },
      {
        img:'image43.png',
        title:'Yatzy classic',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:4
      },
      {
        img:'image44.png',
        title:'3D anime fantasy',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.',
        rating:5
      },

    ];

import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader,
    AppDrawer,
    MyBanner,
    MyAuth,
    MyGameCard
  },
  setup() {
    const leftDrawerOpen = ref(true);
    return {
      GameList:GameList,
      essentialLinks: linksList,
      leftDrawerOpen,
      basic: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },


});
</script>
<style lang="scss">
.main-layout{
  // max-width: ;
  &__list{
    display: flex;
    flex-wrap: wrap;
  }
  &__game-card{
    margin: 16px;
  }
}
.category{
  font-size: 36px;
  color: white;
  padding:10px;
}
</style>
