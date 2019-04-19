<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
import api from '../../api/api.js'
export default {
  data(){
    return {
      info: {}
    }
  },
  created() {
    this.getGoodsDesc()
  },
  methods: {
    getGoodsDesc() {
      this.$ajax.get( api.getdesc + this.$route.params.id )
      .then(result => {
        if(result.data.status === 0) {
          this.info = result.data.message[0]
        }
      })
      .catch(error => {
        Toast('加载数据失败')
      })
    }
  },
}
</script>

<style lang="scss">
.goodsdesc-container{
  padding: 4px;
  h3{
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
