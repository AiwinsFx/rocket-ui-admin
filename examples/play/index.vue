<template>
  <div style="margin: 20px;">
    <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
    <el-tag class="tags" type="success">标签二</el-tag>
    <el-alert title="成功提示的文案" type="success"> </el-alert>
    <el-button type="primary">11</el-button>
    <el-button>默认按钮</el-button>
    <lhb-select></lhb-select>
    <lhb-input></lhb-input>
  </div>
</template>

<script>
// import LhbSelect from './comments/lhb-select/ceshi'
import LhbSelect from './comments/lhb-select/demo1'
// import LhbSelect from './comments/select/index'
import LhbInput from './comments/input/index'
export default {
  components:{LhbSelect,LhbInput},
  data() {
    return {
      input: 'Hello Element UI!',
    }
  },
  mounted(){

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
