<template>
  <q-card flat class="comment bg-transparent">
    <div class="flex">
      <div class="comment__img q-mr-md"/>
      <div class="flex column">
        <span class="q-pb-xs comment__name">{{user.user}}</span>
        <q-rating
          :model-value="user.rating"
          size="1.2em"
          readonly
          color="yellow-5"
          icon="star_border"
          icon-selected="star"
        ></q-rating>
      </div>
    </div>
    <div>
      <q-input
        dense
        standout
        color="white"
        bg-color="grey-9"
        class="text-white q-mt-sm comment__input"
        input-style="color:white"
        autogrow
        readonly
        :model-value="user.content"
      >
      </q-input>
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
  &__img{
    width: 48px;
    height: 48px;
    background-color: grey;
    border-radius: 100%;
  }
  &__name{
    font-size: 16px;
  }
  &__input{
    font-size: 14px;
    margin-left: 64px;
  }
  &__input textarea{
    overflow: hidden;
  }
}
</style>
