<template>
  <div>
    <el-card>
      <div slot="header">
        管理员详情
      </div>
      <div class="detail-content">
        <div class="user-item">
          <p>头像:</p>
          <img :src="userInfo.avatar">
        </div>
        <div class="user-item">
          <span>昵称:</span><span>{{userInfo.nickname}}</span>
        </div>
        <div class="user-item">
          <span>性别:</span><span>{{userInfo.sex}}</span>
        </div>
        <div class="user-item">
          <span>工作:</span><span>{{userInfo.job}}</span>
        </div>
        <div class="user-item">
          <span>电话:</span><span>{{userInfo.phone}}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {}
      }
    },
    methods: {
      getData() {
        this.$axios.get(`/admin/adminUser/${this.$route.query.id}`).then(res => {
          if(res.code == 200) {
            this.userInfo = res.data
          }
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .detail-content {
    width: 500px;
    margin: 0 auto;
    padding: 40px;
    box-sizing: border-box;
    border: 1px solid #ddd;

    .user-item {
      display: flex;

      span {
        margin-right: 10px;
        line-height: 2;
      }

      img {
        display: block;
        width: 80px;
        height: 80px;
      }
    }
  }
</style>
