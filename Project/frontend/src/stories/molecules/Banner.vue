<template>
  <q-card class="banner row flex justify-between">
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
      <img :src="require('../assets/images/BannerImage.png')" alt="">
    </div>
  </q-card>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>
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
