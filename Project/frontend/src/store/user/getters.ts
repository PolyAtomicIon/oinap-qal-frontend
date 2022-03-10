import { GetterTree } from 'vuex';
import { UserInterface } from '../index';
import { ExampleUserInterface } from './state';

const getters: GetterTree<ExampleUserInterface, UserInterface> = {
  userEmail(state: ExampleUserInterface): string {
    return state.email
  },
};

export default getters;
