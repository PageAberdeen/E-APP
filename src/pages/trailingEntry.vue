<template>
  <div class="trailingEntry">
    <h5 class="system-title">柳州市弯塘小学新生自助报名及预约系统</h5>
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
    </form>
  </div>
</template>

<script>
  
  import relation from '../components/pageRelation.vue'
  export default {
    name: 'relation',
    components: {
      'relation-slt': relation
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
