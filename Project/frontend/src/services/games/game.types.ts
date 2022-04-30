import { IGame, ICommentData, IGameData } from 'src/entities'
import { AxiosResponse } from 'axios'

export interface IGamesService {
  getAll (): Promise<AxiosResponse<IGameData[]>>
  getOneById (id: number): Promise<AxiosResponse<IGame> | undefined>
  createComment (id: number, data: ICommentData):  Promise<AxiosResponse<IGame>>
}
