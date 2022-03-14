<template>
  <div class="game-card">
    <q-card class="game-card__container">
      <q-card-section class="padding0">
        <img :src="require('../assets/images/'+img)" alt="">
      </q-card-section>
      <q-card-section class="padding0">
        <span class="game-card__title text-white">
          {{ title }}
        </span>
      </q-card-section>
      <q-card-section class="padding0">
        <span class="game-card__description">
          {{description}}
        </span>
      </q-card-section>
      <div class="game-card__footer row">
        <q-card-section>
          <q-rating
            v-model="ratingModel"
            size="1.5em"
            color="yellow-5"
            icon="star_border"
            icon-selected="star"
          ></q-rating>
          <span class="game-card__reviews">
            Reviews 21
          </span>
        </q-card-section>
        <q-card-section>
          <q-btn class="game-card__btn" label="Play  >"></q-btn>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "GameCard",
  props:{
    img:{
      type:String ,
      default:''
    },
    title:{
      type:String,
      default:'no title'
    },
    description:{
      type:String,
      default:'no description'
    },
    rating:{
      type:Number,
      default:1
    }
  },
  setup () {
    return {
      ratingModel: ref(1)
    }
  }
}
</script>

<style scoped>
.game-card{
  width: 100%;
  max-width: 357px;
}
.game-card__container{
  background-color: #202020;
  color: white;
}
.game-card__title{
  font-size: 24px;
}
.game-card__description{
  font-size: 16px;
}
.game-card__btn{
  background-color: #8451D9;
  color: white;
  padding: 8px 24px;
}
.padding0{
  padding: 0;
}
img{
  width: 100%;
}
</style>
