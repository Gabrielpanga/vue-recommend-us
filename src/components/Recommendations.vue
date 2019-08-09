<template>
    <v-flex md-12>
        <app-recomnendation
            v-for="(recommendation, index) in recommendations"
            :key="index"
            :recommendation="recommendation"
        >
        </app-recomnendation>
    </v-flex>
</template>

<script>
import Recommendation from './Recommendation'

export default {
    data() {
        return {
            recommendations: [
                {
                    name: 'Carlos',
                    recommended: {
                        name: 'Raul',
                        telephone: '123-456-789',
                    }
                },
                {
                    name: 'Carlos',
                    recommended: {
                        name: 'Florencia',
                        telephone: '123-456-789',
                    }
                },
            ]
        }
    },
    components: {
        appRecomnendation: Recommendation,
    }
}
</script>
