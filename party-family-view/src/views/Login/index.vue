<template>
  <div class="login">
    <div class="login-box">
      <h2>党建E家后台管理系统</h2>
      <el-form :model="formData"
               :label-position="left"
               label-width="80px">
        <el-form-item label="用户名:">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" class="btn">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          formData:{
            username: 'Admin',
            password:'Admin'
          }
        }
      },
      methods: {
        handleLogin() {
          this.$axios.post('/Admin/adminUser/login', this.formData).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg)
              console.log(res)
              this.$router.push({name: 'home'})
            }else {
              this.$message.info(res.msg)
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
.login {
  overflow: hidden;
  height: 100vh;
  background: #2d3a4b;

  h2 {
    color: #fff;
    font-weight: 400;
    text-align: center;
  }

  .login-box {
    padding: 30px;
    width: 500px;
    height: 400px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #f1f1f1;
    margin: 200px auto;

    /deep/ .el-form {
      margin-top: 40px;
    }

    /deep/ .el-input {
      background: #2d3a4b;
      border: none;
    }

    /deep/ .el-form-item__label {
      color: #fff;
      text-align: center;
    }

    .btn {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
