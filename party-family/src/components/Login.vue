<template>
    <div class="container">
      <Header></Header>
      <div class="login-content">
        <div class="login-logo">
          <img src="/static/imgs/logo.png">
        </div>
        <div class="login-input">
          <input v-model="userInfo.username" type="text" placeholder="请输入身份证号">
          <input v-model="userInfo.password "type="password" placeholder="请输入密码">
          <button @click="this.handleLogin">登录</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          userInfo: {
            username: '',
            password: ''
          }
        }
      },
      methods: {
        handleLogin() {
          console.log(this.userInfo)
          this.$axios.post('/user/userLogin.do',this.userInfo).then(res => {
            console.log(res)
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.container {
  width: 7.50rem;
  height: 100vh;
  background: #c50206;

  .login-content {
    padding: 0.75rem;

    .login-logo {
      width: 4.06rem;
      height: 0.98rem;
      margin: 0 auto;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .login-input {
      display: flex;
      flex-direction: column;
      margin-top: 0.75rem;

      input {
        width: 5.99rem;
        height: 0.82rem;
        margin-bottom: 0.20rem;
        border-radius: 4px;
        border: 1px solid #fcf325;
        background: #c50206;
        font-size: 14px;
        color: #fff;
      }

      button {
        width: 6.00rem;
        height: 0.82rem;
        background: #e3574f;
        border: none;
        font-size: 14px;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
}

</style>
