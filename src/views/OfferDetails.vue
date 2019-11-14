<template>
 <main class="offerDetails">
   <div class="offerDetails__infos">
    <img v-bind:src="jobs[$route.params.id].company_logo" class="offerDetails__logo" />
    <a class="offerDetails__company" v-if="jobs[$route.params.id].title != 'http:'" v-bind:href="jobs[$route.params.id].title" target='_blank'>{{ jobs[$route.params.id].company }}</a>
    <p class="offerDetails__company" v-else>{{ jobs[$route.params.id].company }}</p>
    <h1 class="offerDetails__title">{{ jobs[$route.params.id].title }}</h1>
    <div class="offerDetails__typeLocRow">
      <p class="offerDetails__typeLocRow__text">{{ jobs[$route.params.id].type }}</p>
      <p class="offerDetails__typeLocRow__text">{{ jobs[$route.params.id].location }}</p>
      <p class="offerDetails__typeLocRow__text">{{ jobs[$route.params.id].created_at }}</p>
    </div>
  </div>
  <div class="offerDetails__descrContainer">
    <h2 class="offerDetails__descrContainer__title">Description de l'offre</h2>
    <p v-html="jobs[$route.params.id].description"></p>
  </div>
 </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import moment from 'moment';

export default Vue.extend({
  computed: {
    ...mapState('jobs', ['jobs'])
  },
});
</script>

<style lang="scss" scoped>
  .offerDetails {
    background: #fff;
    padding: 20px 0;
    font-size: 18px;

    &__infos {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__logo {
      width: 80%;
      margin-bottom: 20px;
    }

    &__company {
      font-weight: 500;
    }

    &__title {
      text-align: center;
      font-size: 2rem;
    }

    &__typeLocRow {
      display: flex;
      flex-direction: column;

      &__text {
        margin: 5px 10px;
      }
    }

    &__descrContainer {
      padding: 0 10px;

      &__title {
        color: #3e64ff;
      }
    }
  }

</style>