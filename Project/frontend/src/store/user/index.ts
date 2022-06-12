import { defineStore } from 'pinia';
import { ISignIn, ISignUp, IToken } from '../../entities/Auth.interfaces';
import { provider } from '../../services/';
import * as jose from 'jose';

export type RootState = {
  loggedIn: boolean;
  email: string;
  userId: null | number;
};

export const useUserStore = defineStore('user', {
  state: () =>
    ({
      loggedIn: false,
      email: 'user@gmail.com',
      userId: null,
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
    signIn(payload: ISignIn): Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
        provider()
          .User.signIn(payload)
          .then(({ data }: { data: IToken }) => {
            // console.log(data);

            const claims = jose.decodeJwt(data.data.access_token);

            this.userId = claims.id as number;
            this.loggedIn = true;
            resolve(true);
          })
          .catch((error) => {
            console.log('Error signing in', error);
            reject();
          });
      });
    },
    signUp(payload: ISignUp): Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
        provider()
          .User.signUp(payload)
          .then(() => {
            this.loggedIn = true;
            resolve(true);
          })
          .catch((error) => {
            console.log('Error signing up', error);
            reject();
          });
      });
    },
  },
});
