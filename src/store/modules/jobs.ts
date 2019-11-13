import Job from '@/models/job';
import { Module } from 'vuex';
import axios from 'axios';

function getJobsFromApi(): Array<any> {
  let tab: Array<Promise<Object>> = []
  axios.get('https://github-jobs-proxy.appspot.com/positions?description=javascript&location=new+york').then(response => tab.push(response.data))
  console.log(tab)
  return tab;
}

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
        console.log(state.jobs)
      }
    },
    actions: {
      search(context, payload: { position: string }) {
        axios
          .get('https://github-jobs-proxy.appspot.com/positions?description=javascript&location=' + payload.position)
          .then(response => {
            console.log(response.data)
            context.commit('search', response.data);
          })
      }
    }
};

export default jobs;