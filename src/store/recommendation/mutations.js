/* eslint-disable no-param-reassign */

import {
  ADD_RECOMMENDATION,
  REMOVE_RECOMMENDATION,
  SET_RECOMMENDATIONS,
} from './types';

export default {
  [ADD_RECOMMENDATION](state, payload) {
    state.recommendations = [...state.recommendations, payload];
  },
  [REMOVE_RECOMMENDATION](state, payload) {
    const itemToBeRemoved = state.recommendations.findIndex(item => item.id === payload.id);
    state.recommendations.splice(itemToBeRemoved, 1);
  },
  [SET_RECOMMENDATIONS](state, payload) {
    state.recommendations = payload;
  },
};
