<template>
  <div class="q-px-md q-py-md">
    <q-card
      v-bind:class="
        expanded
          ? 'edit-email-active bg-transparent '
          : 'edit-email bg-transparent '
      "
      bordered
      flat
    >
      <div class="flex q-px-lg q-py-sm items-center">
        <span class="text-white">Email</span>
        <q-space />
        <q-btn
          color="primary"
          flat
          dense
          class="edit-email__edit-btn"
          :label="expanded ? 'Cancel' : 'Edit'"
          @click="expanded = !expanded"
        ></q-btn>
      </div>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator color="grey"></q-separator>
          <q-form @submit="onSubmit" class="q-px-lg q-pt-lg">
            <div class="q-px-none q-py-md edit-email__current">
              <label class="text-grey flex block">Current email</label>
              <span class="text-white">{{ userEmail }}</span>
            </div>

            <div class="q-px-none q-pb-none edit-email__current">
              <label for="newEmail" class="text-grey">New email</label>
              <q-input
                dense
                standout
                color="white"
                bg-color="grey-9"
                class="text-white q-mt-sm edit-email__input"
                input-style="color:white"
                v-model="editEmail"
              >
              </q-input>
            </div>

            <div class="q-px-none q-py-lg">
              <q-btn
                unelevated
                dense
                rounded
                class="edit-email__btn"
                color="primary"
                type="submit"
                label="Save"
              >
              </q-btn>
            </div>
          </q-form>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'EditEmail',
  setup() {
    const editEmail = ref('');
    const onSubmit = () => {
      console.log(editEmail.value);
    };
    return {
      editEmail,
      onSubmit,
      expanded: ref(false),
    };
  },
  props: {
    userEmail: {
      Type: String,
      default: 'alexa.jackson@gmail.com',
    },
  },
};
</script>

<style lang="scss">
.edit-email {
  border: 1px solid $black2;
  &__edit-btn {
    font-size: 16px;
    text-transform: capitalize;
    border-radius: 5px;
    min-width: 50px;
  }
  &__btn {
    width: 28%;
    min-width: 200px;
    text-transform: capitalize;
  }
  &__input {
    max-width: 550px;
    width: 100%;
  }
  &__input .q-field__control {
    border-radius: 16px;
  }
}
.edit-email-active {
  border: 1px solid $purple;
}
</style>
