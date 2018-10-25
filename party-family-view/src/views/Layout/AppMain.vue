<template>
  <div class="app-main" style="margin-top: 50px">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/layout/adminUser'}">管理管理员</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "AppMain"
    }
</script>

<style scoped lang="scss">
/deep/ .el-breadcrumb {
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>
