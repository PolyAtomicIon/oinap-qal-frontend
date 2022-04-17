<template>
  <div
    v-if="!$q.fullscreen.isActive"
    class="drawer"
    :width="drawerWidth"
  >
    <q-list
      align="left"
      class="user-drawer"
    >
      <q-item class="q-mb-md">
        <q-btn
          to="/home"
          unelevated
          rounded
          no-caps
          color="primary"
          class="text-white back-button q-mx-auto full-width text-weight-normal"
          icon="chevron_left"
          label="Back to games"
        />
      </q-item>
      <q-item
        v-if="$route.path === '/user/profile'"
      >
        <user-friends />
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import UserFriends from '../molecules/UserFriends.vue'

export default defineComponent({
  name: 'UserDrawer',
  components: {
    UserFriends,
  },
  props: {
  },
  setup() {
    const leftDrawerOpen = ref(true);
    const iconLocation = (iconName: string) => {
      return `~assets/icons/genres/${iconName}.svg`;
    };

    const drawerWidth = ref(350);
    const changeDrawerWidth = () => {
      let width = window.innerWidth | window.screen.width
      let breakpointLg = 1280;
      if( width <= breakpointLg  ){
        drawerWidth.value = 250;
      }
      else{
        drawerWidth.value = 350;
      }
    }

    window.addEventListener(
      'resize',
      changeDrawerWidth,
      false
    );

    const $router = useRouter()
    const $route = useRoute()
    const navigateTo = (path: string) => {
      void $router.push(path)
    }
    const isRouteActive = (path: string) => {
      return $route.path == path
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      iconLocation,
      drawerWidth,
      navigateTo,
      isRouteActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.drawer {
  background: $dark;

  @media screen and (max-width: $breakpoint-sm) {
    display: none;
  }
}
.user-drawer {
  margin-left: auto;
  width: 240px;
  &__header {
    color: $white;
    font-size: 24px;
    text-align: left;
    margin-left: 5px;
  }
  &__item {
    &:hover {
      background: none;
    }
    &__btn {
      width: max-content;
    }
  }
  .back-button {
    font-size: 16px;
    padding: 12px;
  }
}
</style>
