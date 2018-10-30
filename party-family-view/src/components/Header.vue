<template>
  <div class="header">
    党建E家后台管理系统
    <img :src="userInfo.avatar">
  </div>
</template>

<script>
    export default {
      data() {
        return {
          userInfo: {}
        }
      },
      created() {
        this.userInfo = this.$store.state.userInfo
      }
    }
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 50px;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  background-color: #304156;
  border-left: -1px;
  line-height: 50px;
  text-align: center;
  z-index:996;

  img {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>
