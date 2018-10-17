<template>
  <div class="container">
    <div class="header-wrap">
      <div class="header-wrap-logo">
        <img src="/static/imgs/logo.png">
      </div>
      <a href="#" class="header-wrap-layout" @click="$router.push('/login')">登录</a>
    </div>
    <swiper class="swiper-wrap"
            :options="swiperOption"
            ref="mySwiper"
    >
      <swiper-slide v-for="(item,index) in banner"
                    :key="index">
        <div class="banner-item" @click="handleChange(item.url)">
          <img :src="item.imgUrl">
          <div class="swiper-desc">
            <h1 class="desc-content">{{item.title}}</h1>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="information-wrap">
      <ul class="information-content">
        <li v-for="(item, index) in lists" :key="index">
          <router-link :to="{path: item.path, query: {type: index, title: item.title}}">
            <img :src="item.imgUrl">
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="img-wrap">
      <img src="/static/imgs/banner01.png" alt="">
    </div>
    <div class="news-wrap">
      <div class="news-left">
      </div>
      <div class="news-right">
        <div class="row">
          <router-link to="/"></router-link>
          <router-link to="/"></router-link>
        </div>
        <div class="row">
          <router-link to="/"></router-link>
          <router-link to="/"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide,
    },
    data() {
      return {
        lists: [
          {
            path: '/newsshow',
            imgUrl: '/static/imgs/icon_01.png',
            title: '信工新闻眼'
          },
          {
            path: '/moblife',
            imgUrl: '/static/imgs/icon_03.png',
            title: '党员与组织'
          },
          {
            imgUrl: '/static/imgs/icon_05.png',
            title: '党员云互动'
          },
          {
            path: '/newsshow',
            imgUrl: '/static/imgs/icon_04.png',
            title: '党建一点通'
          },
          {
            path: '/newsshow',
            imgUrl: '/static/imgs/icon_06.png',
            title: '党员风采录'
          },
          {
            imgUrl: '/static/imgs/icon_02.png',
            title: '党史上的今天'
          },
        ],
        banner: [],
        swiperOption: {
          autoplay: true,
          loop: 1,
          pagination: {
            el: '.swiper-pagination'
          },
        }
      }
    },
    methods: {
      getSwiperData() {
        this.$axios.get('/carousel/carouselList.do').then(res => {
          if(res.code == 1) {
            this.banner = res.rows
          }
        })
      },
      handleChange(id) {
        this.$router.push({path: '/swiperdetail', query:{ newId: id}})
      }
    },
    created() {
      this.getSwiperData()
    }
  }
</script>

<style lang="scss">
  .header-wrap {
    position: relative;
    display: flex;
    width: 7.50rem;
    height: 1.14rem;
    background-color: #c50206;

    .header-wrap-logo {
      width: 2.60rem;
      height: 0.70rem;
      margin: 0.22rem 0.48rem;
      box-sizing: border-box;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .header-wrap-layout {
      position: absolute;
      top: 0.40rem;
      right: 0.45rem;
      bottom: 0.40rem;
      display: block;
      font-size: 17px;
      color: #fff;
      text-decoration: none;
    }
  }
  .swiper-wrap {
    position: relative;
    width: 7.50rem;
    height: 3.82rem;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .swiper-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 11;
      width: 100%;
      height: 0.90rem;
      background: rgba(0, 0, 0, .2);

      .desc-content {
        margin: 0.32rem;
        font-size: 12px;
        color: #fff;
      }
    }
  }
  .information-wrap {
    width: 7.50rem;
    height: 3.80rem;
    background: url("/static/imgs/bt_bg.png");
    -webkit-background-size: 100%;
    background-size: 100%;

    .information-content {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
    }

    .information-content li {
      display: block;
      width: 2.50rem;
      height: 1.90rem;

      a {
        text-decoration: none;
      }

      p {
        font-size: 12px;
        color: #444;
        font-weight: 400;
        text-align: center;
      }

      img {
        display: block;
        margin: 0.2rem 0.75rem;
        /*<!--position: absolute;-->*/
        /*<!--top: 50%;-->*/
        /*<!--left: 50%;-->*/
        /*<!--transform: translate(-50%, -50%);-->*/
        width: 1.00rem;
        height: 1.00rem;
      }
    }
  }
  .img-wrap {
    width: 7.50rem;
    height: 1.72rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .news-wrap {
    margin-bottom: 1.08rem;
    display: flex;
    width: 7.50rem;
    height: 3.15rem;
    background: url("/static/imgs/tese.png");
    -webkit-background-size: 100%;
    background-size: 100%;

    .news-left {
      flex: 1;
    }

    .news-right {
      flex: 2;

      .row {
        display: flex;
        height: 50%;

        a {
          flex: 1;
        }
      }
    }
  }
</style>
