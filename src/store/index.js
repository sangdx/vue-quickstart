import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import auth from './modules/auth'
import mockUsers from './modules/userFake'
import VuexPersist from 'vuex-persist';

const vuexSessionStorage = new VuexPersist({
  key: 'started',
  storage: window.localStorage
});
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    auth,
    mockUsers
  },
  plugins: [vuexSessionStorage.plugin],
  strict: process.env.NODE_ENV !== 'production'
});

export default store
