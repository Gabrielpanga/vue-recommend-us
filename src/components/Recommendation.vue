<template>
  <v-banner
    class="p-banner"
    elevation="2"
  >
    <v-avatar
      slot="icon"
      color="amber accent-4"
      size="40"
    >
      <v-icon
        icon="mdi-star"
        color="white"
      >
        mdi-star
      </v-icon>
    </v-avatar>
    <b>{{ recommendation.name }}</b>

    <span> was recommended by </span>

    <b>{{ recommendation.recommendedBy.name }}</b>

    <template v-slot:actions>
      <v-btn
        v-if="isAdmin"
        text
        color="blue accent-4"
      >
        Archive
      </v-btn>
      <v-btn
        v-if="isAdmin"
        text
        color="red lighten-1"
      >
        Dismiss
      </v-btn>
      <v-btn
        v-if="isAdmin"
        text
        color="teal"
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
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
  .p-banner {
    margin-bottom: 10px
  }
  .p-banner {
    margin-top: 10px
  }
</style>
