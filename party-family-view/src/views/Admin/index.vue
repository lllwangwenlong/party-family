<template>
  <div class="admin">
    <el-card>
      <div slot="header">
        管理员列表
      </div>
      <el-table :data="adminUsersData">
        <el-table-column label="姓名" width="80" prop="nickname"/>
        <el-table-column label="性别" width="80" prop="sex"/>
        <el-table-column label="头像" width="100">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="" class="item-img">
          </template>
        </el-table-column>
        <el-table-column label="手机号" width="100" prop="phone"/>
        <el-table-column label="个人签名" width="180" prop="desc"/>
        <el-table-column label="操作">
          <template slot-scope="scope">
           <el-button type="primary" size="mini" @click="$router.push({name: 'adminUserDetail', query:{id: scope.row._id}})">查看详细</el-button>
           <el-button type="danger" size="mini" @click="handleDelete(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          adminUsersData: []
        }
      },
      methods: {
        getAdminUsers() {
          this.$axios.get('/admin/adminUser').then(res => {
            if(res.code == 200) {
              this.adminUsersData = res.data
            }
           })
        },
        handleDelete(id) {
          this.$axios.delete(`/admin/adminUser/deleteUser/${id}`).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg)
              this.getAdminUsers()
            }
          })
        }
      },
      created() {
        this.getAdminUsers()
      }
    }
</script>

<style scoped lang="scss">
.item-img {
  width: 80px;
  height: 80px;
}
</style>
