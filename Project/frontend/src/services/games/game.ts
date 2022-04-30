import {
  IGame,
  IGameData,
  ICommentData,
} from 'src/entities'
import { IGamesService } from './game.types'
import { AxiosResponse } from 'axios'
import { api as ApiService } from 'src/boot/axios'

export class GamesService implements IGamesService {
  data: IGameData[] = [];

  constructor () {
    this.data = []
  }

  async getAll (): Promise<AxiosResponse<IGameData[]>> {
    return await ApiService.get('/games');
  }

  async getOneById (id: number): Promise<AxiosResponse<IGame> | undefined> {
    return await ApiService.get(`/games/${id}`);
  }

  async createComment (gameId: number, commentData: ICommentData):  Promise<AxiosResponse<IGame>> {
    return await ApiService.post(`/games/${gameId}`, commentData);
  }
}
