import {
  ICategoryDTO,
} from 'src/entities'
import { ICategoriesService } from './category.types'
import { AxiosResponse } from 'axios'
import { api as ApiService } from 'src/boot/axios'

export class CategoriesService implements ICategoriesService {
  data: ICategoryDTO = {data: []};

  constructor () {
    this.data = {data: []}
  }

  async getAll (): Promise<AxiosResponse<ICategoryDTO>> {
    return await ApiService.get('/categories');
  }

}
