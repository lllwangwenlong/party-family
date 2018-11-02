<template>
    <div class="container">
      <Header></Header>
      <div class="login-content">
        <div class="login-logo">
          <img src="/static/imgs/logo.png">
        </div>
        <div class="login-input">
          <input v-model="userInfo.id_card" type="text" placeholder="请输入身份证号">
          <input v-model="userInfo.password "type="password" placeholder="请输入密码">
          <button @click="this.handleLogin">登录</button>
        </div>
      </div>
    </div>
</template>

<script>
    import { Toast, Indicator } from 'mint-ui'
    import qs from 'qs'
    export default {
      components: {
        Indicator
      },
      data() {
        return {
          userInfo: {
            id_card: '1003',
            password: '123456'
          }
        }
      },
      methods: {
        handleLogin() {
          Indicator.open({
            text: '正在登录中...',
            spinnerType: 'snake'
          });
          this.$axios.post(`/user/userLogin.do?${qs.stringify(this.userInfo)}`,
            {headers: {'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary6G4oNRwQHQvMUSkp'}})
            .then(res => {
              if(res.code == 1) {
                window.localStorage.setItem('Token', res.token)
                this.$store.commit('HANDLE_USERINFO', res.data)
                this.$store.commit('HANDLE_ISLOADING')
                Indicator.close();
                this.$router.push('/personal')
              }else {
                Indicator.close();
                Toast({
                  message: res.msg,
                });
              }
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
