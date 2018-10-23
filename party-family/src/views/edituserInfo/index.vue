<template>
    <div class="container">
      <div class="header-wrap clearfix">
        <img class="fll" src="/static/imgs/左箭头.png" @click="$router.go(-1)">
        <p class="fll">{{title}}</p>
        <a class="fll"  @click="handleEdit">保存</a>
      </div>
      <div class="detail-content">
        <ul>
          <li class="detail-item clearfix">
            <span class="fll">头像</span>
            <img class="flr" :src="userInfo.header">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">姓名</span>
            <input class="flr" type="text" v-model="userInfo.username">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">身份证</span>
            <input class="flr" type="text" disabled="disabled" v-model="userInfo.idCard">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">家庭地址</span>
            <input class="flr" type="text" v-model="userInfo.hometown">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">工作地址</span>
            <input class="flr" type="text" v-model="userInfo.address">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">民族</span>
            <input class="flr" type="text" v-model="userInfo.nation">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">微信号</span>
            <input class="flr" type="text" v-model="userInfo.wxNum">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">QQ号</span>
            <input class="flr" type="text" v-model="userInfo.qqNum">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">性别</span>
            <span class="change-sex flr">
              <input type="radio" name="sex" value="1" style="margin: 0 0.1rem;" v-model="userInfo.sex">男
              <input type="radio" name="sex" value="0" style="margin: 0 0.1rem;" v-model="userInfo.sex">女
            </span>
          </li>
          <li class="detail-item clearfix">
            <span class="fll">最高学历</span>
            <input class="flr" type="text" v-model="userInfo.education">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">职称</span>
            <input class="flr" type="text" v-model="userInfo.jobRank">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">薪资水平</span>
            <input class="flr" type="text" v-model="userInfo.salary">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">入党时间</span>
            <input class="flr" type="date" v-model="userInfo.joinPartyTime">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">党费最后缴纳时间</span>
            <input class="flr" type="date" v-model="userInfo.lastPayTime">
          </li>
          <li class="detail-item clearfix">
            <span class="fll">当前身份</span>
            <select class="select flr" v-model="userInfo.partyStatus">
              <option v-for="item in stateList" :value="item.value" :key="item.value">{{item.label}}</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import { Toast, Indicator } from 'mint-ui';
    export default {
      data() {
        return {
          userInfo: {},
          stateList: [
            {
              value: '0',
              label: '积极分子'
            },
            {
              value: '1',
              label: '预备党员'
            },
            {
              value: '2',
              label: '党员'
            },
          ]
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
        },
        handleEdit() {
          delete this.userInfo.idCard
          delete this.userInfo.header
          this.$axios.post('/user/modifyInfo.do',this.userInfo).then(res => {
            if(res.code == 1) {
              Toast({
                message: res.msg,
              });
              this.$router.push('/userinfo')
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

      select {
        font-size: 14px;
        color: #444;
        font-weight: 400;
        width: 2.0rem;
        height: 0.56rem;
        text-align: center;
        margin: 0.22rem;
        outline: none;
        border-radius: 4px;
        background: #fff;
      }

      span {
        display: block;
        height: 0.56rem;
        margin: 0.22rem;
        line-height: 2;
      }

      input {
        font-size: 14px;
        color: #444;
        font-weight: 400;
        display: block;
        height: 0.56rem;
        margin: 0.22rem 0;
        padding-right: 0.22rem;
        text-align: right;
        border: none;
        outline: none;
        background: #fff;
      }

      .change-sex {
        display: flex;
        font-size: 14px;
        color: #444;
        font-weight: 400;
        height: 0.56rem;
        margin: 0.22rem 0;
        padding-right: 0.22rem;
      }

      img {
        margin: 0.22rem;
        width: 0.56rem;
        height: 0.56rem;
      }
    }
  }
</style>
