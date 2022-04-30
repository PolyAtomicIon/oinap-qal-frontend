import {
  IGame,
  IGameData,
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

  async getAllByCategoryId (id: number): Promise<AxiosResponse<IGameData[]>> {
    return await ApiService.get(`/games/?category=${id}`);
  }

  async getOneById (id: number): Promise<AxiosResponse<IGame> | undefined> {
    return await ApiService.get(`/game/${id}`);
  }

}
