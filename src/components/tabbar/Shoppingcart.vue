<template>
  <div class="shoppingCart-container">
    <div class="goods-list">

      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
            @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p class="priceNumbox">
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
              </p>
            </div>
					</div>
				</div>
			</div>

      <!-- 结算区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner checkout">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span>
              件，总价<span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
            </div>
            <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import api from '../../api/api.js'
import numbox from '../subcomponents/NumberBox_Cart.vue'

export default {
  data(){
    return {
      goodslist: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList(){
      var idArr = []
      this.$store.state.cart.forEach( item => idArr.push(item.id))
      if (idArr.length <=0) return
      this.$ajax.get( api.getshopcarlist + idArr.join(','))
      .then( result => {
        if(result.data.status === 0) {
          this.goodslist = result.data.message
        }
      })
      .catch(error => {
        Toast('加载数据失败')
      })
    },
    remove(id, index){
      this.goodslist.splice(index, 1)
      this.$store.commit("removeFromCart", id)
    },
    selectedChanged(id, val){
      this.$store.commit('updateGoodsSelected', { id, selected: val })
    }
  },
  components: {
    numbox
  }
}
</script>

<style lang="scss" scoped>
.shoppingCart-container{
  background-color: #eee;
  overflow: hidden;
  .goods-list{
    .mui-card-content-inner{
      display: flex;
      align-items: center;
    }
    img{
      width: 60px;
      height: 60px;
    }
    h1{
      font-size: 13px;
    }
    .info{
      .priceNumbox{
        margin-top: 10px;
      }
      .price{
        color: red;
        font-weight: bold;
      }
    }
  }
  .checkout{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
