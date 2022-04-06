<template>
  <app-header>
    <template v-slot:add-button>
      <q-btn
        v-if="$q.platform.mobile"
        size="md"
        class="text-white"
        color="primary"
        icon="add"
        label="Add game"
        no-caps
        @click="addGame"
      />
      <q-btn
        v-else
        size="sm"
        class="text-white"
        color="primary"
        icon="add"
        round
        @click="addGame"
      />
    </template>
  </app-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './AppHeader.vue'

export default defineComponent({
  name: 'StudioHeader',
  components: {
    AppHeader,
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
    addGame: {
      type: Function,
      default: () => ({})
    }
  },
  setup() {

    return {
    }
  }
});
</script>
