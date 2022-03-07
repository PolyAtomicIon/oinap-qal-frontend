<template>
  <div class="Gamer-registration">

    <q-card>
      <q-card-section>
        <span>Gamer</span>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input label="Username"></q-input>
          <q-input label="Password" type="password"></q-input>
          <div>
            <router-link to="/Gamer/Homepage">
              <q-btn color="primary" label="login" rounded></q-btn>
            </router-link>
            <div class="q-mt-sm q-gutter-lg flex justify-center">
              <router-link to='about' class="">Registration</router-link>
              <router-link to='/Admin/ResetPassword' class="">Forgot Password</router-link>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'GamerRegistration'
}
</script>

<style scoped>

</style>
