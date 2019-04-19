<template>
  <div>
    <!-- 轮播图区域 -->
    <Swiper :swipeList="swipeList" :isfull="true"></Swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
  </div>
</template>

<script>
import api from '../../api/api.js'
import { Toast } from 'mint-ui'
import Swiper from '../subcomponents/Swiper.vue'
export default {
  data(){
    return {
      swipeList: [
        { 
          "id":1,
          "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556247713&di=ba8ee92d7f0a50a87d503deebb8ea89f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019cc058a653c9a801219c778d3f50.png" 
        },
        {
          "id":2,
          "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555652635328&di=ec520a7f423fa93f2fb893086490ca2b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0132aa58be2231a801219c77e8de4f.jpg%402o.jpg"
        },
        {
          "id":3,
          "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555653076619&di=89b9b6a3ddbdedab6c98c2db6dab7f90&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01398c5942618ca8012193a3f97976.jpg"
        }
      ]
    }
  },
  // created() {
  //   this.getSwipe()
  // },
  // methods: {
    // getSwipe(){
    //   this.$ajax.get(api.getlunbo)
    //   .then(result=> {    
    //     if(result.data.status === 0) {
    //       this.swipeList = result.data.message     
    //     }
    //   })
    //   .catch( error => {
    //       Toast('加载轮播图失败')
    //   })
    // }
  // },
  components: {
    Swiper
  }
}

</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
.mui-media-body{
  font-size: 13px;
}
</style>
