import { IGamesService } from './games';
import { ICategoriesService } from './category';
import { IUsersService } from './user/index';

export interface IProvider {
  Games: IGamesService;
  Categories: ICategoriesService;
  User: IUsersService;
}
