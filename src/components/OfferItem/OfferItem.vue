<template>
  <li class="offerItem">
    <p>{{ job.id }}</p>
    <p>{{ job.type }}</p>
    <p @click="showDetails(idOffer)">{{ job.title }}</p>
    <p>{{ job.company }}</p>
    <p>{{ job.location }}</p>
    <p>{{ job.created_at }}</p>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import Job from '@/models/job'

export default Vue.extend({
  props: {
    idOffer: Number,
    job: Object as () => Job,
  },
  methods: {
    showDetails(key: string) {
      this.$router.push({name: 'details', params: {id: key}})
    }
  }
});
</script>

<style lang="scss" scoped>
  .offerItem {
    list-style: none;
    background: #fff;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
  }
</style>