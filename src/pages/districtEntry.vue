<template>
  <div class="districtEntry">
    <h5 class="system-title">新生资料填写</h5>
    <form action="" class="districtEntry-form">
      <label for="">新生姓名：</label>
      <input type="text" placeholder="请输入您的姓名">
      <label for="">性别：</label>
      <select name="" class="sex-btn">
        <option value="0">男</option>
        <option value="1">女</option>
      </select>
      <label for="">出生年月日：</label>
      <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="请输入出生年月日"/>
      <label for="">身份证号：</label>
      <input type="text" placeholder="请输入您的姓名">
      <label for="">户口地址：</label>
      <site-slt></site-slt>
      <label for="">父亲姓名：</label>
      <input type="text" placeholder="请输入您父亲姓名">
      <label for="">父亲工作单位：</label>
      <input type="text" placeholder="请输入您父亲工作单位">
      <label for="">父亲联系电话：</label>
      <input type="text" placeholder="请输入您父亲联系电话">
      <label for="">父亲身份证号：</label>
      <input type="text" placeholder="请输入您父亲身份证号">
      <label for="">母亲姓名：</label>
      <input type="text" placeholder="请输入您母亲姓名">
      <label for="">母亲工作单位：</label>
      <input type="text" placeholder="请输入您母亲工作单位">
      <label for="">母亲联系电话：</label>
      <input type="text" placeholder="请输入您母亲联系电话">
      <label for="">母亲身份证号：</label>
      <input type="text" placeholder="请输入您母亲身份证号">
      <label for="">房产地址：</label>
      <input type="text" placeholder="请输入房产地址">
      <label for="">房产证编号：</label>
      <input type="text" placeholder="请输入房产证编号">
      <label for="">房产权所有人姓名：</label>
      <input type="text" placeholder="请输入房产权所有人姓名">
      <label for="">新生与房产权所有人关系</label>
      <relation-slt></relation-slt>
      <label for="">房产证照片</label>
      <p class="file-box">
        点击上传您的房产证证明
        <input type="file" id="file" class="file-btn">
      </p>
      <img class="preview-img" id="image" src="" alt="预览图片">
      <a href="#studentMenu" class="btn link-btn mt40">提交</a>
    </form>
  </div>
</template>

<script>
  import siteSlt from '../components/pageEntry.vue'
  import relationSlt from '../components/pageRelation.vue'
  export default {
    name: 'pageEntry',
    components: {
      'site-slt': siteSlt,
      'relation-slt': relationSlt
    },
    mounted: function () {
      document.getElementById('file').onchange = function () {
        let imgFile = this.files[0]
        let fr = new FileReader()
        fr.onload = function () {
          document.getElementById('image').src = fr.result
        }
        fr.readAsDataURL(imgFile)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .districtEntry
    font-size 0
    padding 0 .2rem .4rem .2rem
    background url(../assets/images/7.jpg) no-repeat
    background-size cover
  .sex-btn
    margin-bottom .4rem
    width 100%
    height .62rem
    font-size .28rem
    background-color transparent
    & option
      font-size .28rem
  .site-box
    margin-bottom .4rem
  .districtEntry-form
    margin-top .4rem
  .file-box
    position relative
    line-height .38rem
    text-align center
  .file-btn
    position absolute
    top 0
    left 0
    opacity 0
  label
    display inline-block
    width 100%
    margin-bottom .1rem
    font-size .28rem
    font-weight 700
  .preview-img
    width 100%
    height 3.2rem
  input[type=text]
    background-color transparent
</style>
