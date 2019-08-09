<template>
  <v-flex
    fill-height
    md-12
  >
    <h1>Dashboard</h1>
    <app-recommendations
      :recommendations="recommendations"
    />
  </v-flex>
</template>

<script>
import Recommendations from '../components/Recommendations';

export default {
  components: {
    appRecommendations: Recommendations,
  },
  data() {
    return {
      recommendations: [
        {
          name: 'Carlos',
          recommended: {
            name: 'Raul',
            telephone: '123-456-789',
          },
        },
        {
          name: 'Carlos',
          recommended: {
            name: 'Florencia',
            telephone: '123-456-789',
          },
        },
      ],
    };
  },
};
</script>
