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
      jobs: getJobsFromApi(),
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        
    }
};

export default jobs;