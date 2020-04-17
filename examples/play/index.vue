<template>
  <div style="margin: 20px;">
    <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
    <el-tag class="tags" type="success">标签二</el-tag>
    <el-alert title="成功提示的文案" type="success"> </el-alert>
    <el-button type="primary">11</el-button>
    <el-button>默认按钮</el-button>
    <lhb-select></lhb-select>
  </div>
</template>

<script>
import LhbSelect from './comments/select/index'
export default {
  components:{LhbSelect},
  data() {
    return {
      input: 'Hello Element UI!',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
<style lang="scss"></style>
