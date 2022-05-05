import { defineStore } from 'pinia';

export type RootState = {
  loggedIn: boolean;
  email: string;
};

export const useUserStore = defineStore('user', {
  state: () =>
    ({
      loggedIn: false,
      email: 'user@gmail.com',
    } as RootState),
  getters: {
    getEmail: (state) => state.email,
    getFullName: (): string => 'John Jiop',
  },
  actions: {
    setEmail(otherEmail: string) {
      console.log(otherEmail);
      this.email = otherEmail;
    },
  },
});
