<template>
  <div class="container">
    <Header></Header>
    <div class="page-lhjf">
      <div class="page-score">
        <p>{{this.score}}</p>
      </div>
      <router-link to="/scoredtail" class="clearfix">
        <div class="look-left fll">
          <img src="/static/imgs/积分明细icon.png" alt="">
          <p>查看规则</p>
        </div>
        <span class="flr" style="margin-top: 0.3rem;">></span>
      </router-link>
      <div class="score-rules">
        <div class="rule-detail clearfix">
          <span class="fll">积分规则</span>
          <img class="flr" src="/static/imgs/问号icon.png" style="margin-top: 0.12rem;">
        </div>
        <div class="rule-item clearfix">
          <span class="fll">登录APP</span>
          <span class="flr">5</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">完善个人信息</span>
          <span class="flr">2</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">查看积分</span>
          <span class="flr">1</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">按时交纳党费</span>
          <span class="flr">10</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">查看通知</span>
          <span class="flr">2</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">了解学院动态</span>
          <span class="flr">5</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">上交思想汇报经审核通过</span>
          <span class="flr">5</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">主动学习相关文件</span>
          <span class="flr">10</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">撰写心得总结上交经审核通过</span>
          <span class="flr">5</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">提交个人总结</span>
          <span class="flr">2</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">积极参与互动</span>
          <span class="flr">5</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">学习党建知识</span>
          <span class="flr">5</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">学习党史</span>
          <span class="flr">10</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">创先争优事迹</span>
          <span class="flr">10</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">学习习近平系列讲话</span>
          <span class="flr">10</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">关注并积极参与特色活动</span>
          <span class="flr">5</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">制度化,常态化建设</span>
          <span class="flr">5</span>
        </div>
        <div class="rule-item clearfix">
          <span class="fll">记录令人感动的人和事</span>
          <span class="flr">3</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui'

  export default {
    data() {
      return {
        score: ''
      }
    },
    methods: {
      getData() {
        Indicator.open({
          text: '正在加载',
          spinnerType: 'snake'
        })
        this.$axios.get('/user/userInfo.do').then(res => {
          if(res.code == 1) {
            Indicator.close();
            this.score = res.data.totalScore
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
  .container {
    height: 100vh;
    background: #f1f1f1;
  }
  .page-lhjf {
    margin-top: 0.86rem;

    .page-score {
      position: relative;
      margin-top: 0.86rem;
      width: 7.50rem;
      height: 2.88rem;
      background: url("/static/imgs/积分bg.png") no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;

      p {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        color: #fff;
      }
    }

    a {
      display: block;
      width: 100%;
      height: 1.08rem;
      text-decoration: none;
      font-size: 16px;
      color: #444;
      padding: 0 0.2rem;
      background: #fff;
      box-sizing: border-box;

      .look-left {
        display: flex;
        margin-top: 0.22rem;

        p {
          margin-left: 0.2rem;
          line-height: 2;
        }
      }
    }

    .score-rules {
      width: 100%;
      font-size: 14px;
      color: #444;
      padding: 0 0.2rem;
      box-sizing: border-box;

      .rule-detail {
        width: 100%;
        height: 0.68rem;
        line-height: 0.68rem;
        border: 1px solid #ddd;
      }

      .rule-item {
        width: 100%;
        height: 0.64rem;
        font-size: 14px;
        color: #444;
        font-weight: 400;
        line-height: 0.68rem;
        background: #fff;
        border-bottom: 1px solid #ddd;
      }
    }
  }


</style>
