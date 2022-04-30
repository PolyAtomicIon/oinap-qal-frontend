import { IGame, IGameData } from './game.types'
import { IComment, Comment } from '../comment'

export class Game implements IGame {
  readonly id?: number
  readonly title: string
  readonly content: string
  readonly short: string
  readonly createdAt?: Date | string
  readonly isActive: boolean
  readonly picture: string
  readonly tags: string[]
  readonly comments: IComment[]

  constructor (data: IGameData) {
    if (data.id) {
      this.id = data.id
    }

    this.title = data.title
    this.content = data.content
    this.short = data.short
    this.createdAt = data.createdAt
    this.isActive = data.isActive
    this.picture = data.picture
    this.tags = data.tags

    if (data.createdAt) {
      this.createdAt = data.createdAt
    }

    this.comments = data.comments.map( (comment) => new Comment(comment))
  }
}
