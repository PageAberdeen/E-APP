<template>
  <div class="offerRain container">
    <h1 class="offerRain-title">录取结果查询</h1>
    <ul class="offerRain-msgbox">
      <li>申请入学新生<span></span>符合柳州市弯塘路小学录取条件，请于7月31日上午9：00-11：00到柳州市弯塘路小学领取入学通知书。</li>
    </ul>
    <a href="#/studentMenu" class="btn link-btn ">返回</a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .offerRain
    background url(../assets/images/homebg.jpg) no-repeat center
    background-size cover
    &-title
      text-align center
      height 2rem
      font-size .36rem
      line-height 2rem
      color #66B2E0
    &-msgbox
      margin .6rem 0
      padding .2rem
      font-size .32rem
      border-radius .2rem
      background-color rgba(255,255,255,.6)
</style>
