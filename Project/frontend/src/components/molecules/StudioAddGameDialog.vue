<template>
  <q-dialog
    :model-value="isDialogActive"
  >
    <q-card dark class="bg-dark-light upload-file-card">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Add game</div>
        <q-space />
        <q-btn @click="closeDialog" icon="close" flat round dense />
      </q-card-section>

      <studio-upload-form v-if="step == 1"></studio-upload-form>
      <studio-add-game-form v-else></studio-add-game-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import StudioUploadForm from './StudioUploadForm.vue'
import StudioAddGameForm from './StudioAddGameForm.vue'

export default defineComponent({
  components: {
    StudioUploadForm,
    StudioAddGameForm
  },
  props: {
    isDialogActive: {
      type: Boolean,
      default: false
    },
    closeDialog: {
      type: Function,
      default: () => ({})
    }
  },
  setup() {
    const step = ref(1)
    return {
      step
    }
  },
})
</script>

<style lang="scss" scoped >
</style>
