<template>
  <q-page>
    <user-profile/>
    <user-ratings/>
  </q-page>
</template>

<script>
import UserRatings from 'src/components/molecules/UserRatings.vue'
import UserProfile from 'src/components/molecules/UserProfile.vue'

export default {
  name: 'Profile',
  components:{
    UserRatings,
    UserProfile
  },
}
</script>

<style lang="scss">

</style>
