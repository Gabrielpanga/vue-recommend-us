<template>
  <v-banner single-line>
    <b>{{ recommendation.name }}</b>

    <span>recommended</span>

    <b>{{ recommendation.recommended.name }}</b>

    <template v-slot:actions>
      <v-btn
        text
        color="deep-green accent-4"
      >
        Dismiss
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Confirm
      </v-btn>
    </template>
  </v-banner>
</template>

<script>
export default {
  props: {
    recommendation: {
      required: true,
      type: Object,
    },
  },
};
</script>
