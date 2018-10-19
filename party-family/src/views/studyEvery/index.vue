<template>
  <div class="container">
    <div class="header-wrap">
      <img src="/static/imgs/左箭头.png" @click="$router.go(-1)">
      <p>{{this.title}}</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    created() {
      this.title = this.$route.meta.title
    }
  }
</script>

<style scoped lang="scss">
  .header-wrap {
    width: 7.50rem;
    height: 0.86rem;
    background: #c50206;
    display: flex;

    img {
      width: 0.72rem;
      height: 0.66rem;
      margin-top: 0.13rem;
    }

    p {
      width: 6.06rem;
      height: 100%;
      line-height: 0.86rem;
      font-size: 18px;
      color: #fff;
      margin-right: 0.72rem;
      text-align: center;
    }
  }
</style>
