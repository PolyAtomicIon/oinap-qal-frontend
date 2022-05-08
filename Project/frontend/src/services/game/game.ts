import { IGameService } from './game.types';
import { AxiosResponse } from 'axios';
import { api as ApiService } from 'src/boot/axios';
import { IGameData } from 'src/entities';

export class GameService implements IGameService {
  async getById(payload: number): Promise<AxiosResponse<IGameData>> {
    return await ApiService.post('/game', payload);
  }
  async setScoreTelegramApi(payload: string): Promise<AxiosResponse> {
    return await ApiService({
      url: payload,
      baseURL: 'https://biz-oinaimyz.herokuapp.com'
    });
  }
}
