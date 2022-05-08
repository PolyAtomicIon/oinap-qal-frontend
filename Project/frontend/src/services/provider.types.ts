import { IGamesService } from './games';
import { IGameService } from './game';
import { ICategoriesService } from './category';
import { IUsersService } from './user/index';

export interface IProvider {
  Games: IGamesService;
  Game: IGameService,
  Categories: ICategoriesService;
  User: IUsersService;
}
