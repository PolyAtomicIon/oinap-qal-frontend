<template>
    <q-card-section class="auth__form">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <!-- name -->
        <div class="auth__form__field">
          <label for="name">Name</label>
          <q-input
            dense
            standout
            rounded
            bg-color="grey-9"
            class="q-mt-sm"
            v-model="form.name"
          >
          </q-input>
        </div>

        <!-- description -->
        <div class="auth__form__field">
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
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { IGameForm } from '../../models/Game.interfaces';

export default defineComponent({
  name: 'SignInForm',
  emits: ['submit'],
  props: {
  },
  setup(props, {emit}) {

    const form: IGameForm = reactive({
      fileName: '',
      file: null,
      cover: null,
      name: '',
      description: '',
      tags: {},
    });

    const onSubmit = () => {
      emit('submit', form)
    };

    return {
      onSubmit,
      form,
    };
  },
});
</script>

// override Quasar styles
<style lang="scss">
.auth__form {
  .upload-btn {
    border-radius: 14px !important;
    padding: 8px 64px !important;
  }
  .q-field--standout.q-field--rounded .q-field__control {
    border-radius: 14px !important;
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

<style lang="scss" scoped>
.auth__form {
  width: 500px;
  border-radius: 14px;
  &__field {
    color: $grey !important;
  }
}
</style>
