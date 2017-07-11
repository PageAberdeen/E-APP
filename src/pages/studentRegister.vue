<template>
  <div class="studentRegister container">
    <p class="studentRegister-logo">
      <img src="../assets/images/logo.jpg" alt="" class="studentRegister-logo-image">
    </p>
    <h1 class="studentRegister-title">用户注册</h1>
    <form action="" class="studentRegister-admin">
      <input type="text" class="text-input icon-user" placeholder="请输入您的账户名">
      <input type="password" class="text-input icon-password" placeholder="请输入您的密码">
    </form>
    <a href="#/studentLogin" class="btn link-btn">注册</a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .studentRegister
    padding .8rem
    background url(../assets/images/Login.jpg) no-repeat
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
