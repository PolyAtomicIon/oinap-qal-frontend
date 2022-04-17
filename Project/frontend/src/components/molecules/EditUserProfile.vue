<template>
  <q-card  class="text-white no-shadow q-py-lg q-px-lg edit-profile">
    <q-card-section horizontal>
      <div onclick="console.log('click')" class="relative-position">
        <q-img
          :src="require('src/assets/user/'+userAbout.img)"
          width="160px"
          height="160px"
        >
        </q-img>
        <q-icon class="absolute absolute-center" name="edit" color="white" size="15px"></q-icon>
      </div>

      <q-card-actions vertical class="edit-profile__description q-pl-xl justify-around">
        <div >
          <label>Name</label>
          <my-input :value="userAbout.name" type="text" :size="65"/>
        </div>
        <div>
          <q-btn unelevated rounded class="text-white edit-profile__btn" color="primary" label="Save" />
        </div>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
import MyInput from 'src/components/atoms/Input.vue'

const defUserProfile={
  img:'False.png',
  name:'Alexa Jackson',
  rating: 5023
}
export default {
  name: 'UserSettings',
  components:{
    MyInput
  },
  props:{
    userAbout:{
      type:Object,
      default: defUserProfile
    }
  }
}
</script>

<style lang="scss">
.edit-profile{
  background: transparent;

  &__btn{
    width: 40%;
  }
  &__description{
    width:100%;
  }
}
</style>
