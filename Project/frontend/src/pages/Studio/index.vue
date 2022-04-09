<template>
  <div class="table">
    <div
      class="table__header"
    >
      Filter:
      <q-select
        v-model="filterBy"
        dense
        standout
        emit-value
        :options="filterProperties"
        options-dense
        dark
        color="white"
        class="q-ml-md"
        style="width: 150px;"
      />
    </div>
    <q-scroll-area style="height: 100%; max-width: 100%;">
      <q-table
        :rows="rows"
        :columns="columns"
        dark
        flat
        card-class="bg-dark-light"
        table-class="text-white"
        table-header-class="text-grey"
        hide-bottom
        hide-top
        row-key="index"
        class="table"
      >
        <template v-slot:header="props">
          <q-tr
            :props="props"
            class="text-grey"
          >
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
            <q-th auto-width />
            <q-th auto-width />
            <q-th auto-width />
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              <q-img
                v-if="col.name == 'cover'"
                :src="col.value"
                :ratio="16/9"
                fit="cover"
                class="rounded-borders"
                width="96px"
              />
              <q-rating
                v-else-if="col.name == 'rating'"
                :model-value="col.value"
                color="yellow-5"
                icon="star_border"
                icon-selected="star"
              ></q-rating>
              <span v-else >
                {{ col.value }}
              </span>
            </q-td>
            <q-td auto-width>
              <q-btn
                size="sm"
                color="white"
                flat
                round
                dense
                @click="props.expand = !props.expand"
                icon="delete"
              >
                <q-tooltip class="bg-white text-dark" anchor="top right" self="center end">Delete</q-tooltip>
              </q-btn>
            </q-td>
            <q-td auto-width>
              <q-btn
                size="sm"
                color="white"
                flat
                round
                dense
                @click="props.expand = !props.expand"
                icon="edit"
              >
                <q-tooltip class="bg-white text-dark" anchor="top right" self="center end">Edit</q-tooltip>
              </q-btn>
            </q-td>
            <q-td auto-width>
              <q-btn
                size="sm"
                color="white"
                flat
                round
                dense
                @click="props.expand = !props.expand"
                icon="chevron_right"
              >
                <q-tooltip class="bg-white text-dark" anchor="top right" self="center end">Statistics</q-tooltip>
              </q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-scroll-area>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { ArticlesService } from '../../services/articles'
import { useStore } from '../../store'
import {
  IArticleData,
} from '../../entities'
import { IArticlesService } from '../../services/articles/articles.types'

const columns = [
  {
    name: 'index',
    label: '#',
    field: 'index'
  },
  { name: 'cover', align: 'center', label: 'Cover', field: 'cover',},
  { name: 'name', label: 'Name', align: 'left', field: 'name' },
  { name: 'date', label: 'Date', align: 'left', field: 'date', sortable: true },
  { name: 'played', label: 'Played', field: 'played', sortable: true },
  { name: 'feedbacks', label: 'Feedbacks', field: 'feedbacks', sortable: true },
  { name: 'rating',  align: 'left', label: 'Rating', field: 'rating', sortable: true, },
]

const rows = [
  {
    index: 1,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt',
    date: '12.02.2022',
    played: 96,
    feedbacks: 87,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    index: 2,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt',
    date: '12.02.2022',
    played: 96,
    feedbacks: 87,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    index: 3,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt',
    date: '12.02.2022',
    played: 96,
    feedbacks: 87,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    index: 4,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt',
    date: '12.02.2022',
    played: 96,
    feedbacks: 87,
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    index: 5,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt',
    date: '12.02.2022',
    played: 96,
    feedbacks: 87,
    rating: Math.floor(Math.random() * 5) + 1,
  },
]

export default defineComponent({
  name: 'StudioIndex',
  components: {
  },
  async setup() {

    const $store = useStore()
    const email = computed(() => $store.state.email)

    const artcileService: IArticlesService = new ArticlesService();
    const articlesResponse = await artcileService.getAll();
    const articles: IArticleData[] = articlesResponse.data;

    const filterProperties = ref([
      'Newest',
      'Oldest',
      'Popularity',
    ])
    const filterBy = ref('Newest')

    return {
      email,
      articles,
      columns,
      rows,
      filterProperties,
      filterBy
    };
  },
});
</script>

<style lang="scss" >
.table {
  max-width: 100%;
  height: 100%;
  &__header {
    display: flex;
    align-items: center;
    color: $grey;
    margin-bottom: 20px;
  }
}
</style>
