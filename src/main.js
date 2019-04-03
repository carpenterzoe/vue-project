import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:MM:SS"){
  return moment(dataStr).format(pattern)
})

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005/'

import './lib/mui/css/mui.min.css' 
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

import App from './App.vue'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
