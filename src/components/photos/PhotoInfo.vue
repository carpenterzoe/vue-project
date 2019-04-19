<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>
    
    <!-- 缩略图区域 -->
     <vue-preview
      :list="list"
      :thumbImageStyle="{width: '90px', height: '90px', margin: '8px', 'box-shadow':'0 0 8px #999'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
    />
    
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 评论子组件 -->
    <CommentBox :id="id"></CommentBox>
  </div>
</template>

<script>
import api from '../../api/api.js'
import comment from '../subcomponents/Comment.vue'

export default {
  data(){
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: []
    }
  },
  created() {
    this.getPhotoInfo()
    this.getThumbnail()
  },
  methods: {
    getPhotoInfo() {
      this.$ajax.get( api.getimageInfo + this.id )
      .then( result => {
        if(result.data.status === 0){
          this.photoinfo = result.data.message[0]
        }
      })
      .catch(error => {
        Toast('加载数据失败')
      })
    },
    getThumbnail(){
      this.$ajax.get( api.getthumimages + this.id)
      .then( result => {
        if(result.data.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.data.message.forEach( item => {
            item.w = 1200
            item.h = 900
          })
          // 把完整的数据保存到list中
          this.list = result.data.message
        }
      })
      .catch(error => {
        Toast('加载数据失败')
      })
    },
    closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }
  },
  components: {
    'CommentBox': comment
  }
}
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>
