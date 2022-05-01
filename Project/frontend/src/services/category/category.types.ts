import { ICategoryDTO } from 'src/entities'
import { AxiosResponse } from 'axios'

export interface ICategoriesService {
  getAll (): Promise<AxiosResponse<ICategoryDTO>>
}
