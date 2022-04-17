<template>
  <q-card-section class="column flex items-center justify-center">
    <q-uploader
      url="http://localhost:4444/upload"
      label="Custom header"
      flat
      dark
      color="dark"
      class="bg-dark-light"
      :value="value"
      @added="fileAdded"
    >
      <template v-slot:header> </template>
      <template v-slot:list="scope">
        <div
          class="column justify-center items-center q-pa-sm q-gutter-y-md bg-dark-light"
        >
          <img src="../../assets/images/upload-img.svg" alt="upload" />
          <p class="text-center">
            Drag and drop the files here or click the button below to select
            them on your computer.
          </p>
          <q-btn
            v-if="scope.canAddFiles"
            label="Choose file"
            color="primary"
            class="upload-btn q-mt-xs"
            @click="scope.pickFiles"
          >
            <q-uploader-add-trigger />
            <q-tooltip>Pick Files</q-tooltip>
          </q-btn>
        </div>
      </template>
    </q-uploader>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StudioUploadForm',
  props: {
    value: {
      type: File,
      default: null
    },
  },
  emits: ['input'],
  setup(props, { emit }) {
    const fileAdded = (files: File[] ) => {
      emit('input', files)
    }
    return {
      fileAdded
    };
  },
});
</script>

<style lang="scss">
.upload-file -card {
  max-width: 450px;
  @media screen and (max-screen: $breakpoint-sm) {
    max-width: 300px;
  }
}
.upload-btn {
  border-radius: 14px !important;
  padding: 8px 64px !important;
}
// .q-uploader__header {
//   &:before {
//     opacity: 0 !important;
//     background: transparent !important;
//   }
// }
</style>
