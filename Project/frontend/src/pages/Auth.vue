<template>
  <q-card class="modal" style="width: 640px">
    <q-card-section>
      <q-select class="text-white" bg-color="white" filled v-model="model" :options="options" label="Label"/>
    </q-card-section>
    <q-card-section v-if="model=='Developer'" >
      <q-form>
        <div class="modal__input">
          <label>Username</label>
          <input class="input" type="text"/>
        </div>
        <div class="modal__input">
          <label>Email</label>
          <input class="input" type="Email"/>
        </div>
        <div class="modal__input">
          <label>Password</label>
          <input class="input" type="password"/>
        </div>
        <div class="modal__input">
          <label>Repeat password</label>
          <input class="input" type="password"/>
        </div>
        <div>
          <router-link to="/Admin/Homepage">
            <my-button class="modal__btn" label="Sign in" rounded></my-button>
          </router-link>
        </div>
      </q-form>
    </q-card-section>
    <q-card-section class="modal__admin" v-if="model=='Admin'" >
      <q-form v-if="forgotPassword=='sign in'">
        <div class="modal__title">
            <span>
              Sign in
            </span>
        </div>
        <div class="modal__input">
          <label>Username</label>
          <input class="input" type="text"/>
        </div>
        <div class="modal__input">
          <label>Password</label>
          <input class="input" type="password"/>
        </div>
        <a @click="forgotPassword='reset'">Forgot password</a>
        <div>
          <router-link to="/Admin/Homepage">
            <my-button class="modal__btn" label="Sign in" rounded></my-button>
          </router-link>
        </div>
      </q-form>
      <q-form v-if="forgotPassword=='reset'">
        <div class="modal__title">
            <span>
              Reset Password
            </span>
        </div>
        <div class="modal__input">
          <label>Email</label>
          <input class="input" type="Email"/>
        </div>
        <div>
          <my-button @click="forgotPassword='reset password'" class="modal__btn" label="Continue" rounded></my-button>
        </div>
      </q-form>
      <q-form v-if="forgotPassword=='reset password'">
        <div class="modal__title">
            <span>
              Reset password
            </span>
        </div>
        <div class="modal__input">
          <label>New password</label>
          <input class="input" type="password"/>
        </div>
        <div class="modal__input">
          <label>Repeat password</label>
          <input class="input" type="password"/>
        </div>
        <div>
          <my-button @click="forgotPassword='sign in' " class="modal__btn" label="Sign in" rounded></my-button>
        </div>
      </q-form>
    </q-card-section>
    <q-card-section class="modal__gamer" v-if="model=='Gamer'">
      <div class="modal__title">
            <span>
              Sign in
            </span>
      </div>
      <q-form>
        <div class="modal__input">
          <label>Username</label>
          <input class="input" type="text"/>
        </div>
        <div class="modal__input">
          <label>Email</label>
          <input class="input" type="Email"/>
        </div>
        <div class="modal__input">
          <label>Password</label>
          <input class="input" type="password"/>
        </div>
        <div class="modal__input">
          <label>Repeat password</label>
          <input class="input" type="password"/>
        </div>
        <q-list class="text-white modal__genre-list" bordered  padding separator >
          <q-item
            class="modal__genre"
            v-for="genre in genreList"
            :key="genre.title"
            v-ripple
            clickable
            :active="genre.link === true"
            @click="genre.link=!genre.link"
            active-class="active-link"
          >
            <q-item-section><q-item-label>{{genre.title}}</q-item-label></q-item-section>
          </q-item>

        </q-list>
        <div>
          <router-link to="/Admin/Homepage">
            <my-button class="modal__btn" label="Sign in" rounded></my-button>
          </router-link>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import {ref} from 'vue';
import MyButton from '../stories/Button.vue';

const linksList = ref([
  {
    title: 'Arcades',
    link: false,
  },
  {
    title: 'Fighters',
    link: false,
  },
  {
    title: 'Quizzes',
    link: false,
  },
  {
    title: 'Puzzles',
    link: false,
  },
  {
    title: 'Races',
    link: false,
  },
  {
    title: 'Childish',
    link: false,
  },
  {
    title: 'ForGirls',
    link: false,
  },
]);

export default {
  name: 'Auth',
  components: {
    MyButton,
  },
  setup () {
    return {
      genreList:linksList,
      list : ref({
        arcade : false
      }),
      forgotPassword:ref('sign in'),
      model: ref('Admin'),
      options: ['Admin', 'Gamer', 'Developer']
    }
  }
}
</script>

<style lang="scss">
.input{
  border-radius: 16px;
  background-color: #343434;
  color: white;
  display: block;
  height: 48px;
  width: 100%;
  margin: 8px 0;
  padding-left: 15px;
}
.modal{
  background-color: #202020;
  color: white;
  &__title{
    font-size: 32px;
    display: flex;
    justify-content: center;
  }
  &__btn{
    width: 100%;
    margin: 40px 0 24px 0;
    height: 56px;
    border-radius: 16px;
    font-size: 24px;
    background-color: #8451D9;
    color: white;
  }
  &__input{
    margin:24px 0;
  }
  &__genre-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__genre{
    border-radius: 16px;
  }
}
.active-link{
  background-color: #8451D9;
  color: white;
}

</style>
