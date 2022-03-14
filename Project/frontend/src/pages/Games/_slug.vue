<template>
  <q-page>
    <demo-SDK></demo-SDK>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DemoSDK from '../../components/DemoSDK.vue'

export default defineComponent({
  name: 'GamePage',
  components: {
    DemoSDK,
  },
  setup() {

    return {
    };
  },
});
</script>
