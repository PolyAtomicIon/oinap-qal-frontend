import {JWTPayload} from 'jose';

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

export interface IToken {
  data: {
    access_token: string;
  }
}
export interface ITokenData extends JWTPayload {
  user_id: number,
  email: string,
  token: string,
  avatar: string,
  username: string,
}


export interface IAuthErrorData {
  [key: string]: string[];
};

export interface IAuthError {
  response : {
    data: IAuthErrorData;
  };
};
