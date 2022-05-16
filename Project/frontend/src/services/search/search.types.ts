import { IGameDTO} from 'src/entities'
import { AxiosResponse } from 'axios'

export interface IGamesSearchService {
  getAllBySearch(string: string): Promise<AxiosResponse<IGameDTO>>
  getAllByRating(rating: number): Promise<AxiosResponse<IGameDTO>>
}
