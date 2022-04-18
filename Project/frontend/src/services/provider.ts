import { ArticlesService } from './articles/index'
import { IProvider } from './provider.types'

export const provider = (): IProvider => ({
  articles: new ArticlesService()
})
