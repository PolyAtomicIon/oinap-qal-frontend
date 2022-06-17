import { ISignIn, ISignUp } from 'src/entities';
import { IUsersService } from './user.types';
import { AxiosResponse } from 'axios';
import { api as ApiService } from 'src/boot/axios';

export class UsersService implements IUsersService {
  async signIn(payload: ISignIn): Promise<AxiosResponse> {
    return await ApiService.post('/users/login_view/', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }


  async signUp(payload: ISignUp): Promise<AxiosResponse> {
    return await ApiService.post('/users/register_view/', payload, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }

  async editUserProfile(id:number,payload:FormData): Promise<AxiosResponse> {
    return await ApiService.patch(`/users/${id}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    } );
  }

}
