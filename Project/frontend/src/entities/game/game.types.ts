import { ICommentData } from 'src/entities'

export interface IGameData {
  readonly id?: number
  readonly file_id: number
  readonly title: string
  readonly content: string
  readonly short: string
  readonly createdAt?: Date | string
  readonly isActive: boolean
  readonly picture: string
  readonly tags: string[]
  readonly comments: ICommentData[]
}

export interface IStudioGameData {
  readonly id?: number
  readonly file_id: number | null
  readonly category?: number
  readonly user?: number
  readonly views?: number
  readonly played_count?: number
  readonly title: string
  readonly description: string
  readonly cover?: string
  readonly tags: string
  readonly total_rate?: number
  readonly comments?: ICommentData[]
  readonly author_username?: string
}


export interface IGame extends IGameData {
  data: IGameData
}
export interface IGameSingle {
  data: IGameData
}


export interface IGameDTO {
  data: IGame[]
};
