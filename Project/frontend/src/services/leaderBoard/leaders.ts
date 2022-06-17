import {
  ILeaderDTO,
} from 'src/entities'
import { ILeaderBoardService } from './leaders.types'
import { AxiosResponse } from 'axios'
import { api as ApiService } from 'src/boot/axios'

export class LeaderBoardService implements ILeaderBoardService {
  data: ILeaderDTO[] = [];

  constructor () {
    this.data = []
  }

  async getLeadersByGameID (gameID: number): Promise<AxiosResponse<ILeaderDTO>> {
    // return await ApiService.get(`/game_scores/?game=${gameID}`);
    return await ApiService.get(`games/${gameID}/leaders/`);

  }

}
