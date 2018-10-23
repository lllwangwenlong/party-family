<template>
  <div class="container">
    <Header></Header>
    <div class="score-content">
      <div class="score-item" v-for="(item,index) in scoreData" :key="index">
        <div class="item-left fll">
          <span style="font-size: 18px">{{item.typeName}}</span>
          <span style="font-size: 14px">{{item.timeFormat}}</span>
        </div>
        <div class="flr" style="font-size:16px; color: #f00">
          +{{item.singleDesc}}
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
          scoreData: []
        }
      },
      methods: {
        getData() {
          Indicator.open({
            text: '正在加载',
            spinnerType: 'snake'
          })
          this.$axios.get('/integral/integralList.do',{page:1, rows:10}).then(res => {
            if(res.code == 1) {
              console.log(res.rows)
              Indicator.close();
              this.scoreData = res.rows
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
.score-content {
  margin-top: 0.86rem;

  .score-item {
    width: 7.5rem;
    height: 1.58rem;
    padding: 0.32rem;
    box-sizing: border-box;

    .item-left {
      display: flex;
      flex-direction: column;
    }

  }
}
</style>
