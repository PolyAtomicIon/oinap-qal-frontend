<template>
  <q-page>
    <my-banner></my-banner>
    <h1>All games</h1>
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
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { ArticlesService } from '../../services/articles'
import { useStore } from '../../store'
import {
  IArticleData,
} from '../../entities'
import { IArticlesService } from '../../services/articles/articles.types'

import MyBanner from '../../components/Banner.vue';
import MyGameCard from '../../components/GameCard.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    MyBanner,
    MyGameCard
  },
  async setup() {

    const $store = useStore()
    const email = computed(() => $store.state.email)

    const artcileService: IArticlesService = new ArticlesService();
    const articlesResponse = await artcileService.getAll();
    const articles: IArticleData[] = articlesResponse.data;

    return {
      email,
      articles
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
