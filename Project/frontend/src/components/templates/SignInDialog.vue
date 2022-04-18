<template>
  <q-dialog
    :model-value="isDialogActive"
  >
    <q-card dark class="bg-dark-light upload-file-card">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Sign in</div>
        <q-space />
        <q-btn @click="closeDialog" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
        <sign-in-form />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignInForm from '../molecules/SignInForm.vue'

export default defineComponent({
  name: 'SignInDialog',
  components: {
    SignInForm,
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
    return {
    }
  },
})
</script>

<style lang="scss" scoped >
</style>
