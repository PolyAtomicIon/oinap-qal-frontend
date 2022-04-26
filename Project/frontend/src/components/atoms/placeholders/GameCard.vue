<template>
  <div class="game-card">
    <q-card class="game-card__container" flat dark>
      <q-card-section class="q-pa-none">
        <q-skeleton class="bg-grey" height="200px" />
      </q-card-section>
      <q-card-section class="q-pa-none">
        <q-skeleton class="bg-grey"  height="25px" type="text"  />
      </q-card-section>
      <q-card-section class="q-pa-none">
        <q-skeleton class="bg-grey" height="35px" />
      </q-card-section>
      <div class="game-card__footer row flex justify-between items-center q-my-xs">
        <q-card-section
          class="q-pa-none"
        >
          <q-skeleton class="bg-grey" height="75px" width="150px" type="text" />
        </q-card-section>
        <q-card-section
          class="q-pa-none"
        >
          <q-skeleton class="bg-grey" type="QBtn" />
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'GameCardPlaceholder',
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
