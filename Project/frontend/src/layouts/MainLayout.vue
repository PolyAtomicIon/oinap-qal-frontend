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
      <sign-in-dialog />
      <sign-up-dialog />
    </template>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from './BaseLayout.vue';
import AppHeader from '../components/molecules/AppHeader.vue';
import AppDrawer from '../components/molecules/AppDrawer.vue';
import AppHorizontalDrawer from '../components/molecules/AppHorizontalDrawer.vue';
import SignInDialog from '../components/templates/SignInDialog.vue';
import SignUpDialog from '../components/templates/SignUpDialog.vue';
import { defineComponent, onMounted } from 'vue';
import { useCategoriesStore } from '../store/categories';

export default defineComponent({
  name: 'MainLayout',
  components: {
    BaseLayout,
    AppHeader,
    AppDrawer,
    AppHorizontalDrawer,
    SignInDialog,
    SignUpDialog,
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
