<template>
  <select  class="site-box">
    <option v-for="site in sites" :value="site.value">{{site.text}}</option>
  </select>
</template>

<script>
  export default {
    data: function () {
      return {
        sites: [
          {
            text: '请选择您户口所在路段',
            value: -1
          },
          {
            text: '潭中东路与桂中大道交界以东所含区域',
            value: 0
          },{
            text: '文华路',
            value: 1
          },{
            text: '晨华路',
            value: 2
          },{
            text: '文兴路',
            value: 3
          },{
            text: '桂中大道与瑞康路交界以东区域',
            value: 4
          },{
            text: '文昌路',
            value: 5
          },{
            text: '东环大道与文昌路交界路段以北区域',
            value: 6
          },{
            text: '学院路南段中心线以东',
            value: 7
          },{
            text: '桂柳路',
            value: 8
          },{
            text: '静兰路',
            value: 9
          },{
            text: '北站路',
            value: 10
          },{
            text: '三中路',
            value: 11
          },{
            text: '弯塘路、友谊路、滨江东路41栋',
            value: 12
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
