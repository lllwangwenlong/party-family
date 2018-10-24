<template>
    <div class="user-detail">
      <div class="header-wrap clearfix">
        <img class="fll" src="/static/imgs/左箭头.png" @click="$router.go(-1)">
        <p class="fll">{{title}}</p>
        <router-link class="fll" to="/edituserInfo">编辑</router-link>
      </div>
      <div class="detail-content">
        <ul>
          <li class="detail-item clearfix">
            <span class="fll">头像</span>
            <img class="flr" :src="userInfo.header">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">姓名</span>
            <span class="flr">{{userInfo.username}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">身份证</span>
            <span class="flr">{{userInfo.idCard}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">家庭地址</span>
            <span class="flr">{{userInfo.hometown}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">工作地址</span>
            <span class="flr">{{userInfo.address}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">民族</span>
            <span class="flr">{{userInfo.nation}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">微信号</span>
            <span class="flr">{{userInfo.wxNum}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">QQ号</span>
            <span class="flr">{{userInfo.qqNum}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">性别</span>
            <span class="flr">{{userInfo.sex}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">最高学历</span>
            <span class="flr">{{userInfo.education}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">职称</span>
            <span class="flr">{{userInfo.jobRank}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">薪资水平</span>
            <span class="flr">{{userInfo.salary}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">入党时间</span>
            <span class="flr">{{userInfo.joinPartyTime}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">党费最后缴纳时间</span>
            <span class="flr">{{userInfo.lastPayTime}}</span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">当前身份</span>
            <span class="flr">{{userInfo.partyIdentity}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui'

    export default {
      data() {
        return {
          userInfo: {}
        }
      },
      methods: {
        getUserInfo() {
          Indicator.open({
            text: '正在加载',
            spinnerType: 'snake'
          });
          this.$axios.get('/user/userInfo.do').then(res => {
            if(res. code == 1) {
              Indicator.close();
              this.userInfo = res.data
            }
          })
        }
      },
      created() {
        this.getUserInfo()
      },
      computed: {
        title() {
          return this.$route.meta.title
        }
      }
    }
</script>

<style scoped lang="scss">
  .header-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 7.50rem;
    height: 0.86rem;
    background: #c50206;
    display: flex;
    font-size: 18px;
    color: #fff;

    img {
      width: 0.72rem;
      height: 0.66rem;
      margin-top: 0.13rem;
    }

    p {
      width: 6.06rem;
      height: 100%;
      line-height: 0.86rem;
      text-align: center;
    }

    a {
      position: absolute;
      right: 0;
      display: block;
      width: 1.0rem;
      height: 100%;
      line-height: 0.86rem;
      color: #fff;
      text-align: center;
      text-decoration: none;
    }
  }

  .detail-content {
    width: 7.5rem;
    margin-top: 0.86rem;

    .detail-item{
      width: 100%;
      height: 1.0rem;
      border-bottom: 3px solid #f1f1f1;
      font-size: 14px;
      color: #444;
      font-weight: 400;

      span {
        display: block;
        height: 0.56rem;
        margin: 0.22rem;
        line-height: 2;
      }

      img {
        margin: 0.22rem;
        width: 0.56rem;
        height: 0.56rem;
      }
    }
  }
</style>
