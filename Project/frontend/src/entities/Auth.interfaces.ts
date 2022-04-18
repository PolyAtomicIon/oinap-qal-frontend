import { IGameTag } from './Game.interfaces'

export interface ISignIn {
  username: string
  password: string
}

export interface ISignUp {
  username: string
  email: string
  password: string
  repeatPassword: string
  tags: IGameTag
}
