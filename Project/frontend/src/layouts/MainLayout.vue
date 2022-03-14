<template>
  <q-layout class="main-layout bg-dark" view="lHh Lpr lFf">
    <q-header  class="bg-dark">
      <q-toolbar class="flex justify-between">
          <my-search></my-search>
        <div class="">
          <my-button size="small" class="text-white" @click="basic=true" label="Sign up" />
          <my-button size="small" class="text-white" background-color="#8451D9" @click="$emit('login')" label="Sign in"  />
        </div>

      </q-toolbar>
<!--      <q-tabs align="left">-->
<!--        <q-route-tab to="Admin" label="Admin" />-->
<!--        <q-route-tab to="Developer" label="Developer" />-->
<!--        <q-route-tab to="Gamer" label="Gamer" />-->
<!--      </q-tabs>-->
    </q-header>

    <q-drawer  v-model="leftDrawerOpen"  class=" bg-dark"  bordered>
      <q-list align="center" style="padding-top:15px">
        <q-item-label>
          <my-logo></my-logo>
        </q-item-label>
        <q-item-label header> Categories </q-item-label>

        <EssentialLink class="color:white"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
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
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import MySearch from '../stories/atoms/Search.vue'
import MyButton from '../stories/Button.vue';
import MyBanner from '../stories/molecules/Banner.vue';
import MyAuth from '../pages/Auth.vue';
import MyLogo from '../stories/atoms/Logo.vue'
import MyGameCard from '../stories/molecules/GameCard.vue'
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
    MySearch,
    MyButton,
    MyBanner,
    EssentialLink,
    MyAuth,
    MyLogo,
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
  padding: 25px;
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
