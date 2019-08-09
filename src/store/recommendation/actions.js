import {
  ADD_RECOMMENDATION,
  REMOVE_RECOMMENDATION,
  SET_RECOMMENDATIONS,
} from './types';

import api from '@/api/recommendations';

export default {
  async addRecommendation({ commit }, recommendation) {
    try {
      await api.create(recommendation);
      commit(ADD_RECOMMENDATION, recommendation);
    } catch (err) {
      console.log(err);
    }
  },
  async removeRecommendation({ commit }, id) {
    try {
      await api.delete(id);
      commit(REMOVE_RECOMMENDATION, id);
    } catch (err) {
      console.log(err);
    }
  },
  async getRecommendations({ commit }) {
    try {
      const recommendations = await api.fetch();
      commit(SET_RECOMMENDATIONS, recommendations);
    } catch (err) {
      console.log(err);
    }
  },
};
