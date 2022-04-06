<template>
  <q-dialog
    :model-value="isDialogActive"
  >
    <q-card
      dark
      class="add-game__form bg-dark-light q-pa-md"
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
          class="q-gutter-md"
        >
          <div class="add-game__form__field">
            <label for="file">File</label>
            <p class="text-primary q-py-sm">tetris_game.html5</p>
          </div>

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

          <div class="add-game__form__field">
            <label for="description">Tags</label>

            <div class="q-gutter-xs q-mt-md">
              <q-chip
                v-for="(value, name) in desert"
                :key="name"
                :color="value ? 'primary' : 'grey'"
                :outline="!value"
                text-color="white"
                size="md"
                class="q-pa-lg"
                clickable
                @click="() => {desert[name] = !desert[name]}"
              >
                {{name}}
              </q-chip>
            </div>
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
import { defineComponent, reactive, computed } from 'vue'

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
    const onSubmit = () => {
      console.log('submit')
    }
    const desert = reactive({
      Icecream: false,
      Eclair: true,
      Cupcake: false,
      Gingerbread: false
    })

    return {
      onSubmit,
      desert,
      selection: computed(() => {
        return Object.keys(desert)
          .filter(type => desert[ type ] === true)
          .join(', ')
      })
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
    .q-chip {
      border: solid 2px $primary !important;
      &--outline {
        border-width: 2px !important;
        border-color: #343434 !important;
      }
    }
  }
</style>

<style lang="scss" scoped >
  .add-game__form {
    width: 450px;
    border-radius: 14px;
    &__field{
      color: $grey !important;
    }
  }
</style>
