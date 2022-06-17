import { IStudioGameData } from 'src/entities';
import { AxiosResponse } from 'axios';

export interface IStudioService {
  getAllGames(): Promise<AxiosResponse>;
  uploadGame(payload: FormData): Promise<AxiosResponse>;
  addGame(payload: IStudioGameData): Promise<AxiosResponse>;
  editGame(payload: IStudioGameData): Promise<AxiosResponse>;
  deleteGame(payload: number): Promise<AxiosResponse>;
}
