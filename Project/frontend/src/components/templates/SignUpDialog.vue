<template>
  <q-dialog
    :model-value="isDialogActive"
  >
    <q-card dark class="bg-dark-light">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn @click="closeDialog" icon="close" flat round dense />
      </q-card-section>

      <sign-up-form />
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignUpForm from '../molecules/SignUpForm.vue'

export default defineComponent({
  name: 'SignUpDialog',
  components: {
    SignUpForm
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
