import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import Mixin from '@/commons/mixins';

const EventBus = new Vue()
Vue.prototype.$eventBus = EventBus
Vue.mixin(Mixin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
