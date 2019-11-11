<template>
  <div>
    <ul>
      <offer-item v-for="job in jobs[0]" :key="job.id" :job="job"></offer-item>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import OfferItem from '@/components/OfferItem/OfferItem.vue'
import { mapState } from 'vuex';

export default Vue.extend({
  components: {
    OfferItem
  },
  computed: {
    ...mapState('jobs', ['jobs']),
  },
});
</script>

<style lang="scss" scoped>

</style>