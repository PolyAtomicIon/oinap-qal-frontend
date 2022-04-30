import { GamesService } from './games/index'
import { IProvider } from './provider.types'

export const provider = (): IProvider => ({
  Games: new GamesService()
})
