const state = {
  app: 'Quickstart'
};

const getters = {
  app: state => state.app
};

const actions = {
  updateApp({commit}, app) {
    commit('UPDATE_APP', app);
  }
};

const mutations = {
  UPDATE_APP: (state, app) => {
    state.app = app;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
