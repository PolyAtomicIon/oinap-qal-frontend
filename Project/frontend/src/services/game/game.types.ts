import { IGameData } from 'src/entities';
import { AxiosResponse } from 'axios';

export interface IGameService {
  getById(payload: number): Promise<AxiosResponse<IGameData>>;
  setScoreTelegramApi(payload: string): Promise<AxiosResponse>;
}
