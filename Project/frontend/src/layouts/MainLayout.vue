<template>
  <base-layout>
    <template #header>
      <app-header></app-header>
    </template>

    <template #drawer>
      <app-drawer
        drawer-title="Categories"
        :links-list="categoriesStore.getCategories"
      />
    </template>

    <template #router-view>
      <app-horizontal-drawer :links-list="categoriesStore.getCategories" />
      <router-view />
    </template>

    <template #modals>
    </template>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from './BaseLayout.vue';
import AppHeader from '../components/molecules/AppHeader.vue';
import AppDrawer from '../components/molecules/AppDrawer.vue';
import AppHorizontalDrawer from '../components/molecules/AppHorizontalDrawer.vue';
import { defineComponent, onMounted } from 'vue';
import { useCategoriesStore } from '../store/categories';

export default defineComponent({
  name: 'MainLayout',
  components: {
    BaseLayout,
    AppHeader,
    AppDrawer,
    AppHorizontalDrawer,
  },
  setup() {
    const categoriesStore = useCategoriesStore();
    onMounted(async () => {
      await categoriesStore.fetchCategories();
    });

    return {
      categoriesStore,
    };
  },
});
</script>
