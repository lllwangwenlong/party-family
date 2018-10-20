<template>
    <div class="container">
      <div class="text-content">
        <div class="text-title">
          {{newsData.title}}
        </div>
        <div class="text-desc" v-html="newsData.content">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          newsData: {}
        }
      },
      methods: {
        getNewsData() {
          this.$axios.get(`/news/newsContent.do?newsId=${this.$route.query.newsId}`).then(res => {
            if(res.code == 1) {
              this.newsData = res.data
              console.log(this.newsData)
            }
          })
        }
      },
      created() {
        this.getNewsData()
      }
    }
</script>

<style lang="scss">
  .text-content {
    margin-top: 0.85rem;
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

    p {
      margin: 0.2rem 0;
      display: block;
      font-size: 18px;
      color: #333;
      font-weight: 400;
      line-height: 2;
    }
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
  }

    img {
      width: 100%;
    }
  }
</style>
