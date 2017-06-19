<template>
  <select  class="site-box">
    <option v-for="(relation,index) in relations" :value="index">{{relation.text}}</option>
  </select>
</template>

<script>
  export default {
    data: function () {
      return {
        relations: [
          {
            text: '父子'
          },{
            text: '父女'
          },{
            text: '母子'
          },{
            text: '母子'
          },{
            text: '母女'
          },{
            text: '祖孙'
          },{
            text: '其他'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
