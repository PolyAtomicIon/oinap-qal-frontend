<template>
  <div class="game-card">
    <q-card class="game-card__container" flat dark>
      <q-card-section class="q-pa-none">
        <img :src="require('../assets/images/'+img)" alt="">
      </q-card-section>
      <q-card-section class="q-pa-none">
        <span class="game-card__title text-white">
          {{ title }}
        </span>
      </q-card-section>
      <q-card-section class="q-pa-none">
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
          <q-btn
            class="game-card__btn"
            label="Play"
            no-caps
            align="center"
            size="md"
          >
            <img src="../assets/icons/chevron-right.svg" alt="chevron-right" class="game-card__btn__icon"/>
          </q-btn>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'GameCard',
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

<style lang="scss" scoped>
.game-card{
  width: 100%;
  max-width: 357px;

  &__container{
    background-color: $dark-light;
    color: white;
  }
  &__title{
    font-size: 24px;
  }
  &__description{
    font-size: 16px;
    color: $grey;
  }
  &__btn{
    background-color: #8451D9;
    color: white;
    &__icon {
      width: 6px;
      height: 9px;
      margin-left: 10px;
    }
  }
}
img{
  width: 100%;
}
</style>
