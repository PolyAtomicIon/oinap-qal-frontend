<template>
  <q-page class="">
    <edit-profile />
    <edit-email />
    <edit-password />
  </q-page>
</template>
<script>
import EditProfile from 'src/components/molecules/EditUserProfile.vue';
import EditEmail from 'src/components/molecules/EditEmail.vue';
import EditPassword from 'src/components/molecules/EditPassword.vue';

export default {
  name: 'Settings',
  components: {
    EditProfile,
    EditPassword,
    EditEmail,
  },
};
</script>
