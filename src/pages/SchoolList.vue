<template>
  <div class="schoolList">
    <div class="schoolList-top">
      <input type="text" class="search icon-search" placeholder="请输入预约学校名称">
    </div>
    <div class="schoolList-main">
      <a href="#/studentLogin">
        <dl class="clearfix list-box">
          <dt class="school-logo">
            <img src="../assets/images/wtlogo.png" alt="">
          </dt>
          <dd class="schoolName">柳州市弯塘路小学</dd>
          <dd class="schoolTitle">学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述           </dd>
        </dl>
      </a>
      <a href="">
        <dl class="clearfix list-box">
          <dt class="school-logo">
            <img src="../assets/images/wtlogo.png" alt="">
          </dt>
          <dd class="schoolName">柳州市弯塘路小学</dd>
          <dd class="schoolTitle">学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述学校描述           </dd>
        </dl>
      </a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.schoolList
  height 100%
  padding .4rem
  background url(../assets/images/schoolList.jpg) no-repeat
  background-size cover
  &-top
    position fixed
    top: 0
    left: 0
    width: 100%
    background-color rgba(0,0,0,.2)
  &-main
    margin-top 1rem
    color #fff
  
  .search
    margin .2rem auto
    width 87%
    border-radius .3rem
    padding-left .8rem
    background-color transparent
  .list-box
    overflow hidden
    border-top 1px solid #ddd
    padding-top .2rem
    color #fff
  .school-logo
    float left
    padding .1rem
    margin-right .2rem
    background-color rgba(255,255,255,.6)
    border-radius .1rem
  .schoolName
    font-size .32rem
  .schoolTitle
    margin-top .26rem
    overflow hidden
    font-size .28rem
    text-overflow ellipsis
    display -webkit-box
    -webkit-box-orient vertical
    -webkit-line-clamp 2
  vertical-align bottom
</style>
