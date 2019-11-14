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
      showRecentJobs(context) {
        axios
          .get('https://github-jobs-proxy.appspot.com/positions?description=&location=')
          .then(response => {
            console.log(response.data)
            context.commit('showRecentJobs', response.data);
          })
      },
      search(context, payload: { position: string, description: string, fullTime: boolean }) {
        axios
          .get('https://github-jobs-proxy.appspot.com/positions?description=' + payload.description + '&location=' + payload.position)
          .then(response => {
            if(payload.fullTime) {
              let jobsFullTime = response.data.filter((job: any) => job.type == 'Full Time')
              console.log(jobsFullTime)
              context.commit('search', jobsFullTime);
            }
            else {
              console.log(response.data)
              context.commit('search', response.data);
            }
          })
      }
    }
};

export default jobs;