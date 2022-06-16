import { defineStore } from 'pinia';
import { ISignIn, ISignUp, IToken, ITokenData, IAuthError, IAuthErrorData } from '../../entities/Auth.interfaces';
import { provider } from '../../services/';
import { api as ApiService } from 'src/boot/axios'
import * as jose from 'jose';

export type RootState = {
  loggedIn: boolean;
  user: {
    id: number | null,
    token: string | null
    email: string,
    username: string,
    avatar: string | null,
    role: 'GAMER' | 'ADMIN' | 'DEVELOPER' | null,
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
        role: null,
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
          .then(() => {
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
        role: null,
      };
      localStorage.setItem('token', '');
      // @ts-ignore
      ApiService.defaults.headers.common['Authorization'] = '';
    },
    setUserData(token: string){
      const data = jose.decodeJwt(token) as ITokenData;
      // console.log(data)
      this.loggedIn = true;
      this.user = {
        id: data.id,
        email: data.email,
        username: data.username,
        avatar: data.avatar,
        token,
        role: data.role
      }

      localStorage.setItem('token', token);
      // @ts-ignore
      ApiService.defaults.headers.common['Authorization'] = 'Token ' + token;
    },
    loadAndSetToken() {
      const token = localStorage.getItem('token')
      if(token) {
        this.setUserData(token);
      }
    }
  },
});
