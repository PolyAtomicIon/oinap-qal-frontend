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
          :error="authErrors['username'] && authErrors['username'].length > 0"
          :error-message="authErrors['username'] && authErrors['username'][0]"
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
          :error="authErrors['email'] && !!authErrors['email'].length"
          :error-message="authErrors['email'] && authErrors['email'][0]"
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
          :error="authErrors['password'] && !!authErrors['password'].length"
          :error-message="authErrors['password'] && authErrors['password'][0]"
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
          :error="authErrors['password2'] && !!authErrors['password2'].length"
          :error-message="authErrors['password2'] && authErrors['password2'][0]"
          dark
          bg-color="grey-9"
          class="q-mt-sm"
          type="password"
          v-model="form.password2"
        >
        </q-input>
      </div>

      <!-- user role -->
      <div class="auth__form__field">
        <label for="role">Choose role</label>
        <br />
        <q-btn-toggle
          v-model="form.role"
          class="q-my-sm"
          no-caps
          rounded
          unelevated
          toggle-color="primary"
          color="bg-dark"
          text-color="primary"
          :options="[
            { label: 'Gamer', value: 'GAMER' },
            { label: 'Developer', value: 'DEVELOPER' },
          ]"
        >
        </q-btn-toggle>
      </div>

      <!-- develop contact -->
      <div class="auth__form__field" v-if="form.role === 'DEVELOPER'">
        <label for="role">Contacts</label>
        <q-input
          dense
          standout
          rounded
          dark
          :error="
            (authErrors['contact'] && authErrors['contact'].length > 0) ||
            (!!form.contact && form.contact.length > 10)
          "
          :error-message="authErrors['contact'] && authErrors['contact'][0]"
          bg-color="grey-9"
          class="q-mt-sm"
          type="tel"
          v-model="form.contact"
        >
        </q-input>
      </div>

      <!-- portfolio -->
      <div class="auth__form__field" v-if="form.role === 'DEVELOPER'">
        <label for="role">Portfolio</label>
        <q-input
          dense
          standout
          rounded
          dark
          :error="authErrors['portfolio'] && authErrors['portfolio'].length > 0"
          :error-message="authErrors['portfolio'] && authErrors['portfolio'][0]"
          bg-color="grey-9"
          class="q-mt-sm"
          type="text"
          v-model="form.portfolio"
        >
        </q-input>
      </div>

      <!-- tags -->
      <div class="auth__form__field">
        <label for="tags">Preffered games genres</label>

        <div class="q-gutter-xs q-mt-md">
          <q-chip
            v-for="(value, name) in categories"
            :key="name"
            :color="value.isChosen ? 'primary' : 'grey'"
            :outline="!value.isChosen"
            text-color="white"
            size="md"
            class="q-pa-md"
            clickable
            @click="
              () => {
                categories[name].isChosen = !categories[name].isChosen;
              }
            "
          >
            {{ name }}
          </q-chip>
        </div>

        <p v-if="authErrors['categories']" class="auth__error">
          {{ authErrors['categories'][0] }}
        </p>
      </div>

      <!-- rules -->
      <div class="auth__form__field">
        <q-checkbox v-model="form.is_accepted" dark color="gray"></q-checkbox>
        <span>
          I accept all
          <router-link
            class="text-bold text-primary"
            to="/studio/guide"
            @click="modals.setShowSignUpModal(false)"
          >
            rules
          </router-link>
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
          :disable="
            !form.is_accepted ||
            (form.is_accepted &&
              !(
                form.role === 'GAMER' ||
                (form.role === 'DEVELOPER' &&
                  form.contact &&
                  form.contact?.length <= 10)
              ))
          "
        >
        </q-btn>
        <q-btn
          @click="showSignInModal"
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
import { ISignUp, IAuthErrorData } from '../../entities/Auth.interfaces';
import { IGameTag } from '../../entities/Game.interfaces';
import { useUserStore } from '../../store/user';
import { useModalsStore } from '../../store/modals';
import { useCategoriesStore } from '../../store/categories';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'SignInForm',
  props: {},
  setup() {
    const user = useUserStore();
    const modals = useModalsStore();
    const categoriesStore = useCategoriesStore();

    const categories: IGameTag = reactive({});
    categoriesStore.categories.forEach((category) => {
      categories[category.title] = {
        isChosen: false,
        id: category.id,
      };
    });

    const form: ISignUp = reactive({
      username: '',
      email: '',
      password: '',
      password2: '',
      role: 'GAMER',
      categories: [],
      is_accepted: false,
      contact: '',
      portfolio: '',
    });

    const $router = useRouter();
    const $route = useRoute();

    let authErrors = ref<IAuthErrorData>({});

    const onSubmit = () => {
      form.categories = [];
      for (const [key, category] of Object.entries(categories)) {
        if (category.isChosen) {
          console.log(key);
          form.categories.push(category.id);
        }
      }

      if (form.role === 'GAMER') {
        delete form.contact;
        delete form.portfolio;
      }

      void user
        .signUp(form)
        .then(() => {
          modals.setShowSignUpModal(false);
          modals.setShowSignInModal(true);

          if ($route.path.includes('mobile')) {
            void $router.replace('/mobile-modals/signin');
          }
        })
        .catch((errorData: IAuthErrorData) => {
          authErrors.value = errorData;
        });
    };

    const showSignInModal = () => {
      modals.setShowSignUpModal(false);
      modals.setShowSignInModal(true);
    };

    return {
      onSubmit,
      showSignInModal,
      categories,
      form,
      modals,
      authErrors,
    };
  },
});
</script>

<style lang="scss" scoped>
.auth {
  &__form {
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
  &__error {
    color: $negative;
  }
}
</style>
