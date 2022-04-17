<template>
  <q-page>
    <my-banner></my-banner>
    <q-card class="q-pa-md q-ma-md">

      {{ store.email }}

      <q-btn @click="store.setEmail('dfsdf@gmail.com')">
        INCREASE
      </q-btn>
    </q-card>
    <router-view></router-view>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useStore} from '../../store/user'

import MyBanner from '../../components/atoms/Banner.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    MyBanner,
  },
  setup() {
    const store = useStore()
    return {
      store
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
