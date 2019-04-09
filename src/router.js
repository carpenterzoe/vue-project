import VueRouter from 'vue-router'

import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shoppingcart from './components/tabbar/Shoppingcart.vue'
import Search from './components/tabbar/Search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/Shoppingcart', component: Shoppingcart },
    { path: '/search', component: Search },
    { path: '/home/newslist', component: NewsList },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' },
    { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
    { path: '/home/photoinfo/:id', component: PhotoInfo }
  ],
  linkActiveClass: 'mui-active'
})
export default router
