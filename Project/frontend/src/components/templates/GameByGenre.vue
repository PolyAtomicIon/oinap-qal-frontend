<template>
  <div class="games-by-genre">
    <h1 class="games-by-genre__title">{{ categoryTitle }}</h1>
    <div v-if="isFetched" class="row q-col-gutter-md">
      <game-card
        class="col-xs-12 col-sm-6 col-md-6 col-lg-4"
        v-for="game in games"
        :key="game.id"
        :img="game.picture"
        :title="game.title"
        :description="game.content"
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
import { IGamesService, provider } from '../../services/index';

import GameCard from '../atoms/GameCard.vue';
import GameCardPlaceholder from '../atoms/placeholders/GameCard.vue';

export default defineComponent({
  name: 'GameByGenre',
  components: {
    GameCard,
    GameCardPlaceholder,
  },
  setup() {
    const $route = useRoute();
    const categoryTitle = computed(() => $route.params.category);
    const categoryId = computed(() => $route.params.categoryId);

    const gameService: IGamesService = provider().Games;
    let games = ref<IGameData[]>([]);
    let isFetched = ref(false);

    const fetchGamesByCategory = async () => {
      isFetched.value = false;
      games.value = [];
      const gamesResponse = await gameService.getAllByCategoryId(
        +categoryId.value
      );
      games.value = gamesResponse.data;
      isFetched.value = true;
    };

    onMounted(fetchGamesByCategory);

    return {
      games,
      categoryId,
      categoryTitle,
      isFetched,
      fetchGamesByCategory,
    };
  },
  watch: {
    async categoryId() {
      await this.fetchGamesByCategory();
    },
  },
});
</script>

<style lang="scss" scoped>
.games-by-genre {
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
