<template>
  <div class="residence">
    <h1 class="residence-title">民族实验小学新生预约报名系统<br/>新生报名界面</h1>
    <div class="jump-box">
      <a href="#/districtEntry" class="btn jump-btn jump-btn-x">学区生报名入口</a>
      <a href="" class="btn jump-btn jump-btn-s">随迁生报名入口</a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .residence
    height 100%
    background url(../assets/images/homebg.jpg) no-repeat center
    background-size cover
    &-title
      margin 0 auto
      line-height .8rem
      text-align center
      height 2rem
      font-size .36rem
      color #66B2E0
    .jump-box
      padding .4rem
    .jump-btn
      margin-top 1rem
      width 100%
      font-size .36rem
      line-height 1rem
      color #fff
    .jump-btn-x
      background-color #4ecdfe
      box-shadow 0 0 .2rem .03rem #4ecdfe
    .jump-btn-s
      background-color #80f157
      box-shadow 0 0 .2rem .03rem #80f157
</style>
