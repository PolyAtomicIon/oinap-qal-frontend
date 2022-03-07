<template>
  <div class="developer-registration">
    <q-card>
      <q-card-section>
        <span>Developer</span>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input label="Username"></q-input>
          <q-input label="Password" type="password"></q-input>
          <div>
            <router-link to="/Developer/Homepage">
              <q-btn color="primary" label="login" rounded></q-btn>
            </router-link>
            <q-tabs class="q-mt-sm q-gutter-lg flex justify-center">
              <q-route-tab to='/Developer/Registration'>Registration</q-route-tab>
              <q-route-tab to='/Developer/ResetPassword' class="">Forgot Password</q-route-tab>
            </q-tabs>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'DeveloperLogin'
}
</script>

<style lang="scss">

</style>
