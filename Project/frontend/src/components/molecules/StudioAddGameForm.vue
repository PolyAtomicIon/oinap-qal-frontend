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
          <!-- file -->
          <div class="add-game__form__field">
            <label for="file">File</label>
            <p class="text-primary q-py-sm">tetris_game.html5</p>
          </div>

          <!-- cover -->
          <div class="add-game__form__field">
            <label for="cover">Cover</label>
            <q-img
              v-if="coverPreviewLink != ''"
              :src="coverPreviewLink"
              spinner-color="primary"
              fit="cover"
              class="rounded-borders q-my-sm"
              style="display: block;"
              width="120px"
              height="80px"
            />
            <q-file
              dense
              dark
              borderless
              label-color="primary"
              label="Upload image"
              accept=".jpg, .png, "
              v-model="form.cover"
              @update:model-value="updateCover()"
            >
              <template v-slot:prepend>
                <q-icon name="upload" color="primary" @click.stop />
              </template>
            </q-file>
          </div>

          <!-- name -->
          <div class="add-game__form__field">
            <label for="name">Name</label>
            <q-input
              dense
              rounded
              standout
              bg-color="grey-9"
              class="q-mt-sm"
              v-model="form.name"
            >
            </q-input>
          </div>

          <!-- description -->
          <div class="add-game__form__field">
            <label for="description">Description</label>
            <q-input
              dense
              rounded
              standout
              type="textarea"
              bg-color="grey-9"
              class="q-mt-sm"
              v-model="form.description"
            />
          </div>

          <!-- tags -->
          <div class="add-game__form__field">
            <label for="description">Tags</label>

            <div class="q-gutter-xs q-mt-md">
              <q-chip
                v-for="(value, name) in form.tags"
                :key="name"
                :color="value ? 'primary' : 'grey'"
                :outline="!value"
                text-color="white"
                size="md"
                class="q-pa-lg"
                clickable
                @click="() => {form.tags[name] = !form.tags[name]}"
              >
                {{name}}
              </q-chip>
            </div>
          </div>

          <!-- save button -->
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
import { defineComponent, ref, reactive } from 'vue'

interface IGameTag {
  [key: string]: boolean
}

interface IGameForm {
  fileName: string,
  cover: File | null,
  name: string,
  description: string,
  tags: IGameTag
}

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
      console.log('submit ', form)
    }
    const tags: IGameTag = reactive({
      'game': true,
      'space': false,
      'multiplayer': false,
      'shooter': false,
      'guns': false
    })

    const form: IGameForm = reactive({
      fileName: 'string',
      cover: null,
      name: '',
      description: '',
      tags: tags
    })

    let coverPreviewLink = ref('')
    const updateCover = () => {
      console.log(form.cover)
      if(form.cover)
        coverPreviewLink.value = URL.createObjectURL(form.cover);
    }

    return {
      onSubmit,
      tags,
      form,
      updateCover,
      coverPreviewLink
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
    width: 500px;
    border-radius: 14px;
    &__field{
      color: $grey !important;
    }
  }
</style>
