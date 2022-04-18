<template>
  <base-layout>
    <template #header>
      <app-header></app-header>
    </template>

    <template #drawer>
      <div></div>
    </template>

    <template #router-view>
      <router-view />
    </template>

    <template #modals>
    </template>
  </base-layout>
</template>

<script lang="ts">
import BaseLayout from './BaseLayout.vue';
import AppHeader from '../components/molecules/AppHeader.vue';

import { defineComponent,  } from 'vue';
export default defineComponent({
  name: 'AdminLayout',
  components: {
    BaseLayout,
    AppHeader,
  },
  setup() {

    return {
    };
  },

});
</script>
