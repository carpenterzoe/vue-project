<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="Vue项目">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间 路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar 区域 -->
    <nav class="bar bar-tab">
			<router-link class="tab-item" to="/home">
				<!-- <span class="mui-icon mui-icon-home"></span> -->
        <span class="iconfont icon-xiazai45"></span>
				<span class="tab-label">首页</span>
			</router-link>
      
			<router-link class="tab-item" to="/member">
				<span class="iconfont icon-huiyuankuaijiezhifu01"></span>
				<span class="tab-label">会员</span>
			</router-link>
			<router-link class="tab-item" to="/shoppingcart">
				<span class="iconfont icon-gouwuche">
          <span id="badge"> {{ $store.getters.getAllCount }}</span>
        </span>
				<span class="tab-label">购物车</span>
			</router-link>
			<router-link class="tab-item" to="/search">
				<span class="iconfont icon-xiazai17"></span>
				<span class="tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag: false
    }
  },
  created() {
    this.flag = this.$route.path === '/home' ? false:true
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === '/home'){
        this.flag = false
      } else {
        this.flag = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.app-container{
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
  .mt-header{
    z-index: 99;
  }
  .bar.bar-tab{
    border-top: #ccc solid 1px;
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    background-color: #f3f0f0; 
    align-items: center;
    .tab-item{
      display: flex;
      flex-direction: column;      
      flex: 1;
      color: #999;
      .span{
        font-size: 12px;
        margin-top: 2px;
        margin-bottom: 2px;
      }
      .tab-label{
        font-size: 12px;
      }
      .iconfont{
        font-weight: bold;
        font-size: 21px;
        position: relative;
         #badge{
          background-color: red;
          display: inline-block;
          border-radius: 50%;
          width: 15px;
          line-height: 15px;
          font-size: 11px;
          color: white;
          font-weight: normal;
          position: absolute;
          top: -3px;
          right: 27px;
      }
    }
  }
    .router-link-exact-active{
      color: #007aff;;
    }
  }
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
