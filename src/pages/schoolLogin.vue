<template>
  <div class="schoolLogin container">
    <p class="schoolLogin-logo">
      <img src="../assets/images/logo.jpg" alt="" class="schoolLogin-logo-image">
    </p>
    <h1 class="schoolLogin-title">管理员登录</h1>
    <form action="" class="schoolLogin-admin">
      <input type="text" class="text-input icon-catti" placeholder="输入管理员账户">
      <input type="password" class="text-input icon-activate" placeholder="输入密码">
    </form>
    <a href="#/adminMenu" class="btn link-btn">登录</a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .schoolLogin
    padding .8rem
    background url(../assets/images/login.jpg) no-repeat
    background-size cover
    &-logo
      margin 0 auto
      width 3rem
      height 3rem
      text-align center
     &-logo-image
      width 3rem
    &-admin
      margin .4rem 0
    &-title
      margin-top .2rem
      font-size .36rem
      text-align center
      color #fff
</style>
