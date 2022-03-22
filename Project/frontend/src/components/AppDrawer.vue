<template>
  <q-drawer
    v-if="!$q.fullscreen.isActive"
    v-model="leftDrawerOpen"
    class="bg-dark"
  >
    <q-list class="q-mt-sm q-pl-md">
      <q-item-label
        class="category__header"
        header
      > Categories </q-item-label>
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
              :src="`icons/genres/${link.icon}.svg`"
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
  </q-drawer>
</template>

<script lang="ts">
const linksList = [{
    title: 'Arcades',
    icon: 'Arcades',
  },
  {
    title: 'Fighters',
    icon: 'Fighters',
  },
  {
    title: 'Quizzes',
    icon: 'Quizzes',
  },
  {
    title: 'Puzzles',
    icon: 'Puzzles',
  },
  {
    title: 'Races',
    icon: 'Races',
  },
  {
    title: 'Childish',
    icon: 'Childish',
  },
  {
    title: 'For Girls',
    icon: 'For Girls',
  },];

import { defineComponent, ref,  } from 'vue';
export default defineComponent({
  name: 'AppDrawer',
  components: {
  },
  setup() {
    const leftDrawerOpen = ref(true);
    const iconLocation = (iconName: string) => {
      return `~assets/icons/genres/${iconName}.svg`
    }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      iconLocation,
    };
  },


});
</script>
<style lang="scss">
.category{
  &__header {
    color: $white;
    font-size: 24px;
    text-align: left;
    margin-left: 18px;
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
