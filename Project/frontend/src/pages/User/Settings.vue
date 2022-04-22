<template>
  <div class="gamer-settings flex column justify-between full-height">
    <div>
      <edit-profile/>
      <edit-email />
      <edit-password />
    </div>
    <app-footer/>
  </div>
</template>
<script>
import EditProfile from 'src/components/molecules/EditUserProfile.vue'
import EditEmail from 'src/components/molecules/EditEmail.vue'
import EditPassword from 'src/components/molecules/EditPassword.vue'
import AppFooter from '../../components/molecules/AppFooter.vue';


export default {
  name: 'Settings',
  components:{
    AppFooter,
    EditProfile,
    EditPassword,
    EditEmail
  },

}
</script>
