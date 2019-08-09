<template>
  <v-flex md-12>
    <app-recomnendation
      v-for="(recommendation, index) in recommendations"
      isAdmin
      :key="index"
      :recommendation="recommendation"
    />
  </v-flex>
</template>

<script>
import Recommendation from './Recommendation';

export default {
  components: {
    appRecomnendation: Recommendation,
  },
  props: {
    recommendations: {
      required: true,
      type: Array,
    },
  },
};
</script>
