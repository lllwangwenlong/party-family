<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  .fll {
    float: left;
  }

  .flr {
    float: right;
  }

  .clearfix {
    content: '';
    display: block;
    clear: both;
    overflow: hidden;
  }

  /*input, button, select, textarea {//去掉其所有的默认样式*/
    /*outline: none;*/
    /*-webkit-appearance: none;*/
    /*border-radius: 0;*/
  /*}*/
  /*.clearfix{*/
  /*overflow:auto;*/
  /*_height:1%*/
  /*}*/

</style>
