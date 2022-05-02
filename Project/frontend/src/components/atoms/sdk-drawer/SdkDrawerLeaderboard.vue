<template>
  <div class="q-mt-xl leaders">
    <span class="q-px-md leaders__title">Leaderboard</span>
    <q-list class="q-my-md" bordered>
      <div v-for="(user,index) in leaders" :key="index" class="q-pa-none q-ma-none flex column" >
        <q-item clickable v-ripple class="q-pa-none flex items-center">
          <span class="text-grey q-px-md">#{{index}}</span>
          <span>{{user.name}}</span>
          <q-space/>
          <div class="q-pr-md">
            <q-icon class="q-px-xs" color="yellow" name="star"/>
            <span>{{user.score}}</span>
          </div>
        </q-item>
        <q-space/>
        <q-separator class="q-mx-md block" color="grey"/>
      </div>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'SdkDrawerLeaderboard',
  props:{
    leaders:{
      type:Array,
      default:()=>([])
    }
  }
}
</script>

<style lang="scss" scoped>
.leaders{
  @media screen and (max-width: $breakpoint-sm) {
    font-size: 16px;
  }
  &__title{
    font-size: 24px;
  }
}
</style>
