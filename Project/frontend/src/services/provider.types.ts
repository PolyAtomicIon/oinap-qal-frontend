import { IGamesService } from './games'
import { ICategoriesService } from './category'
import { IGamesSearchService } from './search'

export interface IProvider {
  Games: IGamesService
  Categories: ICategoriesService
  Search: IGamesSearchService
}
