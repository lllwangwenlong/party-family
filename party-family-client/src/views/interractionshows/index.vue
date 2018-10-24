<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .container {
    background: #f1f1f1;
  }
</style>
