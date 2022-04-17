<template>
  <q-card class="friends text-white">
    <q-card-section class="q-py-md">
      <q-input dense dark class=" Friends__search" color="grey-5" label="Find friends"  label-color="grey-5">
        <template  v-slot:prepend>
          <q-icon name="search" color="grey-7"></q-icon>
        </template>
        <template v-slot:hint>
          Field hint
        </template>
      </q-input>
    </q-card-section>
    <q-card-section class="no-padding">
      <q-item
        v-for="friends in friendsList"
        :key="friends.name"
        dense
        class="friends__friend q-my-xs"
      >
        <div class="friends__img q-mr-md"/>
        {{friends.name}}
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script>

const defFriendsList=[
  {
    name:'Sheldon Cooper'
  },
  {
    name:'Penny'
  },
  {
    name:'Leonard Hofstedter'
  },
  {
    name:'Howard Wolowitz'
  },
  {
    name:'Rajesh Koothrappali'
  },
  {
    name: 'Amy Farah Fowler'
  }
  ]
export default {
  name: 'UserFriends',
  props:{
    friendsList:{
      type:Array,
      default:defFriendsList
    }
  }
}
</script>

<style lang="scss">
.friends{
  background-color:$secondary;
  &__img{
    width: 32px;
    height: 32px;
    background-color: grey;
    border-radius: 100%;
  }
  &__friend{
    display: flex;
    align-items: center;
    width: 100%;
  }
}
</style>
