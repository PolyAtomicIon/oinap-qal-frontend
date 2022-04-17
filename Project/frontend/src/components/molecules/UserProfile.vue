<template>
  <q-card flat class="user-profile text-white q-px-lg q-py-lg">
    <q-card-section horizontal>
      <q-img
        :src="require('src/assets/user/'+userAbout.img)"
        width="160px"
        height="160px"
      ></q-img>

      <q-card-section vertical class="justify-around q-ml-md">
        <h1 class="text-h1">{{userAbout.name}}</h1>
        <div class="q-mt-lg">
          <img
            src="~/assets/icons/crown.svg"
            alt="crown-icon"
            class="q-mr-sm"
            height="20"
            width="24"
          >
          <span class="user-profile__rating">{{userAbout.rating}}</span>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
const defUserProfile={
  img:'False.png',
  name:'Alexa Jackson',
  rating: '5,023'
}
export default {
  name: 'UserProfile',
  props:{
    userAbout:{
      type:Object,
      default: defUserProfile
    }
  }
}
</script>

<style lang="scss">
.user-profile{
  background: transparent;
  &__rating {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 300;
  }
}
</style>
