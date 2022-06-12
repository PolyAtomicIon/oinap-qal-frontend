export interface ISignIn {
  username: string;
  password: string;
}

export interface ISignUp {
  username: string;
  email: string;
  password: string;
  password2: string;
  role: 'DEVELOPER' | 'GAMER';
  categories: number[];
  is_accepted: boolean;
}
