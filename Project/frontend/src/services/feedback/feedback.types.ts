import { ICommentData } from 'src/entities'
import { AxiosResponse } from 'axios'

export interface IGameFeedbackService {
  getAllCommentByTitle(title: string): Promise<AxiosResponse<ICommentData[]>>
  setOneComment(comment: object): Promise<AxiosResponse<ICommentData>>
}
