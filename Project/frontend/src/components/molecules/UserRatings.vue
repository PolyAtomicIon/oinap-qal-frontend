<template>
  <div class="user-ratings q-mx-lg q-mt-lg">
    <q-table
      :rows="rows"
      :columns="rating"
      dark
      flat
      card-class="bg-dark-light"
      table-class="text-white"
      table-header-class="text-grey"
      hide-bottom
      hide-top
      row-key="index"
      class="ratings"
    >
      <template v-slot:header>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="(col) in props.cols"
            :key="col.name"
            :props="props"
            :auto-width="col.name != 'rating'"
          >
            <q-img
              v-if="col.name == 'cover'"
              :src="col.value"
              :ratio="16/9"
              fit="cover"
              class="rounded-borders"
              width="48px"
            />
            <span
              v-else-if="col.name == 'rating'"
              class="ratings__position"
            >
              <q-icon name="star" color="yellow-8" size="24px" class="q-mr-sm"></q-icon>
              Top {{col.value}}
            </span>
            <span
              v-else-if="col.name == 'index'"
              class="text-grey ratings__index"
            >
              #{{ col.value }}
            </span>
            <span v-else class="ratings__title">
              {{ col.value }}
            </span>
          </q-td>
        </q-tr>
      </template>
    </q-table>

  </div>
</template>

<script>

const columns = [
  {
    name: 'index',
    label: '#',
    field: 'index',
    align: 'left',
  },
  { name: 'cover', align: 'left', label: 'Cover', field: 'cover',},
  { name: 'name', label: 'Name', align: 'left', field: 'name' },
  { name: 'rating',  align: 'right', label: 'Rating', field: 'rating', sortable: true, },
]

const rows = [
  {
    index: 1,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt',
    rating: Math.floor(Math.random() * 100) + 1,
  },
  {
    index: 2,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt 1',
    rating: Math.floor(Math.random() * 100) + 1,
  },
  {
    index: 3,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt',
    rating: Math.floor(Math.random() * 100) + 1,
  },
  {
    index: 4,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt',
    rating: Math.floor(Math.random() * 100) + 1,
  },
  {
    index: 5,
    cover: 'https://img.championat.com/s/735x490/news/big/r/f/epic-games-prekraschaet-torgovlyu-v-svoih-igrah-v-rossii_1646558841801456127.jpg',
    name: 'Frozen Yogurt 5',
    rating: Math.floor(Math.random() * 100) + 1,
  },
]

export default {
  name: 'UserRatings',
  props: {
    rating: {
      type: Array,
      default: columns
    }
  },
  setup() {
    return {
      rows,
      columns
    }
  }
}
</script>

<style lang="scss" scoped>
.ratings {
  border-radius: 8px;
  border: 1px solid $primary;
  padding: 10px;
  &__index, &__title, &__position {
    font-size: 20px;
  }
  tr {
    height: 72px;
  }
}
.user-ratings{
  background: transparent;
  min-height: 800px;
  &__container{
    border:1px solid $purple;
    min-height: 400px;
  }

}
.game{
  display: flex;
  flex-direction: column;
  &__title{
    width: 100%;

  }
}

</style>
