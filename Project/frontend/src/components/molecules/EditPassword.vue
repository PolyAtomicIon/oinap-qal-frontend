<template>
  <div class="q-px-md q-py-md">
    <q-card
      bordered
      flat
      v-bind:class="expanded?'edit-password-active ':'edit-password  '"
    >
      <div class="flex q-px-lg q-py-sm items-center">
        <span class="text-white">Password</span>
        <q-space/>
        <q-btn
          color="primary"
          flat
          dense
          class="edit-password__edit-btn"
          :label="expanded?'Cancel':'Edit'"
          @click="expanded = !expanded"
        ></q-btn>
      </div>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator class="edit-password__separator"/>

          <q-form @submit="onSubmit" class="q-px-lg">
          <div  class="edit-password__section q-px-none  ">
            <label class="text-grey block">Old password</label>
            <q-input
              dense
              standout
              color="white"
              bg-color="grey-9"
              class="text-white q-mt-sm edit-password__input"
              input-style="color:white"
              type="password"
              v-model="oldPassword"
            >
            </q-input>
          </div>

          <div  class="edit-password__section q-px-none q-pt-lg">
            <label class="text-grey">New password</label>
            <q-input
              dense
              standout
              color="white"
              bg-color="grey-9"
              class="text-white q-mt-sm edit-password__input"
              input-style="color:white"
              type="password"
              v-model="newPassword"
            >
            </q-input>
          </div>

          <div class="edit-password__section q-px-none q-pt-lg">
            <label class="text-grey">Repeat password</label>
            <q-input
              dense
              standout
              color="white"
              bg-color="grey-9"
              class="text-white q-mt-sm edit-password__input"
              input-style="color:white"
              type="password"
              v-model="repeatPassword"
            >
            </q-input>
          </div>

          <div class="q-px-none q-pt-md q-pb-lg">
            <q-btn
              unelevated
              rounded
              dense
              class="edit-password__btn"
              color="primary"
              type="submit"
              label="Save">
            </q-btn>
          </div>
          </q-form>
        </div>
      </q-slide-transition>
    </q-card>

  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'EditPassword',
  setup(){
    const oldPassword= ref('');
    const newPassword= ref('');
    const repeatPassword= ref('');
    const onSubmit = () => {
      console.log(oldPassword.value)
      console.log(newPassword.value)
      console.log(repeatPassword.value)
    };
    return{
      oldPassword,
      newPassword,
      repeatPassword,
      onSubmit,
      expanded: ref(false),
    }
  },
  props:{
    password:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss">
.edit-password{
  border: 1px solid $black2;
  background-color: transparent;
  &__separator{
    background-color: $gray;
  }
  &__edit-btn{
    font-size: 16px;
    text-transform: capitalize;
    border-radius: 5px;
    min-width: 50px;
  }
  &__btn{
    width: 28%;
    min-width:200px;
    text-transform: capitalize;

  }
  &__input{
    max-width: 550px;
    width: 100%;
  }
  &__input .q-field__control{
    border-radius: 16px;
  }
  &__section{
    padding: 30px 0 0 0;
  }
}
.edit-password-active{
  background-color: transparent;
  border: 1px solid $purple;
}

</style>
