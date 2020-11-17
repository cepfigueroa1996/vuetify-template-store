import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    add:[],
    count:0,
    search:'',
  },
  mutations: {
    cart(state, n){
      state.add.push(n);
      state.count++;
    },
    remove(state, n) {
      state.add.splice(n, 1);
      state.count--;
    }
  },
  actions: {
  },
  modules: {
  }
})
