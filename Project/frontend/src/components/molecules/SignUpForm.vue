<template>
  <q-card-section class="auth__form">
    <h1 class="text-h1 text-center text-white q-mb-lg">Sign up</h1>

    <q-form @submit="onSubmit" class="q-mt-lg q-gutter-md">
      <!-- username -->
      <div class="auth__form__field">
        <label for="username">Username</label>
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

      <!-- email -->
      <div class="auth__form__field">
        <label for="email">Email</label>
        <q-input
          dense
          standout
          rounded
          dark
          bg-color="grey-9"
          class="q-mt-sm"
          type="email"
          v-model="form.email"
        >
        </q-input>
      </div>

      <!-- password -->
      <div class="auth__form__field">
        <label for="password">Password</label>
        <q-input
          dense
          standout
          rounded
          autocomplete="new-username"
          dark
          bg-color="grey-9"
          class="q-mt-sm"
          type="password"
          v-model="form.password"
        >
        </q-input>
      </div>

      <!-- repeat password -->
      <div class="auth__form__field">
        <label for="repeat-password">Repeat Password</label>
        <q-input
          dense
          standout
          rounded
          autocomplete="new-username"
          dark
          bg-color="grey-9"
          class="q-mt-sm"
          type="password"
          v-model="form.repeatPassword"
        >
        </q-input>
      </div>

      <!-- tags -->
      <div class="auth__form__field">
        <label for="tags">Preffered games genres</label>

        <div class="q-gutter-xs q-mt-md">
          <q-chip
            v-for="(value, name) in form.tags"
            :key="name"
            :color="value ? 'primary' : 'grey'"
            :outline="!value"
            text-color="white"
            size="md"
            class="q-pa-md"
            clickable
            @click="
              () => {
                form.tags[name] = !form.tags[name];
              }
            "
          >
            {{ name }}
          </q-chip>
        </div>
      </div>

      <!-- rules -->
      <div class="auth__form__field">
        <q-checkbox
          v-model="isRulesAccepted"
          dark
          color="gray"
        />
        <span>
          I accept all
          <q-btn
            flat
            dense
            no-caps
            color="primary"
            label="rules"
            class="q-pb-sm"
            to="/rules"
          />
        </span>
      </div>

      <!-- action buttons -->
      <div class="flex column items-start">
        <q-btn
          no-caps
          label="Sign up"
          color="primary"
          type="submit"
          class="q-mt-xs full-width"
        >
        </q-btn>
        <q-btn
          flat
          no-caps
          label="Already have an account?"
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
import { defineComponent, reactive, ref } from 'vue';
import { ISignUp } from '../../entities/Auth.interfaces';
import { IGameTag } from '../../entities/Game.interfaces';

export default defineComponent({
  name: 'SignInForm',
  props: {},
  setup() {
    const tags: IGameTag = reactive({
      game: true,
      space: false,
      multiplayer: false,
      shooter: false,
      guns: false,
    });

    const form: ISignUp = reactive({
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      tags: tags,
    });

    const isRulesAccepted = ref(false);

    const onSubmit = () => {
      console.log(form);
    };

    return {
      onSubmit,
      tags,
      form,
      isRulesAccepted,
    };
  },
});
</script>

<style lang="scss" scoped>
.auth__form {
  width: 500px;
  margin: 0 auto;
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
