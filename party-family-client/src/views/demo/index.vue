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
  export default {
    data() {
      return {
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
        text: ''
      }
    },
    methods: {
      handleClick() {
        this.arr.push(this.text)
        this.text=''
        this.$nextTick(() => {
          let main = this.$refs.main
          main.scrollTop = main.scrollHeight
        })
      }
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
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
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
