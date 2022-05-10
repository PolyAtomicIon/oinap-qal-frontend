import {
  IGameData,
} from 'src/entities'
import { IGamesSearchService } from 'src/services'
import { AxiosResponse } from 'axios'
import { api as ApiService } from 'src/boot/axios'

export class GamesSearchService implements IGamesSearchService {
  data: IGameData[] = [];

  constructor () {
    this.data = []
  }


  async getAllBySearch (string: string): Promise<AxiosResponse<IGameData[]>> {
    return await ApiService.get(`/search/?string=${string}`);
  }

  async getAllByHashtag (string: string): Promise<AxiosResponse<IGameData[]>> {
    return await ApiService.get(`/search/?string=${string}`);
  }

  async getAllByRating (rating: number): Promise<AxiosResponse<IGameData[]>> {
    return await ApiService.get(`/search/?string=${rating}`);
  }


}
