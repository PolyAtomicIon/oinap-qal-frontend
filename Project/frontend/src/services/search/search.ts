import {
  IGameData, IGameDTO,
} from 'src/entities'
import { IGamesSearchService } from 'src/services'
import { AxiosResponse } from 'axios'
import { api as ApiService } from 'src/boot/axios'

export class GamesSearchService implements IGamesSearchService {
  data: IGameData[] = [];

  constructor () {
    this.data = []
  }


  async getAllBySearch (string: string): Promise<AxiosResponse<IGameDTO>> {
    return await ApiService.get(`/search/?q=${string}`);
  }

  async getAllByHashtag (string: string): Promise<AxiosResponse<IGameData[]>> {
    return await ApiService.get(`/search/?string=${string}`);
  }

  async getAllByRating (rating: number): Promise<AxiosResponse<IGameDTO>> {
    return await ApiService.get(`/search/?rating_value=${rating}`);
  }


}
