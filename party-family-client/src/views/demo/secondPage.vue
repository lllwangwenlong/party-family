<template>
  <div class="main-container">
    <div class="header">
      demo
    </div>
    <div class="main" ref="main">
      <ul>
        <li v-for="item in arr">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="footer">
      <input type="text" v-model="text" @keyup.enter="handleClick">
      <button @click="handleClick">
        发布
      </button>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        BScroll: null,
        text: '',
        arr: [
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
          "今天天气不错啊",
        ],
      }
    },
    methods: {
      handleClick() {
        this.arr.push(this.text)
        this.text=''
        this.$nextTick(() => {
          this.BScroll.refresh()
          let scrollTop = this.$refs.main.scrollHeight - this.$refs.main.offsetHeight
          this.BScroll.scrollTo(0, -scrollTop, 300)
        })
      },
      initScroll() {
        this.$nextTick(() => {
          let main = this.$refs.main
          this.BScroll = new BScroll(main, {
            mouseWheel: true,
            scrollbar: true})
        })
      }
    },
    mounted() {
      this.initScroll()
    }
  }
</script>

<style scoped lang="scss">
  .main-container {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #f1f1f1;

    .header {
      height: 50px;
      background: #f00;
      text-align: center;
      font-size: 36px;
      color: #333;
      font-weight: 400;
    }
    .main {
      flex: 1;
      overflow: hidden;
      background: #c9c9c9;

      li {
        list-style: none;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        color: #fff;
        padding-left: 20px;
      }
    }
    .footer {
      display: flex;
      input {
        -webkit-appearance: none;//取出默认样式
        outline: none;
        flex: 1;
        display: block;
        height: 45px;
        line-height: 45px;
        padding: 0 10px;
        font-size: 20px;
        border: 1px solid #d7d7d7;
      }
      button {
        width: 80px;
        height: 45px;
        outline: none;
        font-size: 20px;
        color: #333;
      }
    }
  }
</style>
