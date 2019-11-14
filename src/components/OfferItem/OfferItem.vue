<template>
  <li class="offerItem">
    <img v-if="job.company_logo" v-bind:src="job.company_logo" class="offerItem__logo" />
    <h2 class="offerItem__title">{{ job.title }}</h2>
    <p>{{ job.type }}</p>
    <a v-if="job.company_url != 'http:'" v-bind:href="job.company_url" target='_blank'>{{ job.company }}</a>
    <p v-else>{{ job.company }}</p>
    <p>{{ job.location }}</p>
    <p>{{ job.created_at }}</p>
    <div class="containerButtonShowJob">
      <a @click="showDetails(idOffer)" class="containerButtonShowJob__button">Voir le job</a>
    </div>
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
    padding: 20px;

    &__logo {
      max-height: 60px;
      display: flex;
      margin: auto;
    }

    &__title {
      text-align: center;
    }
  }

  .containerButtonShowJob {
    display:flex;
    justify-content: center;
    margin-top: 30px;

    &__button {
      background: #ff3e75;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      color: #fff;
      padding: 15px;
      font-size: 18px;
      font-family: 'Montserrat';
      cursor: pointer;
      width: 50%;
      text-align: center;
    }
  }
</style>