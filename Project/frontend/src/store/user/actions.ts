import { ActionTree } from 'vuex';
import { UserInterface } from '../index';
import { ExampleUserInterface } from './state';

const actions: ActionTree<ExampleUserInterface, UserInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
