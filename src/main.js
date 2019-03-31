import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import './lib/mui/css/mui.min.css'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import App from './App.vue'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
