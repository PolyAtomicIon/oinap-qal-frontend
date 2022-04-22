<template>
  <q-card class="no-shadow q-pa-lg edit-profile">
    <q-form @submit="onSubmit" class="flex no-wrap edit-profile__container" >
      <div onclick="console.log('click')" class="edit-profile__img relative-position ">
        <q-img
          :src="require('src/assets/user/'+userAbout.img)"
          width="160px"
          height="160px"
          class=" "
        >
        </q-img>
        <img
          src="~/assets/icons/editor.svg"
          alt="editor-icon"
          class="absolute absolute-center"
          height="25"
          width="25"
        >
      </div>

      <div class="edit-profile__description q-pl-xl">
        <div >
          <label>Name</label>
          <q-input
            dense
            standout
            color="white"
            bg-color="grey-9"
            class="text-white q-mt-sm edit-profile__input "
            input-style="color:white"
            v-model="editName"
          >
          </q-input>
        </div>
        <div>
          <q-btn
            dense
            unelevated
            rounded
            class="text-capitalize q-mt-md edit-profile__btn"
            color="primary"
            text-color="white"
            type="submit"
            label="Save" />
        </div>
      </div>
    </q-form>
  </q-card>
</template>

<script>
import {ref} from 'vue';

const defUserProfile={
  img:'False.png',
  name:'Alexa Jackson',
  rating: 5023
}
export default {
  name: 'UserSettings',
  props:{
    userAbout:{
      type:Object,
      default: defUserProfile
    }
  },
  setup() {
    const editName= ref('Alexa Jackson');
    const editPhoto= ref('photo');
    const onSubmit = () => {
      console.log(editName.value)
      console.log(editPhoto.value)
    };
    return {
      onSubmit,
      editPhoto,
      editName
    };
  },
}
</script>

<style lang="scss">
.edit-profile{
  color: $gray;
  font-size: 16px;
  background: transparent;
  &__img{
    max-width: 192px;
  }
  &__input{
    max-width:550px;
    font-size: 16px;
  }
  &__input .q-field__control{
    border-radius: 16px;
  }
  &__btn{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    max-width:250px;
    width: 100%;
  }
  &__description{
    width:100%;
  }
}
@media screen and (max-width:515px) {
  .edit-profile{
    &__container{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__input{
      max-width:100%;
    }
    &__btn{
      max-width:150px;
      margin: 15px 0;
    }
    &__description{
      padding: 0;
    }
  }

}
</style>
