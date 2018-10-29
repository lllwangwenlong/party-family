// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css' //引入初始化样式
import ElementUI from 'element-ui'; //引入elementui
import 'element-ui/lib/theme-chalk/index.css';//引入elementui样式
import axios from './utils/index'
import './style/index.scss'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$axios = axios //全局导入axios
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
