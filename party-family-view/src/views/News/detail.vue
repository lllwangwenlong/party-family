<template>
  <div>
    <el-card>
      <div slot="header">
        新闻详情
      </div>
      <div class="detail-content">
        <div class="user-item">
          <p>新闻头图:</p>
          <img :src="newData.headerImg">
        </div>
        <div class="user-item">
          <span>标题:</span><span>{{newData.title}}</span>
        </div>
        <div class="user-item">
          <span>类型:</span><span>{{newData.type.title}}</span>
        </div>
        <div class="user-item">
          <span>查看人数:</span><span>{{newData.look_num}}</span>
        </div>
        <div class="user-item">
          <span>新闻内容:</span><span v-html="newData.content"></span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newData: {
          type:{
            title:''
          }
        }
      }
    },
    methods: {
      getData() {
        this.$axios.get(`/admin/news/${this.$route.query.id}`).then(res => {
          if(res.code == 200) {
            this.newData = res.data
          }
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .detail-content {
    width: 960px;
    margin: 0 auto;
    padding: 40px;
    box-sizing: border-box;
    border: 1px solid #ddd;

    .user-item {


      span {
        margin-right: 10px;
        line-height: 2;
      }

      img {
        display: block;
        margin-left: 65px;
        width: 500px;
        height: 200px;
      }
    }
  }
</style>
