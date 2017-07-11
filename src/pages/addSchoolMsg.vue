<template>
  <div class="addSchool container">
    <h1 class="title">创建负责人</h1>
    <form action="" class="school-msg">
      <fileBox></fileBox>
      <input type="text" class="text-input icon-user" placeholder="设置管理员账户">
      <input type="password" class="text-input icon-password" placeholder="设置密码">
    </form>
    <a href="#/schoolLogin" class="btn link-btn">确认开通</a>
  </div>
</template>

<script>
  import fileBox from '../components/pageFile.vue'
  export default {
    name: 'schoolMsg',
    components: {
      'fileBox': fileBox
    },
    mounted: function () {
      document.getElementById('file').onchange = function () {
        let imgFile = this.files[0]
        let fr = new FileReader()
        fr.onload = function () {
          document.getElementById('img').src = fr.result
        }
        fr.readAsDataURL(imgFile)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .addSchool
    background url(../assets/images/login.jpg) no-repeat
    background-size cover
  .school-msg
    margin: 0 0 .8rem 0;
  .title
    text-align center
    height 1.6rem
    font-size .36rem
    line-height 2rem
</style>
