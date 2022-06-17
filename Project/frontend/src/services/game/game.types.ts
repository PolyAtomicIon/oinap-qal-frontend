import { IGameSingle } from 'src/entities';
import { AxiosResponse } from 'axios';

export interface IGameService {
  getById(payload: number): Promise<AxiosResponse<IGameSingle>>;
  setScoreTelegramApi(payload: string): Promise<AxiosResponse>;
  setScore(payload: IGameScoreData): Promise<AxiosResponse>;
}

export interface IGameScoreData {
  user: number
  game: number
  score: number
}

