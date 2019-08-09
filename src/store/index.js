import Vue from 'vue';
import Vuex from 'vuex';

import recommendation from './recommendation';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    recommendation,
  },
});
