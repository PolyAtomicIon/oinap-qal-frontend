<template>
  <div class="games-by-search q-pa-md full-height">
    <h1 class="games-by-search__title">{{ this.$route.params.searchString }}</h1>
    <h1 v-if="this.$route.params.rating" class="games-by-search__title">{{ this.$route.params.rating }}</h1>
    <div v-if="isFetched" class="row q-col-gutter-md">
      <game-card
        class="col-xs-12 col-sm-6 col-md-6 col-lg-4"
        v-for="game in games"
        :key="game.id"
        :img="game.cover"
        :rating="game.total_rate"
        :title="game.title"
        :description="game.description"
      ></game-card>
    </div>
    <div v-else class="row q-col-gutter-md">
      <game-card-placeholder
        class="col-xs-12 col-sm-6 col-md-6 col-lg-4"
        v-for="placeholder in 9"
        :key="placeholder"
      ></game-card-placeholder>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { IGameData } from '../../entities';
import { IGamesSearchService, provider} from '../../services/index';

import GameCard from '../atoms/GameCard.vue';
import GameCardPlaceholder from '../atoms/placeholders/GameCard.vue';

export default defineComponent({
  name: 'GameBySearchString',
  components: {
    GameCard,
    GameCardPlaceholder,
  },
  setup() {
    const $route = useRoute();
    const searchString = computed(() => $route.params.searchString)
    const searchRating = computed(() => $route.params.rating)

    const gameSearchService: IGamesSearchService = provider().Search;
    let games = ref<IGameData[]>([]);
    let isFetched = ref(false);


    const fetchGamesBySearch = async () => {
      isFetched.value = false;
      games.value = [];
      let gamesResponse
      if(+searchRating.value!=-1 && searchRating.value){
        gamesResponse = await gameSearchService.getAllByRating(
          +searchRating.value
        );
        games.value = gamesResponse.data.data as IGameData[];
        console.log('good')
      }
      else{
        gamesResponse = await gameSearchService.getAllBySearch(
          searchString.value as string
        );
        games.value = gamesResponse.data.data as IGameData[];

        console.log(searchRating.value)

      }
      isFetched.value = true;
    };
    onMounted(fetchGamesBySearch);

    return {
      games,
      isFetched,
      fetchGamesBySearch,
      searchString
    };
  },
  watch: {
    async searchString() {
      await this.fetchGamesBySearch();
    },
  },
});
</script>

<style lang="scss" scoped>
.games-by-search {
  &__title {
    font-size: 36px;
    font-weight: 400;
    line-height: 36px;
    margin: 32px 0;
    color: $white;
    text-transform: capitalize;
  }
}
</style>

