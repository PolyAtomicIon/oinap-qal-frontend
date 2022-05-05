import { IGameTag } from './Game.interfaces';

export interface ISignIn {
  username: string;
  password: string;
}

export interface ISignUp {
  username: string;
  email: string;
  password: string;
  password2: string;
  role: string;
  categories: IGameTag;
  is_accepted: boolean;
}
