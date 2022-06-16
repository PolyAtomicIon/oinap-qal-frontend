import {ICommentData, ICommentDTO} from 'src/entities'

import { IGameFeedbackService } from 'src/services'
import { AxiosResponse } from 'axios'
import { api as ApiService } from 'src/boot/axios'

export class GameFeedbackService implements IGameFeedbackService {
  data: ICommentData[] = [];

  constructor () {
    this.data = []
  }
  async getAllCommentByGame (id: number): Promise<AxiosResponse<ICommentDTO>> {
    return await ApiService.get(`/game_comments/?game=${id}`);
  }
  async setOneComment (comment: object): Promise<AxiosResponse<ICommentData>> {
    return await ApiService.post('/game_comments/',comment);
  }
  async setOneFeedback (feedback: object): Promise<AxiosResponse<ICommentData>> {
    return await ApiService.post('/game_feedbacks/',feedback);
  }

}
