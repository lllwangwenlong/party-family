<template>
  <div class="container">
    <Header></Header>
    <div class="banner">
      <img src="/static/imgs/timg.png">
    </div>
    <div class="information-wrap">
      <ul class="information-content">
        <li v-for="(item, index) in lists" :key="index">
          <router-link :to="{path: item.path, query: {type: index}}">
            <img :src="item.imgUrl">
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        lists: [
          {
            path: '',
            imgUrl: '/static/imgs/icon1.png',
            title: '政治学习'
          },
          {
            path: '',
            imgUrl: '/static/imgs/icon2.png',
            title: '思想汇报'
          },
          {
            path: '',
            imgUrl: '/static/imgs/icon3.png',
            title: '心得总结'
          },
          {
            path: '',
            imgUrl: '/static/imgs/icon4.png',
            title: '民主评议'
          },
          {
            path: '',
            imgUrl: '/static/imgs/icon5.png',
            title: '流动党员找组织'
          },
        ],
      }
    },
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
  .banner {
    width: 100%;
    height: 3.723rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .information-wrap {
    width: 7.50rem;
    height: 3.80rem;

    .information-content {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
    }

    .information-content li {
      display: block;
      width: 2.50rem;
      height: 2.90rem;

      a {
        text-decoration: none;
      }

      p {
        font-size: 14px;
        color: #444;
        font-weight: 400;
        text-align: center;
      }

      img {
        display: block;
        margin: 0.4rem 0.4rem 0.2rem;
        /*<!--position: absolute;-->*/
        /*<!--top: 50%;-->*/
        /*<!--left: 50%;-->*/
        /*<!--transform: translate(-50%, -50%);-->*/
        width: 1.70rem;
        height: 1.70rem;
      }
    }
  }
</style>
