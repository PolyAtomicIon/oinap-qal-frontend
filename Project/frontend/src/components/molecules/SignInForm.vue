<template>
  <q-card-section class="auth__form">

    <h1 class="text-h1 text-center text-white q-mb-lg">Sign In</h1>

    <q-form @submit="onSubmit" class="q-mt-lg q-gutter-md">
      <!-- username -->
      <div class="auth__form__field">
        <label for="name">Username</label>
        <q-input
          dense
          standout
          rounded
          dark
          bg-color="grey-9"
          class="q-mt-sm"
          v-model="form.username"
        >
        </q-input>
      </div>

      <!-- password -->
      <div class="auth__form__field">
        <label for="description">Password</label>
        <q-input
          dense
          standout
          rounded
          dark
          bg-color="grey-9"
          class="q-mt-sm"
          type="password"
          v-model="form.password"
        >
        </q-input>
      </div>

      <!-- action buttons -->
      <div class="flex column items-start">
        <q-btn
          flat
          dense
          class="q-my-sm"
          label="Forget password ?"
          color="primary"
          type="submit"
        >
        </q-btn>
        <q-btn
          no-caps
          label="Sign in"
          color="primary"
          type="submit"
          class="q-mt-xs full-width"
        >
        </q-btn>
        <q-btn
          flat
          no-caps
          label="Do not have account ?"
          color="white"
          type="submit"
          class="q-mt-md full-width"
        >
        </q-btn>
      </div>
    </q-form>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { ISignIn } from '../../entities/Auth.interfaces';

export default defineComponent({
  name: 'SignInForm',
  props: {
  },
  setup() {
    const form: ISignIn = reactive({
      username: '',
      password: ''
    });

    const onSubmit = () => {
      console.log(form)
    };

    return {
      onSubmit,
      form,
    };
  },
});
</script>

<style lang="scss" scoped>
.auth__form {
  width: 500px;
  border-radius: 14px;
  padding: 0 16px;
  padding-bottom: 24px;
  @media screen and (max-width: $breakpoint-xs) {
    width: 100%;
  }
  &__field {
    color: $grey !important;
  }
}
</style>
