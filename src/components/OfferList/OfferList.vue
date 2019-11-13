<template>
  <div>
    <offer-search></offer-search>
    <ul v-if="jobs">
      <offer-item v-for="job in jobs" :key="job.id" :job="job"></offer-item>
    </ul>
  </div>
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
});
</script>

<style lang="scss" scoped>

</style>