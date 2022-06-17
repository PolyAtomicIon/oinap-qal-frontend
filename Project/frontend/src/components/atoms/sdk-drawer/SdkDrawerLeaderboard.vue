<template>
  <div class="q-mt-xl leaders">
    <span class="q-px-md leaders__title">Leaderboard</span>
    <q-list class="q-my-md" bordered>
      <div v-for="(user,index) in leadersList" :key="index" class="q-pa-none q-ma-none flex column" >
        <q-item clickable v-ripple class="q-pa-none flex items-center">
          <span class="text-grey q-px-md">#{{index + 1}}</span>
            <span>{{user.username}}</span>
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

<script lang="ts">

import {computed, onMounted, ref} from 'vue';
import {ILeaderBoardService, provider} from 'src/services';
import {useRoute} from 'vue-router';
import {ILeaderItem} from 'src/entities';

export default {
  name: 'SdkDrawerLeaderboard',
  props:{
    leaders:{
      type:Array,
      default:()=>([])
    }
  },
  setup(){
    const leaderBoardService: ILeaderBoardService = provider().LeaderBoard;

    const $route = useRoute();
    const gameTitle = computed(() => $route.params.game_id).value

    let leadersList = ref<ILeaderItem[]>([]);
    let isFetched = ref(false);


    const fetchComments = async () => {
      isFetched.value = false;
      leadersList.value = [];
      let leaderBoardResponse
      leaderBoardResponse = await leaderBoardService.getLeadersByGameID(
        +gameTitle
      );
      leadersList.value = leaderBoardResponse.data.data ;
      leadersList.value = leadersList.value.filter(record => record.score)

      isFetched.value = true;
    };
    onMounted(fetchComments);
    return{
      leadersList
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
