import { GamesService } from './games/index';
import { GameService } from './game/index';
import { CategoriesService } from './category/index';
import { UsersService } from './user/index';
import { IProvider } from './provider.types';

export const provider = (): IProvider => ({
  Games: new GamesService(),
  Game: new GameService(),
  Categories: new CategoriesService(),
  User: new UsersService(),
});
