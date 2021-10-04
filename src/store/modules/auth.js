import {users} from '@/commons/constants'

const state = {
  user: null,
  isLogined: false,
  rememberInfo: {},
  isRemember: false
};

const getters = {
  user: state => state.user,
  isLogined: state => state.isLogined,
  rememberInfo: state => state.rememberInfo,
  isRemember: state => state.isRemember
};

const actions = {
  updateUser({commit}, user) {
    commit('UPDATE_USER', user),
    commit('UPDATE_LOGINED', true);
  },
  updateRememberInfo({commit}, info) {
    commit('UPDATE_INFO', info)
  },
  updateIsRemember({commit}, isRemember) {
    commit('UPDATE_IS_REMEMBER', isRemember);
  },
  init({commit}) {
    const dataInit = {
      user: null,
      isLogined: false
    }
    commit('INIT_STORE', dataInit);
  }
};

const mutations = {
  UPDATE_USER: (state, user) => {
    state.user = user;
  },
  UPDATE_LOGINED: (state, isLogined) => {
    state.isLogined = isLogined;
  },
  UPDATE_INFO: (state, info) => {
    state.rememberInfo = info
  },
  UPDATE_IS_REMEMBER: (state, isRemember) => {
    state.isRemember = isRemember;
  },
  INIT_STORE: (state, {user, isLogined, rememberInfo, isRemember}) => {
    state.user = user;
    state.isLogined = isLogined;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
