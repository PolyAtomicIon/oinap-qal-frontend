import { IGameService, IGameScoreData } from './game.types';
import { AxiosResponse } from 'axios';
import { api as ApiService } from 'src/boot/axios';
import { IGameSingle } from 'src/entities';

export class GameService implements IGameService {
  async getById(payload: number): Promise<AxiosResponse<IGameSingle>> {
    return await ApiService.get(`/games/${payload}`);
  }
  async setScoreTelegramApi(payload: string): Promise<AxiosResponse> {
    return await ApiService({
      url: payload,
      baseURL: 'https://biz-oinaimyz.herokuapp.com'
    });
  }
  async setScore(payload: IGameScoreData): Promise<AxiosResponse> {
    return await ApiService.post('/game_scores/', payload);
  }
}
