import {
  IGame,
  IGameDTO,
} from 'src/entities'
import { IGamesService } from './game.types'
import { AxiosResponse } from 'axios'
import { api as ApiService } from 'src/boot/axios'

export class GamesService implements IGamesService {
  data: IGameDTO[] = [];

  constructor () {
    this.data = []
  }

  async getAll (): Promise<AxiosResponse<IGameDTO>> {
    return await ApiService.get('/games');
  }

  async getAllByCategoryId (id: number): Promise<AxiosResponse<IGameDTO>> {
    return await ApiService.get(`/games/?category=${id}`);
  }

  async getOneById (id: number): Promise<AxiosResponse<IGame> | undefined> {
    return await ApiService.get(`/game/${id}`);
  }

}
