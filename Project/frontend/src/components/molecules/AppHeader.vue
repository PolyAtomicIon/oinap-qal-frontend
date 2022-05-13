<template>
  <q-header v-if="!$q.fullscreen.isActive" class="bg-dark">
    <q-toolbar class="header">
      <div class="header__logo" @click="$router.push('/')">
        <img
          class="header__logo__figure"
          :src="require('../../assets/logo/logo.svg')"
          alt="logo"
        />
        <img
          class="header__logo__title"
          :src="require('../../assets/logo/logo-title.svg')"
          alt="logo-title"
        />
      </div>
      <q-input
        v-model="searchFragment"
        placeholder="Search"
        dense
        rounded
        standout
        dark
        :class="[
          'fit',
          'header__search-field',
          'mobile-hide',
          isFocused && 'header__search-field_active'
          ]"
        bg-color="grey-9"
        color="white"
        input-class="header__search-field__input"
      >
        <template v-slot:append>
          <q-icon v-if="!searchFragment" name="search" color="grey"/>
          <q-icon
            v-else
            name="clear"
            color="white"
            class="cursor-pointer"
            @click="searchFragment = ''"
          />
        </template>
      </q-input>
      <div class="mobile-only">

      <q-slide-transition duration="10">
        <div class="bg-dark-grey header__search-transition" v-show="isFocused">
          <p class="q-ma-none">Search by rating</p>
          <div class="flex wrap">
            <div class="header__search-rating-container">
              <div class="header__search-rating">
                <q-rating
                  model-value=1
                  size="1.2em"
                  readonly
                  color="yellow-5"
                  icon="star_border"
                  icon-selected="star"
                ></q-rating>
              </div >
            </div>
            <div class="header__search-rating-container">
              <div class="header__search-rating">
                <q-rating
                  model-value=2
                  size="1.2em"
                  readonly
                  color="yellow-5"
                  icon="star_border"
                  icon-selected="star"
                ></q-rating>
              </div>
            </div>
            <div class="header__search-rating-container">
              <div class="header__search-rating">
                <q-rating
                  model-value=3
                  size="1.2em"
                  readonly
                  color="yellow-5"
                  icon="star_border"
                  icon-selected="star"
                ></q-rating>
              </div>
            </div>
            <div class="header__search-rating-container">
              <div class="header__search-rating">
                <q-rating
                  model-value=4
                  size="1.2em"
                  readonly
                  color="yellow-5"
                  icon="star_border"
                  icon-selected="star"
                ></q-rating>
              </div>
            </div>
            <div class="header__search-rating-container">
              <div class="header__search-rating">
                <q-rating
                  model-value=5
                  size="1.2em"
                  readonly
                  color="yellow-5"
                  icon="star_border"
                  icon-selected="star"
                ></q-rating>
              </div>
            </div>
          </div>
          <p class="q-ma-none">Search by rating</p>
          <div class="flex wrap">
            <div v-for="hash in hashList"
                 :key="hash"
                 class="header__search-rating-container">
              <div class="header__search-hash">
                <span>{{hash}}</span>
              </div >
            </div>
          </div>
        </div>
      </q-slide-transition>
      </div>
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
      <div class="header__auth" v-if="!user.loggedIn">
        <q-btn
          color="primary"
          :size="$q.platform.is.mobile ? 'sm' : 'md'"
          class="text-white header__auth__btn"
          @click="onSignIn"
          label="Sign in"
          no-caps
        />
        <button class="c-btn c-btn--flat" @click="onSignUp">Sign up</button>
        <slot name="add-button"> </slot>
      </div>
      <user-menu v-else></user-menu>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useModalsStore } from '../../store/modals';
import { useUserStore } from '../../store/user';
import UserMenu from './UserMenu.vue';

export default defineComponent({
  name: 'AppHeader',
  components: { UserMenu },
  props: {},
  setup() {
    const searchFragment = ref('');
    const modals = useModalsStore();
    const isFocused=ref(false)
    const user = useUserStore();
    const $router = useRouter();
    const $q = useQuasar();
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
    const hashList=['#Marvel','#Marvel','#Marvel','#Marvel','#Marvel','#Marvel','#Marvel','#Marvel'];
    const navigateTo = (path: string) => {
      void $router.push({name:'search',params:{searchString:path}})
      isFocused.value=false
    }
    const focus = () => {
      isFocused.value=true
    }
    const unFocus = () => {
      isFocused.value=false
    }

    return {
      searchFragment,
      onSignUp,
      onSignIn,
      navigateTo,
      isFocused,
      focus,
      unFocus,
      hashList,
      user
    }
  }
});
</script>

<style lang="scss">
.header {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 220px repeat(2, 1fr);
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
    width: 190px;
    cursor: pointer;

    @media screen and (max-width: $breakpoint-sm) {
      width: 32px;
    }

    &__figure {
      width: 32px;
    }
    &__title {
      width: 96px;
      margin-left: 16px;

      @media screen and (max-width: $breakpoint-sm) {
        display: none;
      }
    }
  }
  &__search {
    &-field {
      max-width: 300px;

      &__input {
        &:active,
        &:focus {
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
      @media screen and (max-width: $breakpoint-sm) {
        font-size: 14px !important;
      }
    }
  }
}
</style>
