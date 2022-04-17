<template>
  <q-card flat class="user-profile text-white  q-px-lg q-py-lg">
    <q-card-section horizontal>
      <q-img
        :src="require('src/assets/user/'+userAbout.img)"
        width="160px"
        height="160px"
      ></q-img>

      <q-card-section vertical class="justify-around">
        <span class="text-h4">{{userAbout.name}}</span>
        <div>
          <q-icon  name="star" color="accent" size="10px"></q-icon>
          <span>{{userAbout.rating}}</span>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
const defUserProfile={
  img:'False.png',
  name:'Alexa Jackson',
  rating: 5023
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
}
</style>
