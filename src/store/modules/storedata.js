const state = {
  currentAddress: null,
};

const getters = {
  getCurrentUser: function (state) {
    return state.currentAddress;
  },
};

const actions = {
  async setCurrentUser({ commit }, address) {
    commit("setCurrentUser", address);
  },
};

const mutations = {
  setCurrentUser: function (state, currentAddress) {
    state.currentAddress = currentAddress;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
