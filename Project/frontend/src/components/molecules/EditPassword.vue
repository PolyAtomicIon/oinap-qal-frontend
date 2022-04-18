<template>
  <div class="q-px-md q-py-md">
    <q-card
      bordered
      flat
      v-bind:class="expanded?'edit-password-active bg-transparent ':'edit-password bg-transparent '"
    >
      <div class="flex q-px-lg">
        <q-card-section>
          <span class="text-white">Password</span>
        </q-card-section>
        <q-space/>
        <q-card-actions>
          <q-btn
            color="blue"
            flat
            dense
            :label="expanded?'Cancel':'Edit'"
            @click="expanded = !expanded"
          ></q-btn>
        </q-card-actions>
      </div>
      <q-slide-transition class="q-px-lg q-py-lg">
        <div v-show="expanded">
          <q-separator color="grey"></q-separator>
          <q-card-actions vertical class="edit-password__section">
            <label class="text-grey block">Old password</label>
            <my-input :type="'password'" class="edit-password__input" :size="55"></my-input>
          </q-card-actions>
          <q-card-actions vertical class="edit-password__section">
            <label class="text-grey">New password</label>
            <my-input :type="'password'" class="edit-password__input" :size="55"></my-input>
          </q-card-actions>
          <q-card-actions vertical class="edit-password__section">
            <label class="text-grey">Repeat password</label>
            <my-input :type="'password'" class="edit-password__input" :size="55"></my-input>
          </q-card-actions>
          <q-card-actions>
            <q-btn unelevated rounded class="edit-password__btn" color="primary" label="Save"></q-btn>
          </q-card-actions>
        </div>
      </q-slide-transition>
    </q-card>

  </div>
</template>

<script>
import {ref} from 'vue';
import MyInput from 'src/components/atoms/Input.vue'

export default {
  name: 'EditPassword',
  components:{
    MyInput
  },
  setup(){
    return{
      expanded: ref(false),
    }
  },

  props:{
    userEmail:{
      Type:String,
      default:'password'
    }
  }
}
</script>

<style lang="scss">
.edit-password{
  border: 1px solid $black2;
  &__btn{
    width:35%;
  }
}
.edit-password-active{
  border: 1px solid $purple;
}

</style>
