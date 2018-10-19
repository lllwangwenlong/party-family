<template>
  <div class="container">
    <Header></Header>
    <div class="user-view" @click="$router.push('/login')" v-if="userInfo.username">
      <div class="user-avatar">
        <img :src="userInfo.header" alt="">
      </div>
      <p>{{userInfo.username}}</p>
    </div>
    <div class="user-view" @click="$router.push('/login')" v-else>
      <div class="user-avatar">
        <img src="/static/imgs/bt_bg.png" alt="">
      </div>
      <p>你还没有登录 请先登录哦</p>
    </div>
    <div v-for="(item, index) in lists" :key="index">
      <router-link  class="user-list" :to="item.path">
        <img :src="item.url">
        <p class="item-desc">{{item.desc}}</p>
        <img class="item-right" src="/static/imgs/right.png">
      </router-link>
    </div>
    <Button type="danger" size="large" @click.native="handleLogin">退出登录</Button>
  </div>
</template>

<script>
    import { Button } from 'mint-ui';
    export default {
      components: {
        Button
      },
      data() {
        return {
          lists: [
            {
              path: '/userinfo',
              url: '/static/imgs/个人信息.png',
              desc: '个人信息'
            },
            {
              path: '/userinfo',
              url: '/static/imgs/量化积分icon.png',
              desc: '量化积分'
            },
            {
              path: '/userinfo',
              url: '/static/imgs/修改密码icon.png',
              desc: '修改密码'
            },
            {
              path: '/userinfo',
              url: '/static/imgs/icon3.png',
              desc: '党费缴纳'
            }
          ],
          userInfo: {},
        }
      },
      methods: {
        handleLogin() {
          sessionStorage.clear()
          // window.location.reload()
          this.$router.push('/login')
        }
      },
      created() {
        this.userInfo = {
          ...this.$store.state.userInfo,
        }
      }
    }
</script>

<style scoped lang="scss">
  .notice-header {
    width: 7.50rem;
    height: 0.86rem;
    background: #c50206;

    .header-title{
      height: 0.86rem;
      line-height: 0.86rem;
      font-size: 18px;
      text-align: center;
      color: #fff;
    }
  }
  .user-view {
    width: 7.50rem;
    height: 2.80rem;
    background: #c50206;

    .user-avatar {
      width: 7.50rem;
      height: 2.04rem;
      text-align: center;

      img {
        margin-top: 0.79rem;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
      }
    }

    p {
      margin-top: 0.10rem;
      font-size: 12px;
      color: #fff;
      text-align: center;
    }
  }
  .user-list {
    position: relative;
    display: flex;
    width: 7.5rem;
    height: 1.08rem;
    background: #fff;
    text-decoration: none;
    border-bottom: 1px solid #ccc;

    img {
      width: 0.64rem;
      height: 0.64rem;
      margin: 0.22rem;
    }

    p {
      font-size: 16px;
      color: #333;
      line-height: 1.08rem;
      font-weight: 400;
    }

    .item-right {
      width: 0.14rem;
      height: 0.28rem;
      margin: 0.40rem 0;
      position: absolute;
      right: 0.32rem;
    }
  }
  .mint-button {
    width: 7.1rem;
    height: 0.94rem;
    margin: 0.8rem auto;
    font-size: 16px;

  }
</style>
