// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Header from '@/components/Header'
import axios from './utils/index'
import store from './store/index'

import { Loadmore } from 'mint-ui';

Vue.component('mt-loadmore', Loadmore);


Vue.prototype.$axios = axios
Vue.component('Header', Header)
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
