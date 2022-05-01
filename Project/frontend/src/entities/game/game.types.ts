import { IComment, ICommentData } from 'src/entities'

export interface IGameData {
  readonly id?: number
  readonly title: string
  readonly content: string
  readonly short: string
  readonly createdAt?: Date | string
  readonly isActive: boolean
  readonly picture: string
  readonly tags: string[]

  readonly comments: ICommentData[]
}

export interface IGame extends IGameData {
  readonly comments: IComment[]
}
