<template>
  <div class="header-wrap">
    <img src="/static/imgs/左箭头.png" @click="$router.go(-1)">
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      title() {
        return this.$route.meta.title
      }
    }
  }
</script>

<style scoped lang="scss">
  .header-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 7.50rem;
    height: 0.86rem;
    background: #c50206;
    display: flex;
    z-index: 998;

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

