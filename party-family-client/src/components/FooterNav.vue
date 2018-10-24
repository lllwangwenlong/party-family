<template>
  <div class="footer-nav">
    <router-link to="/" class="nav-item" :class="{active: $route.name === 'homePage'}">
      <div class="item-img item-img-home"></div>
      <div class="item-title">
        首页
      </div>
    </router-link>
    <router-link to="/notice" class="nav-item">
      <div class="item-img item-img-notice"></div>
      <div class="item-title">
        通知
      </div>
    </router-link>
    <router-link to="/personal" class="nav-item">
      <div class="item-img item-img-personal"></div>
      <div class="item-title">
        个人中心
      </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            navData: [
              {
                path: '/',
                title: '首页',
                url: '/static/imgs/党_grey.png',
                selectUrl: '/static/imgs/党_red.png'
              },
              {
                path: '/notice',
                title: '通知',
                url: '/static/imgs/党_grey.png',
                selectUrl: '/static/imgs/党_red.png'
              },
              {
                path: '/personal',
                title: '个人中心',
                url: '/static/imgs/党_grey.png',
                selectUrl: '/static/imgs/党_red.png'
              }
            ]
          }
        }
    }
</script>

<style scoped lang="scss">
.footer-nav {
  width: 7.5rem;
  height: 1.08rem;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  font-size: 14px;
  background: #fff;

  a {
    color: #333;
    font-weight: 400;
    text-decoration: none;
  }

  .nav-item {
    flex: 1;
    text-align: center;
    border-top: 3px solid #fff;

    .item-img{
      margin: 0.10rem auto 0;
      width: 0.50rem;
      height: 0.50rem;

    }

    .item-img-home {
      background: url("/static/imgs/党_grey.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
    }

    .item-img-notice {
      background: url("/static/imgs/消息_grey.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
    }

    .item-img-personal {
      background: url("/static/imgs/会员_grey.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
    }

  }

  .active {
    border-top: 3px solid #c7000a;
    color: #c7000a;
    .item-img-home {
      background: url("/static/imgs/党_red.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
    }
  }

  .nav-item:hover {
    color: #c7000a;
    border-top: 3px solid #c7000a;

    .item-img-home {
      background: url("/static/imgs/党_red.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
    }

    .item-img-notice {
      background: url("/static/imgs/消息_red.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
    }

    .item-img-personal {
      background: url("/static/imgs/会员_red.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
    }
  }
}
</style>
