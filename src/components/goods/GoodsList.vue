<template>
  <div class="goods-list" >
    <!-- <router-link :to="'/home/goodsinfo/' + item.id" tag="div" class="goods-item" v-for="item in goodslist" :key="item.id">
      <img :src="item.img_url" alt="">
      <h1 class="title"> {{ item.title }} </h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </router-link> -->
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title"> {{ item.title }} </h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pageindex: 1,
      goodslist: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      this.$ajax.get('http://www.liulongbin.top:3005/api/getgoods?pageindex=' + this.pageindex )
      .then (result => {
        if(result.data.status === 0) {
          // this.goodslist = result.data.message;
          this.goodslist = this.goodslist.concat(result.data.message)
        }
      })
      .catch(error => {
        Toast('加载数据失败')
      })
    },
    getMore() {
      this.pageindex++
      this.getGoodsList()
    },
    goDetail(id) {
      this.$router.push("/home/goodsinfo/" + id)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      .p {
        margin: 0;
        padding: 5px;
      }
      .price {
        margin-bottom: 2px;
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          margin-left: 10px;
          font-size: 12px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-bottom: 2px;
      }
    }
  }
}
</style>
