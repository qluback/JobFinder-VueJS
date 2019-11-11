import Vue from 'vue';
import Vuex from 'vuex';
import jobs from '@/store/modules/jobs';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    jobs,
  },
});
