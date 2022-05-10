import { IGameData } from 'src/entities'
import { AxiosResponse } from 'axios'

export interface IGamesSearchService {
  getAllBySearch(string: string): Promise<AxiosResponse<IGameData[]>>
}
