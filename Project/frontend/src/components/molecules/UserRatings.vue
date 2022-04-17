<template>
  <div class="user-ratings q-mx-lg q-mt-lg">
    <q-list class="user-ratings__container text-white q-px-xs q-py-md">
      <q-item
        v-for="(game,index) in gameRatings"
        :key="game.name"
        class="game"
      >
        <div class="flex justify-between items-center game__title q-pb-xs">
          <div class="flex justify-between items-center ">
            <span>#{{index}}</span>
            <div class="flex q-px-md items-center">
              <div class="flex q-px-md items-center">
                <img :src="require('src/assets/images/'+game.img)" width="36" height="24">
              </div>
              <span>{{game.name}}</span>
            </div>
          </div>
          <div class="flex items-center">
            <q-icon name="star" color="yellow-6" size="25px"></q-icon>
            <span>Top {{game.rating}}</span>
          </div>
        </div>
        <div>
          <q-separator color="grey-9"></q-separator>

        </div>
      </q-item>
    </q-list>

  </div>
</template>

<script>
const defGameRatings=[
  {
    name:'Element blocks',
    img:'image34.png',
    rating:10
  },
  {
    name:'Onet connect',
    img:'image35.png',
    rating:10
  },
  {
    name:'Om nom run',
    img:'image36.png',
    rating:10
  },
  {
    name:'Wiggle',
    img:'image37.png',
    rating:10
  },
  {
    name:'Maze',
    img:'image38.png',
    rating:10
  }
]
export default {
  name: 'UserRatings',
  props:{
    gameRatings:{
      type:Array,
      default:defGameRatings
    }
  }
}
</script>

<style lang="scss">
.user-ratings{
  background: transparent;
  min-height: 800px;
  &__container{
    border:1px solid $purple;
    min-height: 400px;
  }

}
.game{
  display: flex;
  flex-direction: column;
  &__title{
    width: 100%;

  }
}

</style>
