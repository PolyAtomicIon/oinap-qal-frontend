<template>
  <app-header>
    <template v-slot:add-button>
      <q-btn
        :size="$q.platform.mobile ? 'sm' : 'md'"
        class="text-white"
        color="primary"
        icon="add"
        :label="$q.platform.mobile ? '' : 'Add game'"
        no-caps
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

<style lang="scss">
  .header {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 180px repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 16px 24px;

    @media screen and (max-width: $breakpoint-lg) {
      max-width: 1280px;
    }

    @media screen and (max-width: $breakpoint-md) {
      // max-width: 100%;
    }

    @media screen and (max-width: $breakpoint-sm) {
      display: flex;
      justify-content: space-between;
      padding: 8px 24px;
    }

    &__logo {
      display: flex;
      align-items: center;
      width: 150px;
      cursor: pointer;

      @media screen and (max-width: $breakpoint-sm) {
        width: 124px;
      }

      &__figure {
        width: 32px;
      }
      &__title {
        width: 80px;
        margin-left: 24px;

        @media screen and (max-width: $breakpoint-sm) {
          display: none;
        }
      }
    }
    &__search{
      &-field {
        max-width: 300px;

        @media screen and (max-width: $breakpoint-sm) {
          max-width: 160px;
        }

        &__input {
          &:active, &:focus {
            color: $white !important;
          }
        }
      }
      &-btn {
      }
    }
    &__auth {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;

      &__btn {
        padding: 0 15px !important;
        height: 26px;
      }
    }
  }
</style>
