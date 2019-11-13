<template>
 <div>
  {{ jobs[$route.params.id].title }}
 </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState('jobs', ['jobs'])
  }
});
</script>

<style lang="scss" scoped>

</style>