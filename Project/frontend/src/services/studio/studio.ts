import { IStudioGameData } from 'src/entities';
import { IStudioService } from './studio.types';
import { AxiosResponse } from 'axios';
import { api as ApiService } from 'src/boot/axios';

export class StudioService implements IStudioService {
  async getAllGames(): Promise<AxiosResponse> {
    return await ApiService.get('/dev-games', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }


  async uploadGame(payload: FormData): Promise<AxiosResponse> {
    return await ApiService.post('https://biz-oinaimyz.herokuapp.com/upload-game/', payload, {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    });
  }

  async addGame(payload: IStudioGameData): Promise<AxiosResponse> {
    return await ApiService.post('/dev-games/', payload, {
      headers: {
        // 'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }

  async editGame(payload: IStudioGameData): Promise<AxiosResponse> {
    return await ApiService.put('/dev-games/', payload, {
      headers: {
        // 'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }

  async deleteGame(payload: number): Promise<AxiosResponse> {
    return await ApiService.delete(`/dev-games/${payload}/`);
  }
}
