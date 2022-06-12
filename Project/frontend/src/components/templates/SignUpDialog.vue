<template>
  <q-dialog :model-value="modals.showSignUpModal"  @hide="modals.setShowSignUpModal(false)">
    <q-card dark class="bg-dark-light extra-rounded-borders">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn
          @click="modals.setShowSignUpModal(false)"
          icon="close"
          flat
          round
          dense
        />
      </q-card-section>

      <sign-up-form />
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignUpForm from '../molecules/SignUpForm.vue';
import { useModalsStore } from '../../store/modals';

export default defineComponent({
  name: 'SignUpDialog',
  components: {
    SignUpForm,
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
