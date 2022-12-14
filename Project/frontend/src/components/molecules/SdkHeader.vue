<template>
  <q-header class="bg-dark text-white">
    <q-toolbar class="sdk-header">
      <div class="sdk-header__logo">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title
          class="text-bold mobile-hide"
          @click="$router.push('/')"
        >
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
        {{ gameData && gameData.title || 'Game' }}
        <span>
          <q-icon name="star" color="orange-5"></q-icon>
          {{ gameData && gameData.total_rate || 2 }}
        </span>
      </div>
      <div class="sdk-header__auth mobile-hide" v-if="!user.loggedIn">
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
          @click="onSignIn"
          label="Sign in"
          no-caps
        />
        <button class="c-btn c-btn--flat" @click="onSignUp">Sign up</button>
      </div>
      <user-menu class="mobile-hide" v-else></user-menu>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter, useRoute } from 'vue-router';
import { useModalsStore } from '../../store/modals';
import { useUserStore } from '../../store/user';
import { IGameData } from '../../entities';
import { provider } from '../../services';

import UserMenu from './UserMenu.vue';

export default defineComponent({
  name: 'SdkHeader',
  components: {
    UserMenu,
  },
  props: {
    toggleLeftDrawer: {
      type: Function,
      default: () => ({}),
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const modals = useModalsStore();
    const user = useUserStore();
    const $q = useQuasar();
    const $router = useRouter();
    const $route = useRoute();
    const gameData = ref<IGameData | null>(null);
    const onSignUp = () => {
      if ($q.platform.is.mobile) {
        void $router.push('/mobile-modals/signup');
      } else {
        modals.setShowSignUpModal(true);
      }
    };
    const onSignIn = () => {
      if ($q.platform.is.mobile) {
        void $router.push('/mobile-modals/signin');
      } else {
        modals.setShowSignInModal(true);
      }
    };

    onMounted(() => {
      const gameId = $route.params.game_id;
      void provider()
        .Game.getById(+gameId)
        .then(({ data }) => {
          gameData.value = data.data;
        });
    });

    return {
      onSignUp,
      onSignIn,
      leftDrawerOpen,
      user,
      gameData,
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
    padding: 0px 24px;
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
