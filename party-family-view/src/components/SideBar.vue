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
      <el-submenu index="news-manage">
        <template slot="title">
          新闻管理
        </template>
        <el-menu-item index="/layout/news">
          <router-link to="/layout/news">
            新闻列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addNews">
          <router-link to="/layout/addNews">
            添加新闻
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="swiper-manage">
        <template slot="title">
          轮播图管理
        </template>
        <el-menu-item index="/layout/swiper">
          <router-link to="/layout/swiper">
            轮播图列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addSwiper">
          <router-link to="/layout/addSwiper">
            添加轮播图
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="topic-manage">
        <template slot="title">
          话题管理
        </template>
        <el-menu-item index="/layout/topic">
          <router-link to="/layout/topic">
            话题列表
          </router-link>
        </el-menu-item>
        <el-menu-item index="/layout/addTopic">
          <router-link to="/layout/addTopic">
            发布话题
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
      min-width: 0;
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
