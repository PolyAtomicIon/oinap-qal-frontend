<template>
  <div class="games-by-genre">
    <h1 class="games-by-genre__title">{{ genre }}</h1>
    <div
      v-if="isFetched"
      class="row q-col-gutter-md"
    >
      <game-card
        class="col-xs-12 col-sm-6 col-md-6 col-lg-4"
        v-for="game in articles"
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
import { defineComponent, computed, ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ArticlesService } from '../../services/articles/';
import { IArticleData } from '../../entities';
import { IArticlesService } from '../../services/articles/articles.types';

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

    const artcileService: IArticlesService = new ArticlesService();
    let articles: IArticleData[] = reactive([]);
    let isFetched = ref(false);

    onMounted(async () => {
      const articlesResponse = await artcileService.getAll();
      articles.push(...articlesResponse.data)
      isFetched.value = true
    });

    return {
      articles,
      genre,
      isFetched,
    };
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
