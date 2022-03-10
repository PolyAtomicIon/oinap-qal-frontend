import { ArticlesService } from './articles'
import { IProvider } from './provider.types'

export const provider = (): IProvider => ({
  articles: new ArticlesService()
})
