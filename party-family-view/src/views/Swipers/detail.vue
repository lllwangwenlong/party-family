<template>
  <div>
    <el-card>
      <div slot="header">
        轮播图详情
      </div>
      <div class="detail-content">
        <div class="user-item">
          <p>轮播图头图:</p>
          <img :src="swiperData.headerImg">
        </div>
        <div class="user-item">
          <span>标题:</span><span>{{swiperData.title}}</span>
        </div>
        <div class="user-item">
          <span>对应新闻:</span><span>{{swiperData.newsId.title}}</span>
        </div>
        <div class="user-item">
          <span>排序:</span><span>{{swiperData.sort}}</span>
        </div>
        <div class="user-item">
          <span>是否显示:</span><span v-html="swiperData.status"></span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperData: {
          newsId:{
            title: ''
          }
        }
      }
    },
    methods: {
      getData() {
        this.$axios.get(`/admin/swiper/${this.$route.query.id}`).then(res => {
          if(res.code == 200) {
            this.swiperData = res.data
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
