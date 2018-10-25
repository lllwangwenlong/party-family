<template>
    <div class="addAdmin">
      <el-card>
        <div slot="header">
          添加管理员
        </div>
        <el-form label-position="left" label-width="80px" :model="formData">
          <el-form-item label="用户头像">
            <Upload v-model="formData.avatar"></Upload>
          </el-form-item>
          <el-form-item label="用户名" required>
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="formData.nickname"></el-input>
          </el-form-item>
          <el-form-item label="密码" required>
            <el-input v-model="formData.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="formData.sex">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input v-model="formData.desc"></el-input>
          </el-form-item>
          <el-form-item label="工作">
            <el-input v-model="formData.job"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="formData.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>

<script>
  import Upload from '@/components/Upload'
  export default {
    components: {
      Upload
    },
    data() {
        return {
          formData: {
            username: '',
            nickname: '',
            avatar: '',
            password: '',
            desc: '',
            job: '',
            phone: '',
            sex: '',
          }
        }
      },
    methods: {
      handleSubmit() {
        this.$axios.post('/admin/adminUser',this.formData).then(res => {
          if(res.code == 200) {
            this.$router.push('/layout/adminUser')
          }else {
            this.$message.info(res.msg)
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
