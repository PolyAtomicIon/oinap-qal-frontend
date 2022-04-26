<template>
  <q-carousel
    v-model="slide"
    animated
    control-color="white"
    arrows
    height="300px"
    class="carousels"
  >
    <q-carousel-slide name="map" class="banner row flex justify-between">
      <div class="banner__about">
        <span class="banner__title block text-white"> Phaser </span>
        <span class="banner__description block">
          Invite your friends and play together Phaser!
        </span>
        <div>
          <q-btn class="banner__btn" label="play now"> </q-btn>
        </div>
      </div>
      <div class="banner__img">
        <img :src="require('../../assets/images/BannerImage.png')" alt="" />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Banner',
  setup() {
    return {
      slide: ref('style'),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
};
</script>

<style scoped>
.carousels {
  background: linear-gradient(
    85.28deg,
    #8451d9 0%,
    #6000ff 72.09%,
    #4000ab 100%
  );
  border-radius: 24px;
}
.banner {
  background: linear-gradient(
    85.28deg,
    #8451d9 0%,
    #6000ff 72.09%,
    #4000ab 100%
  );
  border-radius: 24px;
  padding: 40px 80px;
}
.banner__about {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.banner__title {
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
}
.banner__description {
  font-size: 32px;
  line-height: 40px;
  color: white;
}
.banner__btn {
  background-color: white;
  color: #8350d9;
}
</style>
