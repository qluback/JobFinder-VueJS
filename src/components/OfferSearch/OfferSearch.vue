<template>
  <form @submit.prevent="searchOffers()" class="offerForm">
    <input 
      type="text"
      placeholder="Lieu..."
      v-model="position"
      class="offerForm__input"
    />
    <input 
      type="text"
      placeholder="Description..."
      v-model="description"
      class="offerForm__input"
    />
    <div class="containerCheckbox">
      <input
        id="fulltime"
        type="checkbox"
        placeholder="Description..."
        v-model="fullTime"
        class="containerCheckbox__input"
      />
      <label for="fulltime" class="containerCheckbox__label">Full-Time</label>
    </div>
    <button class="offerForm__submit">Rechercher</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(): { position: string, description: string, fullTime: boolean } {
    return {
      position: '',
      description: '',
      fullTime: false
    }
  },
 methods: {
    searchOffers(): void {
      if(this.position.length) {
        this.$store.dispatch('jobs/search', { 
          position: this.position,
          description: this.description,
          fullTime: this.fullTime,
        })
        // this.position = ''
        // this.description = ''
        // this.fullTime = false
      }
    }
  }
});
</script>

<style lang="scss" scoped>
  .offerForm {
    display: flex;
    flex-direction: column;
    font-size: 18px;

    &__input {
      margin-bottom: 10px;
      padding: 10px 0 10px 10px;
      font-size: 18px;
      border: none;
      border-top: 1px solid #3e64ff;
      border-bottom: 1px solid #3e64ff;
      color: #3e64ff;
    }

    &__submit {
      background: #3e64ff;
      font-weight: 700;
      border: none;
      color: #fff;
      padding: 15px;
      font-size: 18px;
    }
  }

  .containerCheckbox {
      display: flex;
      align-items: center;
      border: none;
      border-top: 1px solid #3e64ff;
      border-bottom: 1px solid #3e64ff;
      color: #3e64ff;
      padding: 10px 0 10px 10px;
      margin-bottom: 10px;

      &__input {
        margin-left: 0;
        width: 18px;
        height: 18px;
      }

      &__label {

      }
    }

  input::placeholder {
    color:#3e64ff;
  }
</style>