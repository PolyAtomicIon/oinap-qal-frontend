<template>
  <div
    class="category"
  >
    <a
      v-for="(link, index) in linksList"
      :key="index"
      :class="[
        'c-btn',
        'c-btn--list-item',
        'category__item',
        isRouteActive(link.path) && 'category__item--active',
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
  </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'AppHorizontalDrawer',
  components: {},
  props: {
    linksList: {
      type: Array,
      default: () => ([])
    }
  },
  setup() {
    const $router = useRouter()
    const $route = useRoute()
    const navigateTo = (path: string) => {
      void $router.push(path)
    }
    const isRouteActive = (path: string) => {
      return $route.path == path
    }

    return {
      navigateTo,
      isRouteActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.category {
  min-width: 100%;
  height: 72px;
  display: none;
  align-items: center;
  gap: 10px;
  overflow-x: scroll;

  @media screen and (max-width: $breakpoint-md) {
    display: flex;
  }
  &__item {
    height: 42px;
    background: $dark-grey;
    text-align: center;
    span {
      white-space:nowrap;
    }
    &:first-child {
      margin-left: 20px;
    }
    &:last-child {
      margin-right: 20px;
    }
    &--active {
      background: $primary;
    }
  }
}
</style>
