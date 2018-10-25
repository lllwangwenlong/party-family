<template>
  <div>
    <el-row>
      <el-col :span="4" style="height: 100vh">
        <SideBar></SideBar>
      </el-col>
      <el-col :span="20" style="height: 100vh;overflow-y: scroll">
        <Header></Header>
        <AppMain></AppMain>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import SideBar from '@/components/SideBar'
  import AppMain from './AppMain'
  export default {
    name: "index",
    components: {
      Header,
      SideBar,
      AppMain,
    }
  }
</script>

<style scoped>

</style>
