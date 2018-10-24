<template>
    <div class="container">
      <Header></Header>
      <div class="views-content" v-for="(item, index) in views" :key="index">
        <router-link :to="{ path: '/newsshow/newdetail', query: {newsId: item.newsId}}" class="list-item">
          <div class="notice-img">
            <img src="/static/imgs/iconfont_gonggaotongzhi.png">
          </div>
          <div class="views-item">
            <div class="item-title">
              {{item.title}}
            </div>
            <div class="item-updateTime">
              {{item.updateTime}}
            </div>
          </div>
        </router-link>
      </div>
      <div class="no-views">
        没有数据了
      </div>
    </div>
</template>

<script>
    export default {
      data() {
          return {
            views: []
          }
        },
      methods: {
          getData() {
            this.$axios.get(`/news/newsList.do?type=${this.$route.meta.type}`).then(res => {
              if(res.code == 1) {
                this.views = res.rows
                console.log(this.views)
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
.views-content {
  margin-top: 0.86rem;

  a {
    text-decoration: none;
  }

  .list-item {
    width: 7.50rem;
    height: 1.94rem;
    border-bottom: 1px solid #f1f1f1;
    padding: 0.20rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .notice-img {
      position: relative;
      width: 1.42rem;
      height: 1.52rem;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.70rem;
        height: 0.70rem;
      }
    }

    .views-item {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 0.10rem;
      width: 5.48rem;
      height: 1.52rem;

      .item-title {
        width: 5.48rem;
        height: 0.80rem;
        font-size: 15px;
        color: #333;
        font-weight: 400;
      }

      .item-updateTime {
        width: 5.48rem;
        height: 0.40rem;
        font-size: 12px;
        color: #333;
        font-weight: 400;
      }
    }
  }
}

.no-views {
  width: 7.50rem;
  height: 0.80rem;
  line-height: 0.80rem;
  text-align: center;
  font-size: 12px;
  color: #333;
  font-weight: 400;
}
</style>
