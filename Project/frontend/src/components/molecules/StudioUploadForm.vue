<template>
  <q-card-section class="column flex items-center justify-center">
    <q-uploader
      url="http://localhost:4444/upload"
      label="Custom header"
      flat
      dark
      color="dark"
      class="bg-dark-light"
      @added="closeDialog"
    >
      <template v-slot:header> </template>
      <template v-slot:list="scope">
        <p v-if="scope.files.length > 0">Files is here</p>
        <div
          v-else
          class="column justify-center items-center q-pa-sm q-gutter-y-md bg-dark-light"
        >
          <img src="../../assets/images/upload-img.svg" alt="upload" />
          <p class="text-center">
            Drag and drop the files here or click the button below to select
            them on your computer.
          </p>
          <q-btn
            v-if="scope.canAddFiles"
            @click="scope.pickFiles"
            label="Choose file"
            color="primary"
            class="upload-btn q-mt-xs"
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
  setup() {
    return {};
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
