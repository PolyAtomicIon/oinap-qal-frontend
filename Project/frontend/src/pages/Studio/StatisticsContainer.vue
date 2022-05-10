<template>
  <q-page class="statistics q-pa-md">
    <div
      class="statistics__header"
    >
      <h1 class="text-h1 text-white">Statistics</h1>
      <p class="text-subtitle1 text-grey text-weight-light">Here you can see how many people have played your game over a period of time</p>
      <div class="statistics__header__filter">
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
    </div>

    <statistics />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Statistics from './Statistics'

export default defineComponent({
  name: 'StudioStatisticsContainer',
  components: {
    Statistics,
  },
  setup() {

    const filterProperties = ref([
      'Newest',
      'Oldest',
      'Popularity',
    ])
    const filterBy = ref('Newest')


    return {
      filterProperties,
      filterBy,
    };
  },
});
</script>

<style lang="scss" scoped>
.statistics {
  &__header {
    &__filter {
      display: flex;
      align-items: center;
      color: $grey;
    }
    margin-bottom: 20px;
  }
}
</style>
