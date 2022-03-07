import { Module } from 'vuex';
import { UserInterface } from '../index';
import state, { ExampleUserInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const user: Module<ExampleUserInterface, UserInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default user;
