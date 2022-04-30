<template>
  <div class="games-by-genre">
    <h1 class="games-by-genre__title">{{ genre }}</h1>
    <div
      v-if="isFetched"
      class="row q-col-gutter-md"
    >
      <game-card
        class="col-xs-12 col-sm-6 col-md-6 col-lg-4"
        v-for="game in Games"
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
    const genre = computed(() => $route.params.genre);

    const artcileService: IGamesService = provider().Games;
    let Games = ref<IGameData[]>([]);
    let isFetched = ref(false);
    const fetchGamesByGenre = async () => {
      isFetched.value = false
      Games.value = [];
      const GamesResponse = await artcileService.getAll();
      Games.value = GamesResponse.data;
      isFetched.value = true
    }

    onMounted(fetchGamesByGenre);

    return {
      Games,
      genre,
      isFetched,
      fetchGamesByGenre
    };
  },
  watch: {
    async genre() {
      await this.fetchGamesByGenre()
    }
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
