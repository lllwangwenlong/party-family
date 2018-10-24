<template>
    <div class="container">
      <Header></Header>
      <div class="content-text" v-html="contentText"></div>
    </div>
</template>

<script>
    import cheerio from 'cheerio'
    import getUrl from '../../utils/getUrl'
    export default {
      data() {
        return {
          contentText: ''
        }
      },
      methods: {
        getHtml() {
          var month = new Date().getMonth() + 1
          var day = new Date().getDate()
          var monthStr = (month<10 ? "0"+month : ""+month)
          var dayStr = (day<10 ? "0"+day : ""+day)
          var url = getUrl(monthStr, dayStr)
          this.$axios.get(`/proxy/proxy.do?url=${url}`).then(res => {
            const $ = cheerio.load(res);
            this.contentText = $('div.p1_02').html()
          })
        }
      },
      created() {
        this.getHtml()
      }
    }
</script>

<style lang="scss">
  .content-text {
    margin-top: 0.86rem;
    padding: 0.2rem;
    box-sizing: border-box;

    .red {
      font-size: 24px;
      color: #000;
      font-weight: 400;

    }
    h2 {
      font-size: 20px;
      color: #000;
      font-weight: 500;
      margin: 0.2rem 0;
      line-height: 1;
    }
    p {
      font-size: 14px;
      color: #000;
      font-weight: 400;
      line-height: 2;
    }
  }
</style>
