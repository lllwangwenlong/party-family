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

  fll {
    float: left;
  }

  flr {
    float: right;
  }

  clearfix {
    content: '';
    display: block;
    clear: both;
    overflow: hidden;
  }

  /*.clearfix{*/
  /*overflow:auto;*/
  /*_height:1%*/
  /*}*/

</style>
