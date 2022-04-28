import { defineStore } from 'pinia';

export type RootState = {
  showSignInModal: boolean,
  showSignUpModal: boolean,
};

export const useModalsStore = defineStore('modals', {
  state: () =>
    ({
      showSignInModal: false,
      showSignUpModal: false,
    } as RootState),
  getters: {
  },
  actions: {
    setShowSignInModal(payload: boolean) {
      this.showSignInModal = payload;
    },
    setShowSignUpModal(payload: boolean) {
      this.showSignUpModal = payload;
    },
  },
});
