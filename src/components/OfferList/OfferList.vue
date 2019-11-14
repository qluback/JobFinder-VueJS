<template>
  <main class="offerList">
    <offer-search></offer-search>
    <ul class="offerList__items">
      <offer-item v-for="(job, index) in jobs" :key="index" :idOffer="index" :job="job"></offer-item>
    </ul>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import OfferItem from '@/components/OfferItem/OfferItem.vue'
import OfferSearch from '@/components/OfferSearch/OfferSearch.vue'
import { mapState } from 'vuex';

export default Vue.extend({
  components: {
    OfferItem, OfferSearch
  },
  computed: {
    ...mapState('jobs', ['jobs']),
  },
  beforeMount() {
    this.$store.dispatch('jobs/showRecentJobs')
  }
});
</script>

<style lang="scss" scoped>
  .offerList {
    &__items {
      display: flex;
      flex-direction: column;
      padding: 0;
    }
  }
</style>