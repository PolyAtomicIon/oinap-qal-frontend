<template>
  <q-header v-if="!$q.fullscreen.isActive" class="bg-dark">
    <q-toolbar class="header">
      <div class="header__logo">
        <img
          class="header__logo__figure"
          :src="require('../../assets/logo/logo.svg')"
          alt="logo"
          @click="$router.push('/')"
        />
        <img
          class="header__logo__title"
          :src="require('../../assets/logo/logo-title.svg')"
          alt="logo-title"
          @click="$router.push('/')"
        />
        <div class="hide-desktop q-ml-md">
          <slot name="add-button"> </slot>
        </div>
      </div>
      <div class="">
        <q-input
          v-model="searchFragment"
          placeholder="Search"
          dense
          standout
          dark
          :class="[
            'header__search-field',
            !searchMobile && 'hide__mobile',
            inputWidth && 'header__search-field_active',
          ]"
          bg-color="grey-9"
          color="white"
          input-class="header__search-field__input"
          @keyup.enter="navigateTo(searchFragment)"
          @click="focus"
          @blur="unFocus"
          autofocus
          ref="searchInput"
        >
          <template v-slot:append>
            <q-icon
              v-if="!searchFragment"
              name="search"
              color="grey"
              @click="close($event)"
            />
            <q-icon
              v-else
              name="clear"
              color="white"
              class="cursor-pointer"
              @click="searchFragment = ''"
            />
          </template>
        </q-input>
        <div class="hide__desktop">
          <q-btn
            flat
            round
            icon="search"
            color="grey"
            size="md"
            :class="[
              'header__search-btn',
              searchMobile && 'header__search-btn--hide',
            ]"
            @click="[(searchMobile = true), focus()]"
          />
        </div>
        <q-slide-transition :duration="100">
          <div
            class="bg-dark-grey header__search-transition"
            v-show="isFocused"
          >
            <div class="header__search-transition-container">
              <p class="q-ma-none">Search by rating</p>
              <div class="flex wrap">
                <div
                  v-for="n in 6"
                  :key="n"
                  class="header__search-rating-container"
                  @click="navigateTo('rating', n - 1)"
                >
                  <div class="header__search-rating">
                    <q-rating
                      :model-value="n - 1"
                      :size="$q.platform.is.mobile ? '1em' : '1.2em'"
                      readonly
                      color="yellow-5"
                      icon="star_border"
                      icon-selected="star"
                    ></q-rating>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </q-slide-transition>
      </div>
      <!-- <q-space class="mobile-hide"></q-space> -->
      <div class="header__auth" v-if="!user.loggedIn">
        <q-btn
          color="primary"
          :size="$q.platform.is.mobile ? 'sm' : 'md'"
          class="text-white header__auth__btn"
          @click="onSignIn"
        >
          Sign in
        </q-btn>
        <button class="c-btn c-btn--flat" @click="onSignUp">Sign up</button>
      </div>
      <div class="header__auth-logged-in" v-else>
        <user-menu></user-menu>
        <div class="show-desktop">
          <slot name="add-button"> </slot>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar, QInput } from 'quasar';
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
    const isFocused = ref(false);
    const inputWidth = ref(false);
    const searchMobile = ref(false);
    const searchInput = ref<InstanceType<typeof QInput> | null>(null);
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
    const hashList = [
      '#Marvel',
      '#Marvel',
      '#Marvel',
      '#Marvel',
      '#Marvel',
      '#Marvel',
      '#Marvel',
      '#Marvel',
    ];
    const hashFunction = (hash: string) => {
      searchFragment.value += hash;
    };
    const focus = () => {
      setTimeout(() => (isFocused.value = true), 100);
      setTimeout(() => (inputWidth.value = true), 100);
      setTimeout(() => searchInput.value?.focus(), 100);
      console.log(searchInput.value);
      console.log('???');
    };
    const unFocus = () => {
      setTimeout(() => (isFocused.value = false), 100);
      setTimeout(() => (inputWidth.value = false), 350);
      setTimeout(() => (searchMobile.value = false), 300);
    };
    const close = (event: PointerEvent) => {
      event.preventDefault();
      isFocused.value = false;
      setTimeout(() => (inputWidth.value = false), 350);
      setTimeout(() => (searchMobile.value = false), 300);
    };
    const navigateTo = (path: string, index = -1) => {
      if (index != -1) {
        void $router.push({ name: 'rating', params: { rating: index } });
      } else {
        void $router.push({
          name: 'searchString',
          params: { searchString: path },
        });
      }
      unFocus();
    };
    return {
      onSignUp,
      onSignIn,
      navigateTo,
      focus,
      unFocus,
      hashFunction,
      close,
      searchFragment,
      isFocused,
      inputWidth,
      searchMobile,
      hashList,
      user,
      searchInput,
    };
  },
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
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
  }
  &__logo {
    display: inline-flex;
    flex: 1;
    align-items: center;
    width: 190px;
    margin-right: auto;
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
    position: relative;
    flex: 1;
    &-field .q-field__control {
      border-radius: 50px;
    }
    &-field {
      min-width: 300px;
      max-width: 300px;

      @media screen and (max-width: $breakpoint-xs) {
        width: 100%;
      }

      &_active {
        .q-field__control {
          border-radius: 24px 24px 0 0;
        }
      }
      &__input {
        &:active,
        &:focus {
          color: $white !important;
        }
      }
    }
    &-btn {
      &--hide {
        visibility: hidden;
      }
    }
    &-transition {
      border-radius: 0 0 24px 24px;
      position: fixed;
      max-width: 300px;
      margin-top: 2px;
      &-container {
        margin: 15px;
      }

      @media screen and (max-width: $breakpoint-xs) {
        width: 100%;
      }
    }
    &-rating {
      padding: 6px 6px;
      border: 1px solid $grey;
      border-radius: 50px;
      display: flex;
      flex-wrap: wrap;
      margin: 5px;
    }
    &-rating:hover {
      background-color: $grey;
    }
    &-hash {
      padding: 5px 10px;
      border: 1px solid $grey;
      border-radius: 50px;
      margin: 5px;
      cursor: pointer;
    }
    &-hash:hover {
      background-color: $grey;
    }
    @media screen and (max-width: $breakpoint-xs) {
      &-field {
        position: fixed;
        z-index: 200;
        top: 4px;
        left: 0;
        min-width: 100%;
        padding: 5px 10px;
        &_active {
          min-width: 100%;
          .q-field__control {
            border-radius: 14px;
          }
        }
      }
      &-transition {
        max-width: 94%;
        left: 3%;
        border-radius: 10px;
        margin-top: 22px;
        padding: 0;
        &-container {
          margin: 10px;
        }
      }
      &-rating {
        padding: 4px 4px;
        margin: 2px;
        cursor: pointer;
      }
      &-hash {
        padding: 3px 8px;
        margin: 2px;
      }
    }
  }
  &__auth {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    flex-direction: row-reverse;
    flex: 1;
    min-width: 150px;

    &__btn {
      padding: 0 15px !important;
      height: 36px;
      text-transform: capitalize;
      border-radius: 24px;
      border-style: none;
      @media screen and (max-width: $breakpoint-sm) {
        font-size: 14px !important;
      }
    }
  }
  &__auth-logged-in {
    display: inline-flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 16px;
    flex: 1;

    @media screen and (max-width: $breakpoint-sm) {
      gap: 8px;
    }
  }
}

.hide {
  &__mobile {
    @media screen and (max-width: $breakpoint-xs) {
      display: none;
    }
  }
  &__desktop {
    display: none;
    @media screen and (max-width: $breakpoint-xs) {
      display: block;
    }
  }
}
</style>
