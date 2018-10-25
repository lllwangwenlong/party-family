<template>
  <div class="side-bar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <router-link to="/layout/home">
          首页
        </router-link>
      </el-menu-item>
      <el-submenu index="admin-manage">
        <template slot="title">
          管理员管理
        </template>
        <el-menu-item index="/layout/adminUser">
          <router-link to="/layout/adminUser">
            管理员列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addAdminUser">
          <router-link to="/layout/addAdminUser">
            添加管理员
          </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped lang="scss">
  .side-bar {
    min-height: 100%;
    border-right: 1px solid #f1f1f1;
    background: #304156;

    /deep/ .el-menu-vertical-demo {
      border-right: none;
      z-index:998;
    }

    /deep/ .el-menu-item {
      min-width: 100%;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      color: #fff;
      text-decoration: none;
    }
  }
</style>
