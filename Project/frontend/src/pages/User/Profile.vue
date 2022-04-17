<template>
  <div class="gamer-profile">
        <my-profile/>
        <my-ratings/>
  </div>
</template>

<script>
import MyRatings from 'src/components/molecules/UserRatings.vue'
import MyProfile from 'src/components/molecules/UserProfile.vue'

export default {
  name: 'Profile',
  components:{
    MyRatings,
    MyProfile
  },
}
</script>

<style lang="scss">

</style>
