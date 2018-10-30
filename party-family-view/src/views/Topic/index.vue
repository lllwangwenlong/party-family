<template>
    <div>
      <el-card>
        <div slot="header">
          话题列表
        </div>
        <div class="topic-content" v-for="(item, index) in topicData" :key="index">
          <div class="topic-user">
            <img :src="item.user.avatar" class="item-img">
            <p class="item-username">{{item.user.nickname}}</p>
          </div>
          <div class="topic-detail">
            <div class="topic-text">
              {{item.content}}
            </div>
            <div class="topic-time">
              {{item.create_time}}
            </div>
          </div>
          <div class="handle-action">
            <img src="../../../static/imgs/回复.png" @click="$router.push({name: 'topicCommon',query: {id: item._id}})">
            <img src="../../../static/imgs/删除.png" @click="handleDelete(item._id)">
          </div>
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          topicData: []
        }
      },
      methods: {
        getData() {
          this.$axios.get('/admin/Topic').then(res => {
            if(res.code == 200) {
              res.data.forEach(item => {
                item.create_time = new Date(item.create_time).toLocaleString()
              })
              this.topicData = res.data
            }
          })
        },
        handleDelete(id) {
          this.$axios.delete(`/admin/Topic/deleteTopic/${id}`).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg)
              this.getData()
            }
          })
        }
      },
      created(){
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .topic-content {
    position: relative;
    display: flex;
    border-bottom: 2px solid #ddd;
    margin: 0 100px;
    font-size: 14px;

    .topic-user {
      display: flex;
      flex-direction: column;
      margin-right: 10px;

      .item-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .item-username {
        font-size: 14px;
        color: #333;
        font-weight:400;
        margin: 10px 0;
        text-align: center;
      }
    }

    .topic-text {
      font-size: 16px;
      color: #444;
      font-weight: 700;
      margin: 10px 0 20px;
    }


    .handle-action {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
      img {
        display: block;
        margin: 5px;
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
