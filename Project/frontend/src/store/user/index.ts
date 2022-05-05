import { defineStore } from 'pinia';
import { ISignIn, ISignUp } from '../../entities/Auth.interfaces';
import { provider } from '../../services/';

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
    signIn(payload: ISignIn) {
      this.loggedIn = true;
      return;
      provider()
        .User.signIn(payload)
        .then(() => {
          this.loggedIn = true;
        })
        .catch((error) => {
          console.log('Error signing in', error);
        });
    },
    signUp(payload: ISignUp) {
      this.loggedIn = true;
      return;
      provider()
        .User.signUp(payload)
        .then(() => {
          this.loggedIn = true;
        })
        .catch((error) => {
          console.log('Error signing up', error);
        });
    },
  },
});
