import { GamesService } from './games/index'
import { GamesSearchService } from './search/index'
import { CategoriesService } from './category/index'
import { IProvider } from './provider.types'

export const provider = (): IProvider => ({
  Games: new GamesService(),
  Categories: new CategoriesService(),
  Search: new GamesSearchService()
})
