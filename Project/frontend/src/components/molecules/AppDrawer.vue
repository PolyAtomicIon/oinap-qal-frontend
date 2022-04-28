<template>
  <div
    v-if="!$q.fullscreen.isActive"
    class="drawer"
    :width="drawerWidth"
  >
    <q-list class="q-mt-sm category">
      <q-item-label class="category__header" header> {{drawerTitle}} </q-item-label>
      <q-item
        v-for="(link, index) in linksList"
        :key="index"
        class="category__item"
      >
        <q-item-section>
          <a
            :class="[
              'c-btn',
              'c-btn--list-item',
              isRouteActive(link.path) && 'c-btn--active',
              'category__item__btn'
            ]"
            @click="navigateTo(link.path)"
          >
            <img
              :src="require(`/public/icons/${link.icon}.svg`)"
              alt="icon"
              width="16"
              height="16"
              class="category__item__icon"
            />
            <span>
              {{ link.title }}
            </span>
          </a>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'AppDrawer',
  components: {
  },
  props: {
    drawerTitle: {
      type: String,
      default: 'Easy Play'
    },
    linksList: {
      type: Array,
      default: () => ([])
    }
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
.category {
  width: 240px;
  margin-left: auto;

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
    &__icon {
    }
    &__btn {
      width: max-content;
    }
  }
}
</style>
