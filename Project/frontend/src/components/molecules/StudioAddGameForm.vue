<template>
  <q-dialog
    :model-value="isDialogActive"
  >
    <q-card
      dark
      class="add-game__form bg-dark-light upload-file-card q-pa-md"
      style="width: 450px"
    >
      <q-card-section
        class="row items-center q-pb-none"
      >
        <div class="text-h6">Add game</div>
        <q-space />
        <q-btn
          @click="closeDialog"
          icon="close"
          flat
          round
          dense
        />
      </q-card-section>

      <q-card-section>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <div class="add-game__form__field">
            <label for="cover">Cover</label>
            <q-file
              dense
              dark
              borderless
              label-color="primary"
              label="Upload image"
              accept=".jpg, .png, "
            >
              <template v-slot:prepend>
                <q-icon name="upload" color="primary" @click.stop />
              </template>
            </q-file>
          </div>

          <div class="add-game__form__field">
            <label for="name">Name</label>
            <q-input
              dense
              rounded
              standout
              bg-color="grey-9"
              class="q-mt-sm"
            >
            </q-input>
          </div>

          <div class="add-game__form__field">
            <label for="description">Description</label>
            <q-input
              dense
              rounded
              standout
              type="textarea"
              bg-color="grey-9"
              class="q-mt-sm"
            />
          </div>


          <div>
            <q-btn
              label="Save changes"
              color="primary"
              type="submit"
              class="upload-btn q-mt-xs fit"
            >
            </q-btn>
          </div>
        </q-form>

      </q-card-section>
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
  .add-game__form {
    .upload-btn {
      border-radius: 14px !important;
      padding: 8px 64px !important;
    }
    .q-field--standout.q-field--rounded .q-field__control {
      border-radius: 14px !important
    }
  }
</style>

<style lang="scss" scoped >
  .add-game__form {
    &__field{
      color: $grey !important;
    }
  }
</style>
