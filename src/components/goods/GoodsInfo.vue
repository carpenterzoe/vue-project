<template>
  <div class="goodsinfo-container">

    <transition
      @beforeEnter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swiper :swipeList="swipeList" :isfull="false"></Swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;
            销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>购买数量：<NumBox @getcount="getSelectedCount"
          :max="goodsinfo.stock_quantity"></NumBox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }} 件</p>
          <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../subcomponents/Swiper.vue'
import NumBox from '../subcomponents/NumBox.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      swipeList: [],
      goodsinfo: {}, // 获取到的商品信息
      ballFlag: false, // 标识符，控制小球显示隐藏
      selectedCount: 1 // 保存用户选中的商品数量，默认选中1
    }
  },
  created() {
    this.getSwipe()
    this.getGoodsInfo()
  },
  methods: {
    getSwipe() {
      this.$http.get('api/getthumimages/' + this.id ).then(result => {
        if ( result.body.status === 0 ) {
          // 循环轮播图数组的每一项，为 item 添加 img 属性
          // 因为轮播图组件中，只认识item.img 不认识 item.src
          result.body.message.forEach(item => {
            item.img = item.src
          })
          this.swipeList = result.body.message
          //console.log(result.body.message);
        }
      })
    },
    getGoodsInfo(){
      this.$http.get( 'api/goods/getinfo/' + this.id ).then( result => {
        if( result.body.status === 0 ){
          this.goodsinfo = result.body.message[0]
        }
      })
    },
    goDesc(id){
      this.$router.push({ name: 'goodsdesc', params: {id} })
    },
    goComment(id){
      this.$router.push({ name: 'goodscomment', params: {id} })
    },
    addToCart(){
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el){
      el.style.transform = "translate(0, 0)"
    },
    enter(el, done){
      el.offsetWidth;
      
      const ballPostion = this.$refs.ball.getBoundingClientRect()
      const badgePostion = document.getElementById('badge').getBoundingClientRect()
      const xDist = badgePostion.left - ballPostion.left
      const yDist = badgePostion.top - ballPostion.top

      el.style.transform = `translate(${xDist}px, ${yDist}px)`
      el.style.transition = "all .5s cubic-bezier(.4, -0.3, 1, .68)"
      done()
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
    },
    getSelectedCount(count){
      this.selectedCount = count
    }
  },
  components: {
    Swiper,
    NumBox
  }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container{
  background-color: #eee;
  overflow: hidden;

  .now_price{
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer{
    display: block;
    button{
      margin: 10px 0;
    }
  }
  .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    background-color: red;
    top: 410px;
    left: 147px;
  }
}
</style>
