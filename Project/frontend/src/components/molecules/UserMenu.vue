<template>
  <div class="user-menu">
    <q-avatar class="q-mr-sm cursor-pointer mobile-hide" @click="toggleMenu">
      <q-img
        :src="user.user.avatar"
        fit="cover"
        spinner-color="primary"
        spinner-size="18px"
      />
    </q-avatar>
    <q-btn-dropdown
      flat
      dense
      dark
      v-model="menuState"
      :label="userFullName()"
      dropdown-icon="keyboard_arrow_down"
      content-class="bg-dark"
      class="user-menu__dropdown"
    >
      <q-list dark>
        <q-item
          v-for="item in menuItems"
          :key="item.link"
          clickable
          v-close-popup
          :to="item.link"
        >
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator color="grey-8" />

        <q-item clickable v-close-popup @click="user.logout">
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts">
import { useUserStore } from '../../store/user';
import { ref, computed } from 'vue';

export default {
  name: 'UserMenu',
  props: {},
  setup() {
    const user = useUserStore();
    const menuState = ref(false);
    const menuItems = computed(() => {
      const items = [
        {
          title: 'Profile',
          link: '/user/profile',
        },
        {
          title: 'Settings',
          link: '/user/settings',
        },
      ];
      if (user.user.role === 'DEVELOPER') {
        items.push({
          title: 'Studio',
          link: '/studio',
        });
      }
      return items;
    });

    return {
      user,
      userFullName: () => {
        if (user.getFullName.length > 10) {
          return user.getFullName.substr(0, 7) + '...';
        }
        return user.getFullName;
      },
      menuState,
      toggleMenu: () => {
        menuState.value = !menuState.value;
      },
      menuItems,
    };
  },
};
</script>

<style lang="scss">
.user-menu {
  text-align: right;
  &__dropdown {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
}
</style>
