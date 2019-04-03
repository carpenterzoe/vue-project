<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要发表的内容（最多120字）" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

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
import { Toast } from 'mint-ui'
export default {
  data(){
    return {
      pageIndex: 1,
      comments: []
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments(){
      this.$http.get('api/getcomments/'+ this.id + '?pageindex=' + this.pageIndex)
      .then(result => {
        if (result.body.status === 0){
          // this.comments = result.body.message
          // 获取新的评论数据时，不是新的数据覆盖旧数据，而是新旧数据拼接。
          this.comments = this.comments.concat(result.body.message)
        }else{
          Toast('加载评论失败')
        }
      })
    },
    getMore(){
      this.pageIndex++
      this.getComments()
    }
  },
  props: ["id"]
}
</script>

<style lang="scss" scoped>
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
</style>
