<template>
  <div>
    <h1>{{genre}}</h1>
    <div
      class="
        row
        items-center
        justify-evenly
        q-gutter-lg
        q-pa-sm
      "
      >
      <my-game-card
        class="main-layout__game-card"
        v-for="game in articles"
        :key="game.id"
        :img="game.picture"
        :title="game.title"
        :description="game.content"
      ></my-game-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { ArticlesService } from '../../services/articles'
import {
  IArticleData,
} from '../../entities'
import { IArticlesService } from '../../services/articles/articles.types'

import MyGameCard from '../atoms/GameCard.vue'

export default defineComponent({
  name: 'GameByGenre',
  components: {
    MyGameCard
  },
  async setup() {

    const $route = useRoute()
    const genre = computed(() => $route.params.genre)

    const artcileService: IArticlesService = new ArticlesService();
    const articlesResponse = await artcileService.getAll();
    const articles: IArticleData[] = articlesResponse.data;

    return {
      articles,
      genre
    };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 36px;
  color: $white;
  margin-left: 36px;
}
</style>
