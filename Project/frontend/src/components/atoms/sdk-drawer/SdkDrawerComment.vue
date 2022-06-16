<template>
  <q-card flat class="comment bg-transparent">
    <div class="flex row">
      <div>
        <div v-if="!user.avatar" class="comment__img q-mr-md"/>
        <img v-else :src="user.avatar" class="comment__img q-mr-md">
      </div>
      <div class="flex column comment__body">
        <span class="q-pb-xs comment__name">{{user.username}}</span>
        <q-input
          dense
          standout
          color="white"
          bg-color="grey-9"
          class="text-white comment__input"
          input-style="color:white"
          autogrow
          readonly
          :model-value="user.content"
        >
        </q-input>
      </div>
    </div>
  </q-card>
</template>

<script>
const defUser={
  img:'',
  name:'Props',
  rating:3,
  comment:'We have a problem\n' +
    ':D'
}
export default {
  name: 'SdkDrawerComment',
  props:{
    user:{
      type:Object,
      default:defUser
    }
  }
}
</script>

<style lang="scss">
.comment{
  font-size: 16px;
  width: 100%;
  &__body{
    width: 80%;
  }
  &__img{
    width: 48px;
    height: 48px;
    background-color: grey;
    border-radius: 100%;
    object-fit: cover;
  }
  &__name{
    font-size: 16px;
  }
  &__input{
    font-size: 14px;
  }
  &__input textarea{
    overflow: hidden;
  }
}
</style>
