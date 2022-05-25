<template>
  <div class="user-menu">
    <q-avatar class="q-mr-sm cursor-pointer" @click="toggleMenu">
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
    <q-btn-dropdown
      flat
      dark
      :label="userFullName"
      dropdown-icon="keyboard_arrow_down"
      v-model="menuState"
      content-class="bg-dark"
    >
      <q-list dark>
        <q-item clickable v-close-popup to="/user/profile">
          <q-item-section>
            <q-item-label>Profile</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/user/settings">
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="grey-8" />
        <q-item clickable v-close-popup to="/user/profile">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts">
import { useUserStore } from '../../store/user';
import { ref } from 'vue';

export default {
  name: 'UserMenu',
  props: {},
  setup() {
    const user = useUserStore();
    const menuState = ref(false);

    return {
      user,
      userFullName: user.getFullName,
      menuState,
      toggleMenu: () => {
        menuState.value = !menuState.value;
      },
    };
  },
};
</script>

<style lang="scss">
.user-menu {
  text-align: right;
}
</style>
