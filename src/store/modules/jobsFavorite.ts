import { Module } from 'vuex';
import JobFavorite from '@/models/jobFavorite';

const jobsFavorite: Module<{ jobsFavorite: Array<JobFavorite>}, any> = {
  namespaced: true,
  state: {
    jobsFavorite: [],
  },
  mutations: {
    setFavoriteJob(state, payload) {
      console.log(payload)
      state.jobsFavorite.push({id: payload});
      console.log(state.jobsFavorite)
    },
    removeFavoriteJob(state, payload) {
      state.jobsFavorite = state.jobsFavorite.filter((jobId) => jobId.id != payload);
      console.log(state.jobsFavorite)
    },
  },
  actions: {
    setFavoriteJob(context, payload: { id: string }) {
      console.log('action ' + payload.id)
      context.commit('setFavoriteJob', payload.id);
    },
    removeFavoriteJob(context, payload: { id: string }) {
      context.commit('removeFavoriteJob', payload.id);
    }
  }
}

export default jobsFavorite;