<template>
  <q-page>
    <user-profile/>
    <user-ratings class="mobile-hide"/>
    <q-list class="profile__list mobile-only text-white q-pa-md">
      <q-item
        dense
        class="q-px-none q-pt-md q-pb-xs"
        to="/mobile-modals/user-friends"
      >
        <span>Friends</span>
        <q-space/>
        <q-icon name="chevron_right" size="30px"/>
      </q-item>
      <q-separator class="bg-dark-grey"/>
      <q-item
        dense
        class="q-px-none q-pt-md q-pb-xs"
        to="/mobile-modals/user-ratings"
      >
        <span>Ratings</span>
        <q-space/>
        <q-icon name="chevron_right" size="30px"/>
      </q-item>
      <q-separator class="bg-dark-grey"/>

    </q-list>
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
.profile{
  &__list{
    font-size: 16px;
  }
}
</style>
