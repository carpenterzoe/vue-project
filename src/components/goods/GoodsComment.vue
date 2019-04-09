<template>
  <div>
    <CommentBox :id="$route.params.id"></CommentBox>  
  </div>
</template>

<script>
import CommentBox from '../subcomponents/Comment.vue'
export default {
  components: {
    CommentBox
  }
}
</script>

<style lang="scss" scoped>

</style>
