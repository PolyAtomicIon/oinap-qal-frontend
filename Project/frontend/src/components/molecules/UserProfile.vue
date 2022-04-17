<template>
  <div class="text-white q-px-lg q-py-lg">
    <div
      class="user-profile"
    >
      <q-img
        :src="require('src/assets/user/'+userAbout.img)"
        width="160px"
        height="160px"
      ></q-img>

      <div
        class="user-profile__rank justify-around q-ml-md"
      >
        <h1 class="text-h1">{{userAbout.name}}</h1>
        <div class="user-profile__rating">
          <img
            src="~/assets/icons/crown.svg"
            alt="crown-icon"
            class="q-mr-sm"
            height="20"
            width="24"
          >
          <span>{{userAbout.rating}}</span>
        </div>
      </div>
    </div>
  </div>
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
  display: flex;
  gap: 24px;
  @media screen and (max-width: $breakpoint-sm) {
    flex-direction: column;
    align-items: center;
  }
  &__rank {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: $breakpoint-sm) {
      align-items: center;
    }
  }
  &__rating {
    margin-top: 0px;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 300;
  }
}
</style>
