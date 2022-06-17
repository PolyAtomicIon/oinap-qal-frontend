import { IGamesService } from './games';
import { IGameService } from './game';
import { ICategoriesService } from './category';
import { IUsersService } from './user/index';
import { IGamesSearchService } from './search';
import { IGameFeedbackService } from './feedback';
import { ILeaderBoardService } from './leaderBoard';
import { IStudioService } from './studio';

export interface IProvider {
  Games: IGamesService;
  Game: IGameService;
  Categories: ICategoriesService;
  User: IUsersService;
  Search: IGamesSearchService;
  GameFeedback: IGameFeedbackService;
  LeaderBoard: ILeaderBoardService;
  Studio: IStudioService;
}
