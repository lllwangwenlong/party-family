<template>
    <div>
      <el-card class="container">
        <div slot="header">
          <div class="topic-content">
            <div class="topic-user">
              <img :src="topicData.user.avatar" class="item-img">
              <p class="item-username">{{topicData.user.nickname}}</p>
            </div>
            <div class="topic-detail">
              <div class="topic-text">
                {{topicData.content}}
              </div>
              <div class="topic-time">
                {{topicData.create_time}}
              </div>
            </div>
          </div>
        </div>
        <div class="common-content" v-for="(item, index) in commonData" :key="index">
          <div class="common-user">
            <img :src="item.user.avatar" class="item-img">
            <p class="item-username">{{item.user.nickname}}</p>
          </div>
          <div class="common-detail">
            <div class="common-text">
              {{item.content}}
            </div>
            <div class="common-time">
              {{item.create_time}}
            </div>
          </div>
          <div class="handle-action">
            <img src="../../../static/imgs/删除.png" @click="handleDelete(item._id)">
          </div>
        </div>
        <div class="handle-add">
          <textarea class="add-text" v-model="formData.content"></textarea>
          <div class="btn">
            <button @click="handleSubmit">发布</button>
            <button @click="handleCancle">取消</button>
          </div>
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          topicData: {
            user: {
              nickname:'',
              avatar: ''
            }
          },
          formData: {
            content: '',
            topic_id: ''
          },
          commonData: []
        }
      },
      methods: {
        getTopic() {
          this.$axios.get(`/admin/Topic/${this.$route.query.id}`).then(res => {
            if(res.code == 200) {
              this.topicData = res.data
              this.formData.topic_id = res.data._id
            }
          })
        },
        getData() {
          this.$axios.get(`/admin/common/${this.$route.query.id}`).then(res => {
            if(res.code == 200) {
              this.commonData = res.data
              console.log(res.data);
            }
          })
        },
        handleDelete(id) {
          this.$axios.delete(`/admin/common/${id}`).then(res => {
            if(res.code == 200) {
              console.log(res.data);
              this.$message.success(res.msg)
              this.getData()
            }
          })
        },
        handleSubmit() {
          this.$axios.post('/admin/common',this.formData).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg)
              this.formData.content=''
              this.getData()
            }
          })
        },
        handleCancle() {
          this.formData.content=''
        }
      },
      created() {
        this.getTopic()
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .container {
    position: relative;

    .topic-content {
      position: relative;
      display: flex;
      padding-left: 20px;
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

    .common-content {
      position: relative;
      display: flex;
      border-bottom: 2px solid #ddd;
      font-size: 14px;

      .common-user {
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

      .common-text {
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

    .handle-add {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      padding: 5px;
      .add-text {
        width: 400px;
        height: 80px;
        background:#f1f1f1;
        outline:none;
        border-radius: 4px;
        margin-right: 6px;
      }

      .btn {
        display: flex;
        justify-content: space-between;

        button {
          width: 60px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: #333;
          font-weight: 400;
          margin: 6px 0 0;
          padding: 0;
          border: 1px solid #f00;  //自定义边框
          border-radius: 6px;
          outline: none;    //消除默认点击蓝色边框效果
        }
      }

    }
  }
</style>
