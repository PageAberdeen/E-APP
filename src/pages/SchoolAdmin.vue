<template>
  <div class="school container">
    <h1 class="title">注册学校</h1>
    <form action="" class="school-msg">
      <input type="text" class="text-input icon-school" placeholder="请输入您所在的学校名称">
      <input type="text" class="text-input icon-catti" placeholder="请输入您所在学校组织机构码">
      <input type="text" class="text-input icon-activate" placeholder="请输入平台激活码">
    </form>
    <a href="#/addSchoolMsg" class="btn link-btn">申请开通</a>
    <a href="#/schoolLogin" class="btn link-btn">登录学校管理后台</a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .school
    background url(../assets/images/login.jpg) no-repeat
    background-size cover
  .school-msg
    margin .8rem 0
  .title
    text-align center
    height 1.6rem
    font-size .36rem
    line-height 2rem
</style>
