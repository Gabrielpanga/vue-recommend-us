<template>
  <v-flex
    fill-height
    md-12
  >
    <h1>My recommendations</h1>
    <v-flex>
      <v-btn
        primary
        @click="addRecommendationClick"
      >
        Recommend!
      </v-btn>
    </v-flex>
    <hr>
    <app-recommendations :recommendations="recommendations" />
  </v-flex>
</template>


<script>
import { createNamespacedHelpers } from 'vuex';

import Recommendations from '@/components/Recommendations';
import { RECOMMENDATION_MODULE_NAME } from '@/store/recommendation';

const { mapActions, mapGetters } = createNamespacedHelpers(
  RECOMMENDATION_MODULE_NAME,
);

export default {
  components: {
    appRecommendations: Recommendations,
  },
  computed: {
    ...mapGetters({
      recommendations: 'recommendations',
    }),
  },
  created() {
    this.getRecommendations();
  },
  methods: {
    ...mapActions({
      addRecommendation: 'addRecommendation',
      getRecommendations: 'getRecommendations',
    }),
    addRecommendationClick() {
      this.addRecommendation({
        id: 1,
        name: 'Carlos',
        recommended: {
          name: 'Raul',
          telephone: '123-456-789',
        },
      });
    },
  },
};
</script>
