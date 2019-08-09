import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const RECOMMENDATION_MODULE_NAME = 'recommendation';

export default {
  namespaced: true,
  state: {
    recommendations: [],
  },
  getters,
  mutations,
  actions,
};
