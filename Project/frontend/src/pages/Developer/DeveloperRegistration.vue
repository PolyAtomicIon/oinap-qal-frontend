<template>
  <div class="developer-registration">
    <q-card>
      <q-card-section>
        <span>Developer</span>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input label="Username"></q-input>
          <q-input label="Email" type="email"></q-input>
          <q-input label="Password" type="password"></q-input>
          <q-input label="Repeat Password" type="password"></q-input>
          <q-list bordered  padding separator class="rounded-borders text-primary">
            <q-item
              class="genre"
              v-ripple
              clickable
              :active="link === 'inbox'"
              @click="link = 'inbox'"
              active-class="my-menu-link"
            >
              <q-item-section><q-item-label>Inbox</q-item-label></q-item-section>
            </q-item>
            <q-item
              class="genre"
              v-ripple
              clickable
              :active="link === 'inbox'"
              @click="link = 'inbox'"
              active-class="my-menu-link"
            >
              <q-item-section>Inbox</q-item-section>
            </q-item>
          </q-list>
          <div>
            <router-link to="/Developer">
              <q-btn color="primary" label="Sign Up" rounded></q-btn>
            </router-link>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'DeveloperRegistration'
}
</script>

<style lang="scss">

</style>
