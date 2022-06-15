<template>
  <div class="flex q-mt-xl q-gutter-y-sm">
    <div class="q-pr-md flex items-center">
      <img :src="game.cover" width="150" />
    </div>
    <div class="flex column justify-around q-gutter-y-xs">
      <span class="info__title q-ma-none">{{ game.title }}</span>
      <span class="info__about text-grey">Author: {{ 'author' }}</span>
      <div class="flex items-center">
        <q-rating
          :model-value="game.total_rate"
          size="1.2em"
          readonly
          color="yellow-5"
          icon="star_border"
          icon-selected="star"
        ></q-rating>
        <span class="text-white q-pl-xs">{{ game.total_rate }}</span>
      </div>
    </div>
    <div class="q-mt-md info__about">
      {{game.description}}
    </div>
  </div>
</template>

<script>
const defGameInfo={
  title: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    default: '',
  },
  info: {
    type: String,
    default: '',
  },
}
export default {
  name: 'sdkDrawerInfo',
  props: {
    game:{
      type:Object,
      default:()=>Object
    }
  },
};
</script>

<style lang="scss">
.info {
  &__about {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
  &__title {
    font-size: 24px;
    line-height: 32px;
  }
}
</style>
