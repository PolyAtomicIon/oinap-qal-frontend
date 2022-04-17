<template>
    <q-layout class="gamer-layout bg-dark " view="lHh Lpr lFf">
      <q-header>
        <my-header
          :user="{}"
        />
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        :width="400"
        :breakpoint="500"
        class="bg-dark "
      >
        <q-list
          align="left"
          class="gamer-layout__sidebar profile-items">
        <q-item>
          <!-- <my-logo/> -->
        </q-item>
        <q-item>
          <router-link to="/gamer" class="full-width">
            <q-btn unelevated rounded color="primary" class="full-width text-capitalize text-white " icon="chevron_left"  label="Back to Games" />
          </router-link>
        </q-item>
          <q-item
            v-if="$route.path==='/gamer/profile'"
          >
            <my-friends/>
          </q-item>
        </q-list>

      </q-drawer>

      <q-page-container class="bg-grey-10 full-height">
        <router-view/>
      </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import {ref} from 'vue';
import MyHeader from '../components/organisms/MyHeader.vue';
import MyFriends from '../components/molecules/UserFriends.vue'

export default {
  name: 'UserLayout',
  components:{
    MyHeader,
    MyFriends,
  },
  setup() {
    const leftDrawerOpen= ref(true)
    return{
      leftDrawerOpen
    }
  },
  methods:{
    f(){
      console.log()
    }
  }

}
</script>

<style lang="scss">
.gamer-layout{
  padding-right:140px;
  &__sidebar{
    margin-left: 140px;
    padding-top:15px
  }

}
</style>
