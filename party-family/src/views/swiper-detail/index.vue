<template>
    <div class="container">
      <Header></Header>
      <div class="text-content">
        <div class="text-title">
          {{swiperData.title}}
        </div>
        <div class="text-desc" v-html="swiperData.content">
        </div>
      </div>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui'

    export default {
      data() {
        return {
          swiperData: {}
        }
      },
      methods: {
        getNewData() {
          Indicator.open({
            text: '正在加载',
            spinnerType: 'snake'
          });
          this.$axios.get(`/news/newsContent.do?newsId=${this.$route.query.newId}`).then(res => {
            if(res.code == 1) {
              Indicator.close();
              this.swiperData = res.data
            }
          })
        }
      },
      created() {
        this.getNewData()
      }
    }
</script>

<style  lang="scss">
.text-content {
  padding: 0.2rem;
  .text-title {
    font-size: 24px;
    border-bottom: 0.2rem;
    line-height: 1.2;
    color: #222;
  }

  .text-desc {
    width: 7.1rem;
    height: 7.2rem;
    margin-bottom: 0.4rem;
  }

  span {
    margin: 0.2rem 0;
    display: block;
    font-size: 18px;
    color: #333;
    font-weight: 400;
    line-height: 2;
  }

  /*p {*/
  /*height: 0.48rem;*/
  /*}*/

  .ql-align-center {
    display: block;
    margin: 0.2rem 0 0.4rem;
    width: 7.1rem;

    img {
      width: 100%;
    }
  }
  }
</style>
