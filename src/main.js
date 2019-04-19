import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

import axios from 'axios'
Vue.prototype.$ajax = axios

import store from './store/index'

import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:MM:SS"){
  return moment(dataStr).format(pattern)
})

import './lib/iconfont/iconfont.css'
import './lib/mui/css/mui.min.css' 
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'

Vue.use(MintUI)

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

Vue.config.productionTip = false

import App from './App.vue'

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
