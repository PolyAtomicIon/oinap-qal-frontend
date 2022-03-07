<template>
  <div class="game-card">
    <q-card class="game-card__container">
      <q-card-section class="padding0">
        <img :src="require('../assets/images/GameCard.png')" alt="">
      </q-card-section>
      <q-card-section class="padding0">
        <span class="game-card__title text-white">
          Element blocks
        </span>
      </q-card-section>
      <q-card-section class="padding0">
        <span class="game-card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, nulla lobortis ac enim mi, nulla dictum.
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
  max-width: 360px;
}
.game-card__container{
  background-color: #F4F4F4;
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
