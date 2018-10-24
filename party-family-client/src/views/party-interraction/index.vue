<template>
  <div class="container">
    <mt-loadmore class="action-content"
                 :top-method="loadTop"
                 :bottom-method="loadBottom"
                 :bottom-all-loaded="allLoaded"
                 :auto-fill="false"
                 style="font-size: 16px;height: 100%;"
                 ref="loadmore">
      <div class="action-item"  v-for="(item, index) in actions" :key="index">
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
          <div class="reply-desc" @click="$router.push({path: '/partyactionshows/interractiondetail', query: {data: item,form_id: item.forumId}})">
            <img src="/static/imgs/消息.png">
            <p>回复</p>
          </div>
        </div>
      </div>
      <div class="publish-action" @click="handleReply">
        <img class="publish-icon" src="/static/imgs/加号.png">
      </div>
      <div class="havenone" v-show="this.isHaving">
        没有数据了
      </div>
    </mt-loadmore>
    <div class="reply-detail" v-show="isReply">
      <form action="" class="reply-form">
        <textarea name="content" class="reply-text"  v-model="formData.content" @keyup.enter="handlePublish">
        </textarea>
        <div class="reply-action">
          <input type="button" style="background:#ef473a;" value="发布" @click="handlePublish">
          <input type="button" value="取消" @click="handleCancle">
        </div>
      </form>
    </div>
    <div class="black-curtain" v-show="isReply" @click="handleCancle"></div>
  </div>
</template>

<script>
    import { Toast, Indicator } from 'mint-ui'

    import qs from 'qs'
    export default {
      data() {
        return {
          title: '',
          actions: [],
          pn: {
            page: 1,
            rows: 10
          },
          formData: {
            content: '',
            type: 1
          },
          isReply: false,
          allLoaded: false,
          isHaving: false
        }
      },
      methods: {
        loadTop() {
          this.getActionData()
          this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
          this.pn.page += 1
          this.getActionData()
          this.$refs.loadmore.onBottomLoaded();
        },
        getActionData() {
          Indicator.open({
            text: '正在加载',
            spinnerType: 'snake'
          });
          this.title = this.$route.query.title
          this.$axios.get('/forum/forumList.do',this.pn).then(res => {
            if(res.code == 1) {
              Indicator.close();
              this.actions = [
                ...this.actions, ...res.rows
              ]
              if(res.total == this.actions.length) {
                this.isHaving = true
              }
            }
          })
        },
        handleReply() {
          this.isReply = !this.isReply
        },
        handlePublish() {
          this.$axios.post(`/forum/saveForum.do?${qs.stringify(this.formData)}`,
            {headers: {'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary6G4oNRwQHQvMUSkp'}})
            .then(res => {
            if(res.code == 1) {
              this.isReply = !this.isReply
              Toast({
                message: res.msg,
              });
              this.formData.content = ''
              this.getActionData()
              this.$router.push('/partyactionshows/partyaction')
            }
          })
        },
        handleCancle() {
          this.isReply = !this.isReply
        },
      },
      created() {
        this.getActionData()
      }
    }
</script>

<style scoped lang="scss">
  .container {
    margin-top: 0.86rem;
    overflow: scroll;
    .action-content {
      .action-item {
        width: 7.5rem;
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
                height: 100%;
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

        .publish-icon {
          display: block;
          width: 0.64rem;
          height: 0.64rem;
          padding: 0.18rem;
        }
      }
    }

    .reply-detail {
      .reply-form {
        position: fixed;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 3.22rem;
        padding: 0.2rem;
        z-index: 998;
        box-sizing: border-box;
        background: #e6e6e6;

        .reply-text {
          width: 100%;
          height: 2.0rem;
          font-size:20px;
          border: none;
          background: #fff;
          border-radius: 4px;
        }

        .reply-action {
          width: 100%;;
          display: flex;
          justify-content: space-between;

          input {
            font-size: 12px;
            color: #333;
            font-weight: 400;
            width: 0.68rem;
            height: 0.62rem;
            border-radius: 4px;
            border: none;
          }
        }
      }
    }

    .black-curtain {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 998;
      width: 100%;
      height: 100%;
      z-index: 996;
      background: rgba(0, 0, 0, .5);
    }

  }
</style>
