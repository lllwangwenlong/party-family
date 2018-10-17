<template>
  <div class="container">
    <router-view></router-view>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
  import HomePage from '@/components/HomePage'
  import Notice from '@/components/Notice'
  import Personal from '@/components/Personal'
  import FooterNav from '@/components/FooterNav'

  export default {
    components: {
      HomePage,
      Notice,
      Personal,
      FooterNav
    }
  }
</script>

<style scoped lang="scss">
</style>
