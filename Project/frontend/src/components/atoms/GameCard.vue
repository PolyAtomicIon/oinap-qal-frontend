<template>
  <div class="game-card">
    <q-card class="game-card__container" flat dark>
      <q-card-section class="q-pa-none q-pb-md">
        <q-img
          :src="img"
          alt="preview image"
          class="game-card__img bg-dark"
        />
      </q-card-section>
      <q-card-section class="q-pa-none">
        <span class="game-card__title text-white">
          {{ title }}
        </span>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <span class="game-card__description">
          {{ description }}
        </span>
      </q-card-section>
      <div class="game-card__footer row flex justify-between items-center q-my-md">
        <q-card-section
          class="q-pa-none"
        >
          <q-rating
            :model-value="rating"
            size="1.3em"
            readonly
            color="yellow-5"
            icon="star_border"
            icon-selected="star"
          ></q-rating>
          <!-- <span class="game-card__reviews"> Reviews 21 </span> -->
        </q-card-section>
        <q-card-section
          class="q-pa-none"
        >
          <q-btn
            class="game-card__btn"
            label="Play"
            no-caps
            align="center"
            size="md"
            @click="$router.push(`/games/${id}`)"
          >
            <img
              :src="require(`/public/icons/generics/chevron-right-white.svg`)"
              alt="chevron-right"
              class="game-card__btn__icon"
            />
          </q-btn>
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'no title',
    },
    description: {
      type: String,
      default: 'no description',
    },
    rating: {
      type: Number,
      default: 1,
    },
    id: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.game-card {

  &__container {
    background-color: $dark-light;
    color: white;
  }
  &__img {
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
  &__title {
    font-size: 24px;
  }
  &__description {
    font-size: 16px;
    color: $grey;
  }
  &__reviews {
    color: $grey;
    margin-left: 7px;
  }
  &__btn {
    background-color: #8451d9;
    color: white;
    &__icon {
      height: 18px;
      margin-left: 7px;
      color: #fff;
    }
  }
}
</style>
