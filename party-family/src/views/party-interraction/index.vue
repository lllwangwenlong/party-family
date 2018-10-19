<template>
  <div class="container">
    <div class="header-wrap">
      <img src="/static/imgs/左箭头.png" @click="$router.go(-1)">
      <p>{{this.title}}</p>
    </div>
    <div class="action-content" v-for="(item, index) in actions" :key="index">
      <div class="action-item">
        <div class="action-detail">
          <div class="detail-left">
            <div class="avatar">
              <img :src="item.header">
            </div>
            <div class="action-desc">
              <div class="username">
                {{item.username}}
              </div>
              <div class="state">
                <div class="state-img">
                  <img src="/static/imgs/时钟.png" alt="">
                </div>
                <p>{{item.currentTime}}</p>
                <div class="state-img">
                  <img src="/static/imgs/喇叭.png" alt="">
                </div>
                <p>公开</p>
              </div>
            </div>
          </div>
          <div class="action-title">
            党员互动
          </div>
        </div>
        <div class="action-text">
          {{item.content}}
        </div>
        <div class="action-reply">
          <div class="reply-desc">
            <img src="/static/imgs/消息.png">
            <p>回复</p>
          </div>
        </div>
      </div>
    </div>
    <div class="publish-action">
      <img src="/static/imgs/加号.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          title: '',
          actions: [],
          formData: {
            page: 1,
            rows: 10
          }
        }
      },
      methods: {
        getActionData() {
          this.title = this.$route.query.title
          this.$axios.get('/forum/forumList.do',this.formData).then(res => {
            if(res.code == 1) {
              this.actions = res.rows
              console.log(this.actions)
            }
          })
        }
      },
      created() {
        this.getActionData()
      }
    }
</script>

<style scoped lang="scss">
  .container {
    background: #f1f1f1;
    .header-wrap {
      width: 7.50rem;
      height: 0.86rem;
      background: #c50206;
      display: flex;

      img {
        width: 0.72rem;
        height: 0.66rem;
        margin-top: 0.13rem;
      }

      p {
        width: 6.06rem;
        height: 100%;
        line-height: 0.86rem;
        font-size: 18px;
        color: #fff;
        margin-right: 0.72rem;
        text-align: center;
      }
    }

    .action-item {
      width: 7.5rem;
      /*height: 2.82rem;*/
      padding: 0.32rem;
      box-sizing: border-box;
      font-size: 16px;
      color: #333;
      font-weight: 400;
      background: #fff;
      margin-bottom: 0.2rem;

      .action-detail {
        position: relative;
        width: 6.7rem;

        .detail-left {
          display: flex;
          justify-content: space-between;
          width: 4.4rem;
          height: 0.82rem;
          .avatar {
            width: 0.66rem;
            height: 0.66rem;

            img {
              border-radius: 50%;
              display: block;
              width: 100%;
            }
          }

          .action-desc {
            width: 3.46rem;
            height: 0.8rem;

            .username {
              width: 100%;
              height: 0.4rem;
            }


          }
        }

        .action-desc .state {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 0.4rem;
          font-size: 12px;

          .state-img {
            margin : auto 0;
            width: 0.24rem;
            height: 0.28rem;

            img {
              display: block;
              width: 100%;
            }
          }
        }

        .action-title {
          position: absolute;
          top: 0;
          right: 0;
          width: 1.36rem;
          height: 0.52rem;
          padding: 0.1rem;
          box-sizing: border-box;
          font-size: 12px;
          line-height: 1;
          color: #f00;
          border: 1px solid #f00;
          border-radius: 15%/50%;
          text-align: center;
        }
      }

      .action-text {
        width: 100%;
        height: 0.8rem;
        padding: 0.2rem 0;
        box-sizing: border-box;
      }

      .action-reply {
        position: relative;
        width: 100%;
        height: 0.4rem;

        .reply-desc {
          position: absolute;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          width: 1.1rem;
          height: 0.4rem;
        }
        img {
          display: block;
          width: 0.4rem;
          height: 0.4rem;
        }
      }
    }

    .publish-action {
      position: fixed;
      right: 0.24rem;
      bottom: 1.3rem;
      width: 1.0rem;
      height: 1.0rem;
      border-radius: 50%;
      border: 1px solid #f00;
      background: #f00;

      img {
        display: block;
        width: 0.64rem;
        height: 0.64rem;
        padding: 0.18rem;
      }
    }
  }
</style>
