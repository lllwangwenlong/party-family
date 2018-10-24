<template>
  <div class="container">
    <div class="news-list" v-for="(item, index) in news" :key="index">
      <router-link :to="{ path: '/newsshow/newdetail', query: {newsId: item.newsId}}">
        <img :src="item.pic">
        <p class="item-title">{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui'
  export default {
    components: {

    },
    data() {
      return {
        news: [],
        pn: {
          page: 1
        }
      }
    },
    methods: {
      getNewsData(pn) {
        Indicator.open({
          text: '正在加载',
          spinnerType: 'snake'
        });
        this.$axios.get(`/news/newsList.do?type=${this.$route.query.type}`,this.pn).then(res => {
          if(res.code == 1) {
            Indicator.close();
            this.news = res.rows
          }
        })
      },
    },
    created() {
      this.getNewsData()
    }
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 7.5rem;
  }

  .news-list {
    width: 50%;
    padding: 0.32rem;
    box-sizing: border-box;

    a {
      display: block;
      text-decoration: none;
    }

    img {
      width: 3.11rem;
      height: 2.33rem;
    }

    p {
      font-size: 13px;
      line-height: 1.5;
      color: #333;
      font-weight: 400;
      overflow: hidden;
      -webkit-line-clamp: 2;
      /*text-overflow: ellipsis;*/
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
</style>
