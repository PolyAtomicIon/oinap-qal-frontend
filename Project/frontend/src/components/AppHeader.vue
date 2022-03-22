<template>
  <q-header
    v-if="!$q.fullscreen.isActive"
    class="bg-dark"
  >
    <q-toolbar class="flex justify-between">
      <my-logo></my-logo>
      <my-search></my-search>
      <div>
        <button
          class="c-btn c-btn--flat"
          @click="signUp"
        >
          Sign up
        </button>
        <q-btn
          color="primary"
          size="small"
          class="text-white"
          @click="signIn"
          label="Sign in"
          no-caps
        />
      </div>

    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import MySearch from '../stories/atoms/Search.vue'
import MyLogo from '../stories/atoms/Logo.vue'

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AppHeader',
  components: {
    MySearch,
    MyLogo,
  },
  props: {
    signUp: {
      type: Function,
      default: () => ({})
    },
    signIn: {
      type: Function,
      default: () => ({})
    },
  }
});
</script>
