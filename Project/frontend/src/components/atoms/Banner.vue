<template>
  <q-carousel
    v-model="slide"
    transition-prev="scale"
    transition-next="scale"
    animated
    control-color="white"
    arrows
    height="300px"
    class="carousels q-mx-lg"
  >


    <q-carousel-slide name="style" class="column no-wrap flex-center">
      <q-icon name="style" size="56px"></q-icon>
      <div class="q-mt-md text-center">
        {{ lorem }}
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="tv" class="column no-wrap flex-center">
      <q-icon name="live_tv" size="56px"></q-icon>
      <div class="q-mt-md text-center">
        {{ lorem }}
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="layers" class="column no-wrap flex-center">
      <q-icon name="layers" size="56px"></q-icon>
      <div class="q-mt-md text-center">
        {{ lorem }}
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="map" class="banner row flex justify-between">
      <div class="banner__about">
      <span class="banner__title block text-white">
          Phaser
      </span>
        <span class="banner__description block">
        Invite your friends and play together Phaser!
      </span>
        <div>
          <q-btn class="banner__btn" label="play now">
          </q-btn>
        </div>
      </div>
      <div class="banner__img">
        <img :src="require('../../assets/images/BannerImage.png')" alt="">
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'Banner',
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>

<style scoped>
.carousels{
  background: linear-gradient(85.28deg, #8451D9 0%, #6000FF 72.09%, #4000AB 100%);
  border-radius: 24px;
}
.banner{
  background: linear-gradient(85.28deg, #8451D9 0%, #6000FF 72.09%, #4000AB 100%);
  border-radius: 24px;
  padding: 40px 80px;
}
.banner__about{
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.banner__title{
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
}
.banner__description{
  font-size: 32px;
  line-height: 40px;
  color: white;
}
.banner__btn{
  background-color: white;
 color: #8350D9;
}
</style>
