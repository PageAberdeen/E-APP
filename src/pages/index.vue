<template>
  <div class="home">
    <h1 class="home-title">XXX预约报名平台</h1>
    <div class="home-link-box">
      <a href="#/school" class="home-link school-in">学校入口</a>
      <a href="#/student" class="home-link student-in">新生报名入口</a>
      <a href="#/instructions" class="home-link help-in">使用文档</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .home
    height 100%
    padding .2rem
    background url(../assets/images/homebg.jpg) no-repeat center
    background-size cover
    .home-title
      text-align center
      height 2rem
      font-size .36rem
      line-height 2rem
    .home-link-box
      position relative
      width 100%
      height 6rem
    .home-link
      width 2.8rem
      height 2.8rem
      line-height 2.8rem
      color #fff
      text-align center
      font-size .36rem
      background-color #00bb00
      box-shadow -.02rem .02rem .2rem 0 #000;
    .student-in
      position absolute
      top 1.6rem
      left 1.6rem
      z-index 3
      border-radius 50%
      background-color #00a0df
      box-shadow 0 0 0 .3rem #f3e94d
    .help-in
      position absolute
      top 3.2rem
      left 3.2rem
      background-color #7d0000
      box-shadow .02rem .02rem .2rem 0 #000;
</style>
