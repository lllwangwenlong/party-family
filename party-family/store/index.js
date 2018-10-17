import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading:false
  },
  mutations:{
    handleshow (state) {
      state.isLoading = !state.isLoading
    }
  },
})

export default store
