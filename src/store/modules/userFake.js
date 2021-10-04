const state = {
  users: []
};

const getters = {
  users: state => state.users
};

const actions = {
  addUser({commit}, user) {
    commit('UPDATE_USER', user);
  },
  removeUser({commit}, userId) {
    commit('REMOVE_USER', userId);
  },
};

const mutations = {
  UPDATE_USER: (state, user) => {
    state.users.push(user);
  },
  REMOVE_USER: (state, userId) => {
    const users = state.users.filter(user => user.id !== userId);
    state.users = users;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
