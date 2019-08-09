<template>
    <v-flex fill-height md-12>
        <h1>Home</h1>
        <app-recommendations></app-recommendations>
    </v-flex>
</template>

<script>
import Recommendations from '../components/Recommendations'

export default {
    components: {
        appRecommendations: Recommendations
    }
};
</script>
