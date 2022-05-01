import { defineStore } from 'pinia';
import { ICategoryData, ICategoryDTO } from '../../entities/category';
import { provider } from '../../services/';

interface IAppDrawerCategoryData {
  id: number;
  title: string;
  icon: string;
  path: string;
}

export type RootState = {
  categories: IAppDrawerCategoryData[]
};

export const useCategoriesStore = defineStore('categories', {
  state: () =>
    ({
      categories: [] as IAppDrawerCategoryData[],
    } as RootState),
  getters: {
    getCategories: (state): IAppDrawerCategoryData[] => {
      return state.categories;
    },
  },
  actions: {
    async fetchCategories() {
      const categoriesResponse = await provider().Categories.getAll();
      this.setCategories(categoriesResponse.data);
    },
    setCategories(categoriesRaw: ICategoryDTO) {
      this.categories = categoriesRaw.data.map(
        (category: ICategoryData): IAppDrawerCategoryData => ({
          id: category.id,
          title: category.name,
          icon: `genres/${category.icon}`,
          path: `/${category.name}/${category.id}`,
        })
      );
    },
  },
});
