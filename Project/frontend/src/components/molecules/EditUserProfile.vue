<template>
  <q-card class="no-shadow q-pa-lg edit-profile">
    <q-form @submit="onSubmit" class="flex no-wrap edit-profile__container" >
      <div onclick="console.log('click')" class="edit-profile__img relative-position ">
        <q-img

          :src="photoC"

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
        <q-file
          v-model="photo"
          class="absolute absolute-center"
        ></q-file>

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
            label="Save"
            @click="setChange()"
          />
        </div>
      </div>
    </q-form>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed} from 'vue';
import {IUsersService, provider} from '../../services';
import {useUserStore} from '../../store/user';

const defUserProfile={
  img:'False.png',
  username:'Alexa Jackson',
  rating: 5023
}
export default defineComponent({
  name: 'UserSettings',
  props:{
    userAbout:{
      type:String,
      default: defUserProfile.img
    },
    username:{
      type:String,
      default: defUserProfile.img
    }
  },

  setup(props) {
    const editName = ref(props.username);
    const editPhoto = ref(props.userAbout);
    const photo = ref<null | File>(null);

    const onSubmit = () => {
      console.log(editName.value)
      console.log(editPhoto.value)
    };

    const user = useUserStore();
    const userService: IUsersService = provider().User;

    const datish = new FormData()

    const setChange = async  () => {
      if( photo.value )
        datish.append('avatar', photo.value)
      datish.append('username', editName.value)
      datish.append('firstname', 'a')
      datish.append('lastname', 'b')

      if( user.user.id )
        await userService.editUserProfile(+user.user.id, datish)
    };

    return {
      onSubmit,
      editPhoto,
      editName,
      setChange,
      photo,
      photoC: computed(() => {
        console.log(photo.value)
        if( !photo.value )
          return ''
        return URL.createObjectURL(photo.value)
      })
      user

    };
  },
})
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
