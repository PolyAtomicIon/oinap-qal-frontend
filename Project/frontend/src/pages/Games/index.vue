<template>
  <q-page>
    <h3 class="text-center">{{email}}</h3>
    <div class="row items-center justify-evenly q-gutter-sm q-pa-md">
      <q-card
        v-for="article in articles"
        :key="article.id"
        @click="$router.push('/games/1')"
      >
        <img :src="article.picture" height="156" width="256"/>

        <q-card-section>
          <div class="text-h6">{{article.title}}</div>
          <div class="text-subtitle2">{{article.short}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ article.content }}
        </q-card-section>
      </q-card>
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

export default defineComponent({
  name: 'PageIndex',
  components: {
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
