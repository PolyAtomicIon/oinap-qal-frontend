<template>
  <q-page class="flex column justify-between">
    <div class="q-pa-md">
      <my-banner></my-banner>
      <router-view></router-view>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyBanner from '../../components/molecules/Banner.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    MyBanner,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
