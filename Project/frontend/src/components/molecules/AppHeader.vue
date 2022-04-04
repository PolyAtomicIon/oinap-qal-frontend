<template>
  <q-header
    v-if="!$q.fullscreen.isActive"
    class="bg-dark"
    reveal
  >
    <q-toolbar class="header">
      <div
        class="header__logo "
      >
        <img
          class="header__logo__figure"
          :src="require('../../assets/logo/logo.svg')"
          alt="logo"
        >
        <img
          class="header__logo__title"
          :src="require('../../assets/logo/logo-title.svg')"
          alt="logo-title"
        >
      </div>
      <q-input
        v-model="searchFragment"
        placeholder="Search"
        dense
        rounded
        standout
        dark
        class="fit header__search-field mobile-hide"
        bg-color="grey-9"
        color="white"
        input-class="header__search-field__input"
      >
        <template v-slot:append>
          <q-icon v-if="!searchFragment" name="search" />
          <q-icon
            v-else
            name="clear"
            color="white"
            class="cursor-pointer"
            @click="searchFragment = ''"
          />
        </template>
      </q-input>
      <div
        class="mobile-only"
      >
        <q-btn
          flat
          round
          icon="search"
          color="grey"
          size="md"
          class="header__search-btn"
        />
      </div>
      <!-- <q-space class="mobile-hide"></q-space> -->
      <div
        class="header__auth"
      >
        <q-btn
          color="primary"
          :size="$q.platform.mobile ? 'sm' : 'md'"
          class="text-white header__auth__btn"
          @click="signIn"
          label="Sign in"
          no-caps
        />
        <button
          class="c-btn c-btn--flat"
          @click="signUp"
        >
          Sign up
        </button>
      </div>

    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
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
  },
  setup() {
    const searchFragment = ref('');

    return {
      searchFragment
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