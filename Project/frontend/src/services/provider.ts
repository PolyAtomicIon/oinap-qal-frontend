import { GamesService } from './games/index';
import { GameService } from './game/index';
import { CategoriesService } from './category/index';
import { UsersService } from './user/index';
import { IProvider } from './provider.types';
import { GamesSearchService } from './search/index'
import { GameFeedbackService } from './feedback/index'

export const provider = (): IProvider => ({
  Games: new GamesService(),
  Game: new GameService(),
  Categories: new CategoriesService(),
  User: new UsersService(),
  Search: new GamesSearchService(),
  GameFeedback: new GameFeedbackService()
})
