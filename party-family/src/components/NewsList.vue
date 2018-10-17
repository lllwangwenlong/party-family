<template>
  <div class="container">
    <div class="news-list" v-for="(item, index) in news" :key="index">
      <router-link to="/newsshow/newdetail" class="list-item">
        <div class="item-left">
          <img :src="item.pic">
        </div>
        <div class="item-right">
          <div class="item-title">
            {{item.title}}
          </div>
          <div class="item-detail">
            <div class="item-time">
              {{item.updateTime}}
            </div>
            <div class="look-nums">
              <img src="/static/imgs/眼睛.png">
              <p>{{item.count}}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        news: []
      }
    },
    methods: {
      getNewsData() {
        this.$store.commit('handleshow')
        console.log(this.$store.state.isLoading)
        this.$axios.get(`/news/newsList.do?type=${this.$route.query.type}`).then(res => {
          if(res.code == 1) {
            this.news = res.rows
            this.$store.commit('handleshow')
            console.log(this.$store.state.isLoading)
          }
        })
      }
    },
    created() {
      this.getNewsData()
    }
  }
</script>

<style scoped lang="scss">
  .news-list {
    border: 1px solid #f1f1f1;

    a {
      text-decoration: none;
    }
    .list-item {
      display: flex;
      width: 7.50rem;
      height: 1.60rem;
      background: #fff;
      margin: 0.20rem;
      box-sizing: border-box;

      .item-left {
        width: 1.60rem;
        height: 1.60rem;
        margin-right: 0.20rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .news-list .list-item .item-right {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 5.30rem;
    height: 1.60rem;

    .item-title {
      height: 0.96rem;
      font-size: 17px;
      color: #000;
    }

    .item-detail {
      display: flex;
      justify-content: space-between;

      .item-time {
        font-size: 12px;
        color: #333;
        font-weight: 400;
      }

      .look-nums {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #333;
        font-weight: 400;

        img {
          width: 0.36rem;
          height: 0.36rem;
        }
      }
    }
  }
</style>
