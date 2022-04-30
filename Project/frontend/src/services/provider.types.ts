import { IGamesService } from './games'
import { ICategoriesService } from './category'

export interface IProvider {
  Games: IGamesService
  Categories: ICategoriesService
}
