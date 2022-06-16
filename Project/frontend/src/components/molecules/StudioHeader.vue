<template>
  <app-header>
    <template v-slot:add-button>
      <q-btn
        v-if="user.loggedIn"
        size="md"
        class="text-white c-desktop-only"
        color="primary"
        icon="add"
        label="Add game"
        no-caps
        @click="addGame"
      />
      <q-btn
        v-if="user.loggedIn"
        size="sm"
        class="text-white c-mobile-only"
        color="primary"
        icon="add"
        round
        :style="{height: '30px'}"
        @click="addGame"
      />
    </template>
  </app-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './AppHeader.vue';
import { useUserStore } from '../../store/user';

export default defineComponent({
  name: 'StudioHeader',
  components: {
    AppHeader,
  },
  props: {
    addGame: {
      type: Function,
      default: () => ({}),
    },
  },
  setup() {
    const user = useUserStore();

    return {
      user,
    };
  },
});
</script>

<style lang="scss" scoped>
  .c {
    &-desktop-only {
      @media screen and (max-width: $breakpoint-sm) {
        display: none;
      }
    }
    &-mobile-only {
      display: none;
      @media screen and (max-width: $breakpoint-sm) {
        display: inline-flex;
      }
    }
  }
</style>
