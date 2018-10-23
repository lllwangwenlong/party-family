<template>
  <div class="container">
    <div class="action-item">
      <div class="action-detail">
        <div class="detail-left clearfix">
          <div class="avatar fll">
            <img :src="itemData.header">
          </div>
          <div class="action-desc fll">
            <div class="username">
              {{itemData.username}}
            </div>
            <div class="state">
              <div class="state-img">
                <img src="/static/imgs/时钟.png" alt="">
              </div>
              <p>{{itemData.currentTime}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="action-text">
        {{itemData.content}}
      </div>
    </div>
    <p class="reply">回复:</p>
    <div class="action-item" v-for="(item, index) in replyData" :key="index">
      <div class="action-detail">
        <div class="detail-left clearfix">
          <div class="avatar fll">
            <img :src="item.header">
          </div>
          <div class="action-desc fll">
            <div class="username">
              {{item.username}}
            </div>
            <div class="state">
              <div class="state-img">
                <img src="/static/imgs/时钟.png" alt="">
              </div>
              <p>{{item.timeFormat}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="action-text">
        {{item.comment}}
      </div>
    </div>
    <span>没有数据了</span>
    <div class="comment">
      <input  ref="input" class="text" type="text" v-model="comment.comment" @keyup.enter="handleComment" placeholder="评论内容">
      <button class="btn" @click="handleComment">评论</button>
    </div>
  </div>
</template>

<script>
    import { Toast, Indicator } from 'mint-ui'

    export default {
      data() {
        return{
          itemData: {},
          replyData: [],
          comment: {
            forum_id: '',
            comment: ''
          }
        }
      },
      methods: {
        getData() {
          Indicator.open({
            text: '正在加载',
            spinnerType: 'snake'
          });
          this.comment.forum_id = this.$route.query.form_id
          this.itemData = this.$route.query.data
          this.$axios.get(`/forum/forumCommentList.do?forum_id=${this.$route.query.form_id}`).then(res => {
            if(res.code == 1) {
              Indicator.close();
              this.replyData = res.rows
            }
          })
        },
        handleComment() {
          this.$axios.post('/forum/addComment.do',this.comment).then(res => {
            if(res.code == 1) {
              Toast({
                message: res.msg,
              });
              this.getData()
              this.comment.comment = ''
            }
          })
        }
      },
      created() {
        this.getData()
      },
      mounted() {
        this.$refs['input'].focus()
        // this.$refs['input'].value = ''
      }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 7.5rem;
    margin-top: 0.86rem;
    height: calc( 100vh - 0.86rem );

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
          width: 4.4rem;
          height: 0.82rem;
          .avatar {
            width: 0.66rem;
            height: 0.66rem;
            margin-right: 0.32rem;

            img {
              display: block;
              border-radius: 50%;
              width: 100%;
              height: 100%;
            }
          }

          .action-desc {
            width: 2.78rem;
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
      }

      .action-text {
        width: 100%;
        padding: 0.2rem 0;
        box-sizing: border-box;
      }
    }

    .reply {
      font-size: 18px;
      color: #333;
      font-weight: 700;
      margin: 0 0.32rem 0.2rem;
    }

    span {
      display: block;
      text-align: center;
      font-size: 16px;
      color: #666;
      font-weight: 400;
      border-top: 1px solid #e6e6e6;
    }

    .comment {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 1.0rem;
      padding: 0.16rem;
      box-sizing: border-box;
      background: #fff;

      .text {
        display: block;
        width: 6.0rem;
        height: 0.64rem;
        border-radius: 6px;
        font-size: 14px;
        color: #444;
        font-weight: 400;
        padding-left: 0.16rem;
        border: 1px solid #f00;
      }
      .btn {
        display: block;
        width: 0.64rem;
        height: 0.64rem;
        background: #f00;
        border: none;
        border-radius: 4px;
        color: #fff;
      }
    }
  }
</style>
