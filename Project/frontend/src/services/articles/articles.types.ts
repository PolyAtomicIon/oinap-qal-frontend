import { IArticle, ICommentData, IArticleData } from 'src/entities'
import { AxiosResponse } from 'axios'

export interface IArticlesService {
  getAll (): Promise<AxiosResponse<IArticleData[]>>
  getOneById (id: number): Promise<AxiosResponse<IArticle> | undefined>
  createComment (id: number, data: ICommentData):  Promise<AxiosResponse<IArticle>>
}
