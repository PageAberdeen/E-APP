<template>
  <div class="orderNews container">
    <h1 class="orderNews-title">预约结果查询</h1>
    <ul class="orderNews-msgbox">
      <li>您的报名预约已经成功!</li>
      <li>报名时段：<span>8:00</span></li>
      <li>报名地点：<span>柳州市弯塘路45号弯塘小学教育集团本部</span></li>
      <li>郑重提醒：<span>请按时到指定地点办理报名相关手续，填写虚假信息，一旦发现，一律取消报名资格！</span></li>
    </ul>
    <a href="#/studentMenu" class="btn link-btn ">返回</a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .orderNews
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
