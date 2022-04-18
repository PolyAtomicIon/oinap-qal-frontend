<template>
  <div class="gamer-settings full-height">
    <edit-profile/>
    <edit-email />
    <edit-password />
  </div>
</template>

<script>
import {ref} from 'vue';
import EditProfile from 'src/components/molecules/EditUserProfile.vue'
import EditEmail from 'src/components/molecules/EditEmail.vue'
import EditPassword from 'src/components/molecules/EditPassword.vue'

export default {
  name: 'Settings',
  components:{
    EditProfile,
    EditPassword,
    EditEmail
  },
  setup() {
    const leftDrawerOpen= ref(true)
    return{
      leftDrawerOpen
    }
  }
}
</script>

<style scoped>

</style>
