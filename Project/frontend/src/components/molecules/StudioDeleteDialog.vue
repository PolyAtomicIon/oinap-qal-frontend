<template>
  <q-dialog
    :model-value="isDialogActive"
  >
    <q-card
      dark
      class="delete-dialog bg-dark-light q-pa-sm"
    >
      <q-card-section
        class="row items-center q-pb-none"
      >
        <div class="text-h6">Delete {{gameTitle}}</div>
        <q-space />
        <q-btn
          @click="closeDialog"
          icon="close"
          flat
          round
          dense
        />
      </q-card-section>
      <q-card-section
        class="row items-center q-pb-none"
      >
        <p class="q-px-sm">Are you sure that you want to delete "{{gameTitle}}"?</p>
      </q-card-section>
      <q-card-actions class="buttons">
        <q-btn
          @click="deleteGame"
          label="Yes"
          color="grey-9"
          class="btn"
          no-caps
          v-close-popup
        />
        <q-btn
          @click="closeDialog"
          label="No"
          color="primary"
          class="btn"
          no-caps
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  props: {
    isDialogActive: {
      type: Boolean,
      default: false
    },
    closeDialog: {
      type: Function,
      default: () => ({})
    },
    gameTitle: {
      type: String,
      default: ''
    },
    deleteGame: {
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

// override Quasar styles
<style lang="scss" >
  .delete-dialog {
    width: 400px;
    .buttons {
      display: flex;
      flex-direction: row;
      gap: 16px;
      .btn {
        flex-grow: 1;
        border-radius: 14px !important;
        padding: 8px 64px !important;
      }
    }
  }
</style>
