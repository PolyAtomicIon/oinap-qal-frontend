<template>
  <div
    v-if="!$q.fullscreen.isActive"
    class="drawer"
    :width="drawerWidth"
  >
    <q-list class="q-mt-sm category">
      <q-item-label class="category__header" header> Your Studio </q-item-label>
      <q-item
        v-for="(link, index) in essentialLinks"
        :key="index"
        class="category__item"
        @click="navigateToChapter(item)"
      >
        <q-item-section>
          <button
            class="c-btn c-btn--list-item category__item__btn"
            @click="toggleLeftDrawer"
          >
            <img
              :src="`icons/generics/${link.icon}.svg`"
              alt="icon"
              width="16"
              height="16"
              class="category__item__icon"
            />
            <span>
              {{ link.title }}
            </span>
          </button>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
const linksList = [
  {
    title: 'My games',
    icon: 'games',
  },
  {
    title: 'Statistics',
    icon: 'statistics',
  },
];

import { defineComponent, ref, } from 'vue';

export default defineComponent({
  name: 'StudioDrawer',
  components: {},
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

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      iconLocation,
      drawerWidth,
    };
  },
});
</script>

<style lang="scss">
.drawer {
  background: $dark;

  @media screen and (max-width: $breakpoint-sm) {
    display: none;
  }
}
.category {
  width: 200px;
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
