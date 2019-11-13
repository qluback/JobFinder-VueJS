<template>
  <form @submit.prevent="searchOffers()">
    <input 
      type="text"
      placeholder="Lieu..."
      v-model="position"
    />
    <button>Rechercher</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(): { position: string } {
    return {
      position: '',
    }
  },
 methods: {
    searchOffers(): void {
      if(this.position.length) {
        this.$store.dispatch('jobs/search', { position: this.position })
        this.position = ''
      }
    }
  }
});
</script>

<style lang="scss" scoped>

</style>