<template>
  <div class="studentLogin container">
    <p class="studentLogin-logo">
      <img src="../assets/images/logo.jpg" alt="" class="studentLogin-logo-image">
    </p>
    <h1 class="studentLogin-title">用户登录</h1>
    <form action="" class="studentLogin-admin">
      <input type="text" class="text-input icon-user" placeholder="请输入您的账户名">
      <input type="password" class="text-input icon-password" placeholder="请输入您的密码">
    </form>
    <a href="#/studentMenu" class="btn link-btn">登录</a>
    <a href="#/studentRegister" class="btn link-btn">注册</a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .studentLogin
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
