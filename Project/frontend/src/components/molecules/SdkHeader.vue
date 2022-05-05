<template>
  <q-header class="bg-dark text-white">
    <q-toolbar class="sdk-header">
      <div class="sdk-header__logo">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-bold mobile-hide">
          Easy Play
        </q-toolbar-title>
      </div>
      <div class="sdk-header__title">
        <q-btn
          @click="$router.push('/')"
          round
          dense
          flat
          text-color="grey"
          icon="chevron_left"
        />
        Forest Match
        <span>
          <q-icon name="star" color="orange-5"></q-icon>
          4.5
        </span>
      </div>
      <div class="sdk-header__auth mobile-hide">
        <q-btn
          flat
          round
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
        />
        <q-btn
          color="primary"
          :size="$q.platform.mobile ? 'sm' : 'md'"
          class="text-white header__auth__btn"
          @click="signIn"
          label="Sign in"
          no-caps
        />
        <button class="c-btn c-btn--flat" @click="signUp">Sign up</button>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SdkHeader',
  components: {},
  props: {
    toggleLeftDrawer: {
      type: Function,
      default: () => ({}),
    },
    signIn: {
      type: Function,
      default: () => ({}),
    },
    signUp: {
      type: Function,
      default: () => ({}),
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
    };
  },
});
</script>

<style lang="scss">
.sdk-header {
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px 24px;
  height: 74px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media screen and (max-width: $breakpoint-lg) {
    max-width: 1280px;
  }

  @media screen and (max-width: $breakpoint-md) {
    // max-width: 100%;
  }

  @media screen and (max-width: $breakpoint-sm) {
    padding: 8px 24px;
    height: 50px;
  }

  &__logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 21px;
    font-weight: 500;
    span {
      display: flex;
      align-items: center;
      gap: 7px;
      color: $grey;
    }
    @media screen and (max-width: $breakpoint-sm) {
      font-size: 16px;
    }
  }
  &__auth {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: row-reverse;

    &__btn {
      padding: 0 15px !important;
      height: 26px;
    }
  }
}
</style>
