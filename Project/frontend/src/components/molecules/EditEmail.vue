<template>
  <div class="q-px-md q-py-md">
    <q-card
      v-bind:class="expanded?'edit-email-active bg-transparent ':'edit-email bg-transparent '"
      bordered
      flat
    >
      <div class="flex q-px-lg">
        <q-card-section>
          <span class="text-white">Email</span>
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
      <q-slide-transition>
        <div v-show="expanded" class="q-px-lg q-py-lg">
          <q-separator color="grey"></q-separator>
          <q-card-section class="edit-email__current">
            <label class="text-grey">Current email</label>
            <p class="text-white">{{userEmail}}</p>
          </q-card-section>
          <q-card-actions vertical class="edit-email__current">
            <label class="text-grey">New email</label>
            <my-input type="email" :size="55" />
          </q-card-actions>
          <q-card-actions>
            <q-btn unelevated rounded class="edit-email__btn" color="primary" label="Save"></q-btn>
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
  name: 'EditEmail',
  components:{
    MyInput
  },
  setup(){
    return{
      expanded: ref(false)
    }
  },
  props:{
    userEmail:{
      Type:String,
      default:'alexa.jackson@gmail.com'
    }
  }
}
</script>

<style lang="scss">
.edit-email{
  border: 1px solid $black2;
  &__btn{
    width: 35%;
  }
}
.edit-email-active{
  border: 1px solid $purple;
}
</style>
