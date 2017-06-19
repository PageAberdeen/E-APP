<template>
  <div class="trailing">
    <h5 class="system-title">柳州市弯塘小学新生自助报名及预约系统</h5>
    <ul class="trailing-main">
      <li>你的居住证明地址在：</li>
      <li><site-slt></site-slt></li>
      <li class="age-limit">你已在此处居住年限</li>
      <li class="radio-box">
        <b class="radio-btn active">1~4年</b>
        <b class="radio-btn">5年及以上</b>
      </li>
      <li><router-link class="form-btn" to="/trailing">确认提交</router-link></li>
    </ul>
  </div>
</template>

<script>
  import siteSlt from '../components/pageEntry.vue'
  export default {
    name: 'pageEntry',
    components: {
      'site-slt': siteSlt
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .age-limit
    text-align center
  .radio-box
    text-align center
  .radio-btn
    padding .05rem .1rem
    border 1px solid #ddd
    border-radius 5px
  .radio-btn.active
    border .01rem solid #e74649
</style>
