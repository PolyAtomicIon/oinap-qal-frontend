import {ICommentData, ICommentDTO} from 'src/entities'
import { AxiosResponse } from 'axios'

export interface IGameFeedbackService {
  getAllCommentByGame(id: number): Promise<AxiosResponse<ICommentDTO>>
  setOneComment(comment: object): Promise<AxiosResponse<ICommentData>>
  setOneFeedback(feedback: object): Promise<AxiosResponse<ICommentData>>
}
