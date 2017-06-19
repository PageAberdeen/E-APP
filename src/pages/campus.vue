<template>
  <div class="campus">
    <h5 class="system-title">柳州市弯塘小学新生自助报名及预约系统</h5>
    <div class="link-box">
      <router-link class="jump-title" to="/districtEntry">集团本部</router-link>
      <router-link class="jump-title active" to="/trailingEntry">集团总部</router-link>
      <router-link class="jump-title" to="/entry">文化校区</router-link>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .campus
    text-align center
    font-size 0
  .link-box
    font-size 32px
    line-height 64px
    margin-top 2rem
    padding 0 .4rem
  
    & .jump-title
      width 100%
      margin-bottom .8rem
      background-color #ddd
    & .jump-title.active
      background-color #00bb00
</style>
