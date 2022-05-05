import { ISignIn, ISignUp } from 'src/entities';
import { IUsersService } from './user.types';
import { AxiosResponse } from 'axios';
import { api as ApiService } from 'src/boot/axios';

export class UsersService implements IUsersService {
  async signIn(payload: ISignIn): Promise<AxiosResponse> {
    return await ApiService.post('/users/login_view/', payload);
  }

  async signUp(payload: ISignUp): Promise<AxiosResponse> {
    return await ApiService.post('/users/register_view/', payload);
  }
}
