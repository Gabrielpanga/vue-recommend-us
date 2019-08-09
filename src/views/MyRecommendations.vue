<template>
  <v-flex
    fill-height
    md-12
  >
    <v-btn
      right
      class="btn-invite white--text"
      @click="addRecommendationClick"
      color="teal"
    >
      Recommend!
    </v-btn>
    <h1>My recommendations</h1>

    <v-divider light>
      
    </v-divider>
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
        email: 'carlos@tpvrg.com',
        name: 'Carlos',
        telephone: '123-456-789',
        cellphone: '123-456-789',
        addressLine1: 'Av. Maipu 12345',
        addressLine2: '1ª B',
        country: 'Spain',
        recommendedBy: {
          name: 'Raul Serran',
          userId: '', // TODO Fill with current userId
        },
      });
    },
  },
};
</script>


<style>
  .btn-invite {
    float: right;
  }
</style>
