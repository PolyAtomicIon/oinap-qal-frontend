<template>
  <div class="flex q-mt-xl q-gutter-y-sm">
    <div class="q-pr-md flex items-center">
      <img :src="game.cover" class="info__img" />
    </div>
    <div class="flex column justify-around q-gutter-y-xs">
      <span class="info__title q-ma-none">{{ game.title }}</span>
      <span class="info__about text-grey">Author: {{ game.author_username }}</span>
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
  &__img{
    width: 150px;
    border-radius: 10px;
  }
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
