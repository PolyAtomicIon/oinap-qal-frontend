<template>
  <q-table
    title="Treats"
    :rows="rows"
    :columns="columns"
    dark
    flat
    card-class="bg-dark-light text-grey"
    table-class="text-white"
    table-header-class="text-grey"
    hide-bottom
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
        >
          <span v-if="col.name !='carbs'" >
            {{ col.value }}</span>

          <q-avatar v-else size="50px" class="shadow-10">
            <img src="data:image/jpeg;base64,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">
          </q-avatar>
        </q-td>
      </q-tr>
    </template>
    <template v-slot:top>
      Filter:
      <q-select
        v-model="visibleColumns"
        multiple
        dense
        standout
        options-dense
        :display-value="$q.lang.table.columns"
        emit-value
        :options="columns"
        option-value="name"
        options-cover
        dark
        color="primary"
        bg-color="grey-9"
        label-color="white"
        class="q-ml-md text-white"
        style="min-width: 150px;"
      />

    </template>
  </q-table>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { ArticlesService } from '../../services/articles'
import { useStore } from '../../store'
import {
  IArticleData,
} from '../../entities'
import { IArticlesService } from '../../services/articles/articles.types'

const columns = [
  {
    name: 'name',
    required: true,
    label: '#',
    align: 'left',
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    '#': 1,
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    '#': 2,
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    '#': 3,
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    '#': 4,
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    '#': 5  ,
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
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

    return {
      email,
      articles,
      columns,
      rows
    };
  },
});
</script>

<style lang="scss" >
.table {
}
</style>
