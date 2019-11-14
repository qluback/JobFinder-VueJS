import Job from '@/models/job';
import { Module } from 'vuex';
import axios from 'axios';

const jobs: Module<{ jobs: Array<Job[]>}, any> = {
  namespaced: true,
  state: {
    jobs: [],
  },
  getters: {
  },
  mutations: {
    search(state, payload) {
      state.jobs = payload
    },
    showRecentJobs(state, payload) {
      state.jobs = payload
    }
  },
  actions: {
    showRecentJobs(context) { // Get list of 50 newest jobs on homepage
      axios
        .get('https://github-jobs-proxy.appspot.com/positions?description=&location=')
        .then(response => {
          context.commit('showRecentJobs', response.data);
        })
    },
    search(context, payload: { position: string, description: string, fullTime: boolean }) { // Get list of jobs depending on criterias (unable to get full-time jobs with proxy API)
      axios
        .get('https://github-jobs-proxy.appspot.com/positions?description=' + payload.description + '&location=' + payload.position)
        .then(response => {
          if(payload.fullTime) { // Test if user wants only full-time jobs
            let jobsFullTime = response.data.filter((job: any) => job.type == 'Full Time')
            context.commit('search', jobsFullTime);
          }
          else {

            context.commit('search', response.data);
          }
        })
    },
  }
};

export default jobs;