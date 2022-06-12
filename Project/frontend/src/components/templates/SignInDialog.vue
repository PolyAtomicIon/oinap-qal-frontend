<template>
  <q-dialog :model-value="modals.showSignInModal" @hide="modals.setShowSignInModal(false)">
    <q-card dark class="bg-dark-light extra-rounded-borders">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn
          @click="modals.setShowSignInModal(false)"
          icon="close"
          flat
          round
          dense
        />
      </q-card-section>

      <sign-in-form />
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignInForm from '../molecules/SignInForm.vue';
import { useModalsStore } from '../../store/modals';

export default defineComponent({
  name: 'SignInDialog',
  components: {
    SignInForm,
  },
  props: {},
  setup() {
    const modals = useModalsStore();
    return {
      modals,
    };
  },
});
</script>

<style lang="scss" scoped></style>
