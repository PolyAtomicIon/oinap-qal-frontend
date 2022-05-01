<template>
  <div class="flex q-mt-xl">
    <div class="q-pr-md flex items-center">
      <img :src="require('../../../assets/images/'+img)" width="120">
    </div>
    <div class="flex column justify-around">
      <h6 class="info__title q-ma-none">{{title}}</h6>
      <span class="info__about text-grey">Author:{{author}}</span>
      <div>
        <q-rating
          :model-value="rating"
          size="1.2em"
          readonly
          color="yellow-5"
          icon="star_border"
          icon-selected="star"
        ></q-rating>
        <span class="text-white q-pl-xs">{{rating}}</span>
      </div>
    </div>
  </div>
  <div class="q-mt-md info__about">
    Earn points by combining the same fruits, plants and other forest objects. Combine at least three identical objects to collect them, or connect a large number of identical objects to create powerful bonuses. These bonuses will help you remove soil, grass, moss, stone or ice and collect the necessary number of objects to complete the level. Swap objects using touch controls or mouse and unlock boosters that will help you in the game.
  </div>
</template>

<script>
export default {
  name: 'sdkDrawerInfo',
  props:{
    title:{
      type:String,
      default:''
    },
    rating:{
      type:Number,
      default:0
    },
    author:{
      type:String,
      default:''
    },
    img:{
      type:String,
      default: ''
    },
    info:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss">
.info{
  &__about{
    font-size: 24px;
  }
  &__title{
    font-size: 32px;
  }
}
</style>
