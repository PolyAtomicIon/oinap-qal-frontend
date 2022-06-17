<template>
  <q-page class="">
    <edit-profile
      :user-avatar="user.user.avatar"
      :username="user.user.username"
    />
    <edit-email
      :user-about="user.user.email"
    />
    <edit-password
    />
  </q-page>
</template>
<script>
import EditProfile from 'src/components/molecules/EditUserProfile.vue';
import EditEmail from 'src/components/molecules/EditEmail.vue';
import EditPassword from 'src/components/molecules/EditPassword.vue';
import {useUserStore} from '../../store/user';

export default {
  name: 'Settings',
  setup(){
    const user = useUserStore();
    return{
      user
    }
  },
  components: {
    EditProfile,
    EditPassword,
    EditEmail,
  },
};
</script>
