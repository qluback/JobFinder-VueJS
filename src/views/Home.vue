<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <offer-list></offer-list>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import OfferList from '@/components/OfferList/OfferList.vue'

export default {
  name: 'home',
  components: {
    OfferList
  }
}
</script>
