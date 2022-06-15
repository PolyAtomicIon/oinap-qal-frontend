import { defineStore } from 'pinia';
import { ISignIn, ISignUp, IToken, ITokenData, IAuthError, IAuthErrorData } from '../../entities/Auth.interfaces';
import { provider } from '../../services/';
import * as jose from 'jose';

export type RootState = {
  loggedIn: boolean;
  user: {
    id: number | null,
    token: string | null
    email: string,
    username: string,
    avatar: string | null
  },
};

export const useUserStore = defineStore('user', {
  state: () =>
    ({
      loggedIn: false,
      user: {
        id: null,
        token: null,
        email: '',
        username: '',
        avatar: null,
      },
    } as RootState),
  getters: {
    getEmail: (state) => state.user.email,
    getFullName: (state): string => state.user.username,
  },
  actions: {
    setEmail(otherEmail: string) {
      console.log(otherEmail);
      this.user.email = otherEmail;
    },
    setUserData(token: string){
      const data = jose.decodeJwt(token) as ITokenData;

      this.loggedIn = true;
      this.user = {
        id: data.id,
        email: data.email,
        username: data.username,
        avatar: data.avatar,
        token
      }
    },
    signIn(payload: ISignIn): Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
        provider()
          .User.signIn(payload)
          .then(({ data }: { data: IToken }) => {
            // console.log(data);
            this.setUserData(data.data.access_token);
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
          .then(({ data }: { data: IToken }) => {
            this.setUserData(data.data.access_token);
            resolve(true);
          })
          .catch((error: IAuthError) => {
            if (error.response) {
              const data: IAuthErrorData = error.response.data;
              console.log('Error signing up', data);
              reject(data);
            }
          });
      });
    },
    logout() {
      this.loggedIn = false;
      this.user = {
        id: null,
        token: null,
        email: '',
        username: '',
        avatar: null,
      };
    }
  },
});
