<template>
  <div class="file-box" id="fileBox">
    <p class="file-text">上传学校logo</p>
    <input type="file" id="file" class="file-btn">
    <p class="img-box"><img src="" alt="" class="show-file" id="img"></p>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .file-box
    position relative
    margin-bottom 2.4rem
  .file-text
    text-align center
  .img-box
    margin-top .3rem
    text-align center
  .file-btn
    position absolute
    top 0
    left 0
    opacity 0
    z-index 2
  .show-file
    width 2.4rem
    height 1.8rem
</style>
