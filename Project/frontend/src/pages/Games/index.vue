<template>
  <q-page>
    <my-banner></my-banner>
    <router-view></router-view>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MyBanner from '../../components/atoms/Banner.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    MyBanner,
  },
  setup() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
