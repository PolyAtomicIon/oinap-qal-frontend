import { IGame, IGameDTO } from 'src/entities'
import { AxiosResponse } from 'axios'

export interface IGamesService {
  getAll (): Promise<AxiosResponse<IGameDTO>>
  getAllByCategoryId (id: number): Promise<AxiosResponse<IGameDTO>>
  getOneById (id: number): Promise<AxiosResponse<IGame> | undefined>
}
