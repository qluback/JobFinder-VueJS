import { Module } from 'vuex';
import JobFavorite from '@/models/jobFavorite';

const jobsFavorite: Module<{ jobsFavorite: Array<JobFavorite>}, any> = {
  namespaced: true,
  state: {
    jobsFavorite: [],
  },
  mutations: {
    setFavoriteJob(state, payload) {
      state.jobsFavorite.push({id: payload});
    },
    removeFavoriteJob(state, payload) {
      state.jobsFavorite = state.jobsFavorite.filter((jobId) => jobId.id != payload);
    },
  },
  actions: {
    setFavoriteJob(context, payload: { id: string }) {
      context.commit('setFavoriteJob', payload.id);
    },
    removeFavoriteJob(context, payload: { id: string }) {
      context.commit('removeFavoriteJob', payload.id);
    }
  }
}

export default jobsFavorite;