<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要发表的内容（最多120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="comment-list">
      <div class="comment-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="comment-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;
          发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="comment-body">
          {{ item.content === 'undefined'? '此用户很懒，什么都没说' : item.content }}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import api from '../../api/api.js'
import { Toast } from 'mint-ui'
export default {
  data(){
    return {
      pageIndex: 1,
      comments: [],
      msg: ''
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments(){
      this.$ajax.get( api.getcomments + this.id + '?pageindex=' + this.pageIndex)
      .then(result => {
        if (result.data.status === 0){
          // this.comments = result.data.message
          // 获取新的评论数据时，不是新的数据覆盖旧数据，而是新旧数据拼接。
          this.comments = this.comments.concat(result.data.message)
        }
      })
      .catch( error => {
        Toast('加载数据失败')
      })
    },
    getMore(){
      this.pageIndex++
      this.getComments()
    },
    postComment() {
      if (this.msg.trim().length === 0){
        return Toast('评论内容不能为空！')
      }
      this.$ajax.post( api.postcomment + this.$route.params.id, { 
        content: this.msg.trim() }) 
        .then ( result => {
          if (result.data.status === 0) {
            var cmt = {
              user_name: '匿名用户',
              add_time: Date.now(), 
              content: this.msg.trim()}
            this.comments.unshift(cmt)
            this.msg = ''
          }
        })
        .catch(error => {
          Toast('加载数据失败')
        })
    }
  },
  props: ["id"]
}
</script>

<style lang="scss" scoped>
.comment-container{
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .comment-list {
    margin: 5px 0;
    .comment-item {
      font-size: 13px;
      .comment-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .comment-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}

</style>
