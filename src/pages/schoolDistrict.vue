<template>
  <div class="district">
    <h5 class="system-title">柳州市弯塘小学新生自助报名及预约系统</h5>
    <ul class="district-main">
      <li>请按提示完善新生报名信息：</li>
      <li>您是:<router-link class="jump-title" to="/trailing">学区生随迁子女</router-link></li>
      <li>你的房产证地址在：</li>
      <li><site-slt></site-slt></li>
      <li><router-link class="form-btn" to="/campus">确认提交</router-link></li>
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

</style>
