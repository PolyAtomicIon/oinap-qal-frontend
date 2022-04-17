<template>
  <div class="avatar bg-dark" style="max-width: 500px;">
    <q-btn @click="visible=!visible" unelevated class="q-mb-md  flex no-wrap">
      <img
        :src="require('src/assets/user/False.png')"
        class="avatar__img "
      >
      <span class="text-capitalize q-px-md">{{avatar.name}}</span>
      <q-icon name="keyboard_arrow_down" size="15px"></q-icon>
    </q-btn>

    <q-slide-transition
      :duration="0"
    >
      <div  v-show="visible" class=" avatar__info shadow-3">
        <q-tabs
          vertical
          dense
          class="bg-dark">
          <q-route-tab
            label="profile"
            :to="{name: 'profile'}"
            exact
            class="avatar__route text-lowercase"
          />
          <q-route-tab
            dense
            label="settings"
            :to="{name: 'settings'}"
            exact
            class="avatar__route text-lowercase
"
          />
        </q-tabs>

      </div>

    </q-slide-transition>
  </div>

</template>

<script>
import {ref} from 'vue';

const defAvatar={
  name:'Alexa Jackson',
  img:'False.png'
}
export default {
  name: 'UserAvatar',
  props:{
    avatar:{
      type:Object,
      default: defAvatar
    }
  },
  setup(){
    return{
      visible: ref(false)
    }
  }
}
</script>

<style lang="scss">
.avatar{
  &__route{
    display: flex;
    justify-content: left;
  }
  &__btn {
    pointer-events: initial;
  }
  &__img{
    width: 40px;
  }
  &__info{
    max-width: 170px;
    width: 100%;
    position: fixed;
  }
}
</style>
