<template>
  <div class="q-pa-md full-height">
    <my-banner></my-banner>
    <div v-if="isFetched && $route.path === '/'" class="row q-col-gutter-md q-mt-md">
      <game-card
        class="col-xs-12 col-sm-6 col-md-6 col-lg-4"
        v-for="game in games"
        :key="game.id"
        :img="game.cover"
        :title="game.title"
        :description="game.description"
        :rating="game.total_rate"
        :id="game.id"
      ></game-card>
    </div>
    <div v-else class="row q-col-gutter-md">
      <game-card-placeholder
        class="col-xs-12 col-sm-6 col-md-6 col-lg-4"
        v-for="placeholder in 9"
        :key="placeholder"
      ></game-card-placeholder>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref} from 'vue';
import MyBanner from '../../components/molecules/Banner.vue';
import {IGamesService, provider} from "src/services";
import {IGameData} from "src/entities";
import GameCard from '../../components/atoms/GameCard.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    MyBanner,
    GameCard,
  },
  setup() {

    const gamesService: IGamesService = provider().Games;
    let games = ref<IGameData[]>([]);
    let isFetched = ref(false);

    const fetchGamesBySearch = async () => {
      isFetched.value = false;
      games.value = [];
      let gamesResponse

        gamesResponse = await gamesService.getAll();
        games.value = gamesResponse.data.data as IGameData[];
        console.log(games.value)
      isFetched.value = true;
    };
    onMounted(fetchGamesBySearch);
    return {
      games,
      isFetched
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
