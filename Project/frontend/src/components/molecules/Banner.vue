<template>
  <q-carousel
    v-model="slide"
    animated
    control-color="white"
    transition-prev="jump-right"
    transition-next="jump-left"
    arrows
    class="carousels q-mt-md"
  >
    <q-carousel-slide name="map" class="banner row flex justify-between">
      <div class="banner__about">
        <span class="banner__title block text-white"> {{ game1.title }} </span>
        <span class="banner__description block">
          Invite your friends and play together Bounce!
        </span>
        <div>
          <q-btn
            no-caps
            unelevated
            text-color="primary"
            color="white"
            label="Play now"
            :to="`/games/${game1.id}`"
          >
          </q-btn>
        </div>
      </div>
      <div class="banner__img flex items-center">
        <img :src="require('../../assets/images/haxball-big-min.png')" alt=""  />
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="e" class="banner row flex justify-between">
      <div class="banner__about">
        <span class="banner__title block text-white"> {{ game2.title }} </span>
        <span class="banner__description block">
          Invite your friends and play together {{ game2.title }}!
        </span>
        <div>
          <q-btn
            no-caps
            unelevated
            text-color="primary"
            color="white"
            label="Play now"
            :to="`/games/${game2.id}`"
          >
          </q-btn>
        </div>
      </div>
      <div class="banner__img flex items-center">
        <img :src="require('../../assets/images/asd.png')" alt=""  />
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="f" class="banner row flex justify-between">
      <div class="banner__about">
        <span class="banner__title block text-white"> {{ game3.title }} </span>
        <span class="banner__description block">
          Invite your friends and play together Bounce!
        </span>
        <div>
          <q-btn
            no-caps
            unelevated
            text-color="primary"
            color="white"
            label="Play now"
            :to="`/games/${game3.id}`"
          >
          </q-btn>
        </div>
      </div>
      <div class="banner__img flex items-center">
        <img :src="require('../../assets/images/BannerImage.png')" alt=""  />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Banner',
  props:{
    game1:{
      type:Object
    },
    game2:{
      type:Object
    },
    game3:{
      type:Object
    },
  },
  setup() {
    return {
      slide: ref('map'),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
};
</script>

<style lang="scss" scoped>
.carousels {
  background: transparent;
  border-radius: 24px;
  height: 300px;

  @media screen and (max-width: $breakpoint-sm) {
    height: 200px;
  }
}
.banner {
  @include dynamic-gradient-background;

  border-radius: 24px;
  padding: 40px 80px;

  @media screen and (max-width: $breakpoint-sm) {
    padding: 20px 80px;
  }

  @media screen and (max-width: $breakpoint-xs) {
    padding: 20px;
  }

  &__about {
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media screen and (max-width: $breakpoint-md) {
      max-width: 350px;
      justify-content: center;
    }
    @media screen and (max-width: $breakpoint-sm) {
      max-width: 200px;
      justify-content: center;
    }
  }
  &__title {
    font-weight: bold;
    font-size: 64px;
    line-height: 64px;
    @media screen and (max-width: $breakpoint-sm) {
      font-size: 32px;
      line-height: 32px;
    }
  }
  &__description {
    font-weight: 200;
    font-size: 32px;
    line-height: 40px;
    color: white;
    @media screen and (max-width: $breakpoint-sm) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  &__img {
    img {
      width: 280px;
    }
    @media screen and (max-width: $breakpoint-md) {
      img {
        width: 220px;
      }
    }
    @media screen and (max-width: $breakpoint-sm) {
      img {
        width: 180px;
      }
    }
    @media screen and (max-width: $breakpoint-xs) {
      display: flex;
      align-items: center;
      img {
        width: 80px;
      }
    }
  }
}
</style>
