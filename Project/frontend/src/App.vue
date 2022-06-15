<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from './store/user';

export default defineComponent({
  name: 'App',
  setup() {
    const user = useUserStore();
    user.loadAndSetToken();
  }
});
</script>
