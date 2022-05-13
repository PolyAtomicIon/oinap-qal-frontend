<template>
  <div class="user-menu">
    <q-avatar class="q-mr-sm">
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
    <q-btn-dropdown
      flat
      dark
      :label="userFullName"
      dropdown-icon="keyboard_arrow_down"
      :ripple="false"
      content-class="bg-dark"
    >
      <q-list dark>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="grey-8" />
        <q-item clickable v-close-popup @click="onItemClick">
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

export default {
  name: 'UserMenu',
  props: {},
  setup() {
    const user = useUserStore();

    return {
      user,
      userFullName: user.getFullName,
    };
  },
};
</script>

<style lang="scss">
.user-menu {
  text-align: right;
}
</style>
