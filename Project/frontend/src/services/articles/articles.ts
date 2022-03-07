import {
  IArticle,
  IArticleData,
  ICommentData,
} from 'src/entities'
import { IArticlesService } from './articles.types'
import { AxiosResponse } from 'axios'
import { api as ApiService } from 'src/boot/axios'

export class ArticlesService implements IArticlesService {
  data: IArticleData[] = [];

  constructor () {
    this.data = []
  }

  async getAll (): Promise<AxiosResponse<IArticleData[]>> {
    return await ApiService.get('/articles');
  }

  async getOneById (id: number): Promise<AxiosResponse<IArticle> | undefined> {
    return await ApiService.get(`/articles/${id}`);
  }

  async createComment (articleId: number, commentData: ICommentData):  Promise<AxiosResponse<IArticle>> {
    return await ApiService.post(`/articles/${articleId}`, commentData);
  }
}
