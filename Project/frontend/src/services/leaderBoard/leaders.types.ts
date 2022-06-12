import {ILeaderDTO } from 'src/entities'
import { AxiosResponse } from 'axios'

export interface ILeaderBoardService {
  getLeadersByGameID (gameID: number): Promise<AxiosResponse<ILeaderDTO>>
}
