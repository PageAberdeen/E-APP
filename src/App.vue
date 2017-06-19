<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {resize} from './assets/js/resize'
  export default {
    mounted: function () {
      resize()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "assets/style/reset.css"
  @import "assets/style/base.css"
  #app
    height 100%
</style>
