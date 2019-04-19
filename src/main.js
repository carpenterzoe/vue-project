import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

import axios from 'axios'
Vue.prototype.$ajax = axios

import './lib/iconfont/iconfont.css'

import Vuex from 'vuex'
Vue.use(Vuex)

var cart_local = JSON.parse(localStorage.getItem('cart') || '[]')

var store = new Vuex.Store({
  
  state: {
    cart: cart_local  // 将购物车中商品的数据，用数组存储起来
  },
  mutations: {
    addToShoppingCart(state, goodsinfo){
      var flag = false
      // 点击加入购物车，把商品信息保存到 state 中的 cart 上
      state.cart.some(item => {
        if(item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      
      if(flag === false){
        state.cart.push(goodsinfo)
      }

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateGoodsInfo(state, goodsinfo){
      state.cart.some( item => {
        if(item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeFromCart(state, id){
      state.cart.some( (item, i) => {
        if (item.id == id) {
          state.cart.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateGoodsSelected(state, info){
      state.cart.some( item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    getAllCount(state){
      var c = 0;
      state.cart.forEach( item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state){
      var o = {}
      state.cart.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state){
      var o = {}
      state.cart.forEach( item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state){
      var o = {
        count: 0,
        amount: 0
      }
      state.cart.forEach( item => {
        if(item.selected){
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})

import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:MM:SS"){
  return moment(dataStr).format(pattern)
})

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
