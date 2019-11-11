<template>
  <li>
    <p>{{ job.id }}</p>
    <p>{{ job.type }}</p>
    <p>{{ job.title }}</p>
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
   job: Object as () => Job,
 }
});
</script>

<style lang="scss" scoped>

</style>