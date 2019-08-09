import api from './baseApi';

const recommendationApi = {
  ...api,
  resource: 'recommendations.json',
};

export default {
  delete: ({ id }) => recommendationApi.delete(id),
  fetch: () => recommendationApi.fetch(),
  create: recommendation => recommendationApi.create(recommendation),
  update: recommendation => recommendationApi.articles.update(recommendation),
};
