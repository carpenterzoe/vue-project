import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './lib/mui/css/mui.min.css'
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.min.css'

Vue.config.productionTip = false
Vue.component(Header.name, Header) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
