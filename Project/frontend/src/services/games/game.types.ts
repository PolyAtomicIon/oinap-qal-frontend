import { IGame, IGameData } from 'src/entities'
import { AxiosResponse } from 'axios'

export interface IGamesService {
  getAll (): Promise<AxiosResponse<IGameData[]>>
  getAllByCategoryId (id: number): Promise<AxiosResponse<IGameData[]>>
  getOneById (id: number): Promise<AxiosResponse<IGame> | undefined>
}
