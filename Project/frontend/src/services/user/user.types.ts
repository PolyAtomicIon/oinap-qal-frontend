import { ISignIn, ISignUp } from 'src/entities';
import { AxiosResponse } from 'axios';

export interface IUsersService {
  signIn(payload: ISignIn): Promise<AxiosResponse>;
  signUp(payload: ISignUp): Promise<AxiosResponse>;
}
