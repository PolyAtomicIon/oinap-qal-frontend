<template>
  <q-layout
    class="bg-dark"
    view="hHh lpR lFf"
  >
    <q-header v-if="!$q.fullscreen.isActive" class="bg-dark" reveal>
      <q-toolbar class="bg-dark text-white">
        <q-btn
          flat
          dense
          no-caps
          icon="chevron_left"
          @click="$router.go(-1)"
          label="Go back"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="page-container">
      <q-page
        class="bg-dark q-pa-sm"
      >
        <Suspense>
          <router-view />
        </Suspense>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MobileViewerLayout',
  components: {
  },

  setup() {
    return {
    };
  },
});
</script>
