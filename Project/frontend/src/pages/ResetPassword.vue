<template>
  <div class="admin-reset-password">
    <q-card>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input label="Username"></q-input>
          <q-input label="Password" type="password"></q-input>
          <q-input label="Repeat Password" type="password"></q-input>
          <div>
            <q-btn color="primary" @click="this.$router.back()" label="Reset password" rounded></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AdminResetPassword'
}
</script>

<style lang="scss">

</style>
