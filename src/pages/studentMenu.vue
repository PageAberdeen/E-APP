<template>
  <div class="studentMenu">
    <h1 class="studentMenu-title">民族实验小学新生预约报名系统<br/>新生报名界面</h1>
    <div class="studentMenu-link-box">
      <a href="#/residence" class="studentMenu-link studentMenu-link-orderTime">填写新生信息</a>
      <a href="#/orderTime" class="studentMenu-link studentMenu-link-order">选择预约时间</a>
      <a href="#/orderNews" class="studentMenu-link studentMenu-link-enroll">查询预约结果</a>
      <a href="#/offerRain" class="studentMenu-link studentMenu-link-search">查询录取结果</a>
      <a href="#" class="studentMenu-link studentMenu-link-quit">退出登录</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .studentMenu
    height 100%
    padding .3rem
    background url(../assets/images/homebg.jpg) no-repeat center
    background-size cover
    .studentMenu-title
      margin: 0 auto;
      line-height: .8rem;
      text-align center
      height 2rem
      font-size .36rem
      color #66B2E0
    .studentMenu-link-box
      position relative
      width 100%
      height 6rem
    .studentMenu-link
      width 2.4rem
      height 2.4rem
      line-height 2.4rem
      color #fff
      text-align center
      font-size .32rem
      box-shadow 0 0 .3rem 0 #222;
      &-orderTime
        position absolute
        top 0
        left 0
        background-color #ff6d00
      &-order
        position absolute
        top 0
        right 0
        background-color #45ca5c
      &-enroll
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        z-index 3
        border-radius 50%
        background-color #007bff
        box-shadow 0 0 .08rem .3rem #f3e94d
      &-search
        position absolute
        top 2.4rem
        left 0
        transform translateY(50%)
        background-color #663db5
      &-quit
        position absolute
        top 2.4rem
        right 0
        transform translateY(50%)
        background-color #ff392B
</style>
