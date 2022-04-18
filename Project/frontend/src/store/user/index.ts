import { defineStore } from 'pinia';

export type RootState = {
  email: string
};

export const useStore = defineStore('user', {
  state: () =>
    ({
      email: 'user@gmail.com'
    } as RootState),
  getters: {
    getEmail: (state) => state.email,
  },
  actions: {
    setEmail(otherEmail: string) {
      console.log(otherEmail)
      this.email = otherEmail;
    },
  },
});
