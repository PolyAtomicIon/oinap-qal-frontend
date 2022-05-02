<template>
  <div class="q-mt-xl share">
    <span class="share__title">Share with your friends</span>
    <div class="share__links">
      <q-item class="share__link" >
        <img :src="require('../../../assets/icons/copylink.svg')" alt="copy-link" width="38" @click="share">
        <span>Copy Link</span>
      </q-item>
      <q-item class="share__link">
        <img :src="require('../../../assets/icons/facebook.svg')" alt="facebook" width="38">
        <span>Facebook</span>
      </q-item>
      <q-item class="share__link">
        <img :src="require('../../../assets/icons/twitter.svg')" alt="twitter" width="38">
        <span>Twitter</span>
      </q-item>
      <q-item class="share__link">
        <img :src="require('../../../assets/icons/gmail.svg')" alt="gmail" width="38">
        <span>Gmail</span>
      </q-item>
      <q-item class="share__link">
        <img :src="require('../../../assets/icons/vk.svg')" alt="vk" width="38">
        <span>VK</span>
      </q-item>
    </div>
  </div>
</template>

<script >
const share = () => {
  const shareData = {
    title: 'Easy Play',
    text: 'Play game',
    url: 'https://developer.mozilla.org'
  }
  void window.navigator.share(shareData)
}
export default {
  name: 'SdkDrawerShare',
  setup() {
    return {
      share
    }
  }
}
</script>

<style lang="scss">
.share{
  &__title{
    font-size: 24px;
  }
  &__links{
    text-align: center;
    font-size: 5px;
    display: flex;
    align-items: center;
    max-width: 300px;
    width: 100%;
    justify-content: space-between;
    padding-top: 10px;
  }
  &__link{
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    cursor: pointer;
  }
  &__link span{
    padding-top: 5px;
  }
}
</style>
