<template>
  <div  class="bg-dark header ">
    <q-toolbar class="flex justify-between q-px-none">
      <my-search></my-search>
      <div v-if="!user" class="">
        <q-btn rounded flat dense  class=" header__btn transparent" @click="$emit('signIn')" label="Sign up" />
        <q-btn color="primary" dense rounded  class="header__btn" @click="$emit('signUp')" label="Sign in" />
      </div>
      <my-avatar v-if="user"/>

    </q-toolbar>

  </div>
</template>

<script>
import MySearch from 'components/atoms/Search.vue';
import MyAvatar from 'components/molecules/UserAvatar.vue';

export default {
  name: 'MyHeader',

  components: {
    MySearch,
    MyAvatar
  },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ['login', 'logout', 'createAccount'],
};
</script>
<style lang="scss">
.header{
  padding:0 140px 0 0;
  &__btn{
    color: $white;
    padding: 0 16px;
    margin: 0 5px;
    text-transform: capitalize;
  }

}
</style>
