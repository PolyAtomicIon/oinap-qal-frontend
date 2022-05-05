import { GamesService } from './games/index';
import { CategoriesService } from './category/index';
import { UsersService } from './user/index';
import { IProvider } from './provider.types';

export const provider = (): IProvider => ({
  Games: new GamesService(),
  Categories: new CategoriesService(),
  User: new UsersService(),
});
