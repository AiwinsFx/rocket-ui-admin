<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-tag class="tags" type="success">标签二</el-tag>
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
<style lang="scss">

</style>
