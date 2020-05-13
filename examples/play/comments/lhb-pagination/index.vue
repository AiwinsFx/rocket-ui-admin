<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    }
  },
}
</script>
<style lang="scss">
.el-pagination .el-select .el-input .el-input__inner {
  border: none;
   background: #ffffff !important;
}
.el-pagination .btn-prev, .el-pagination .btn-next{
  color: #888888;
}
.el-pagination button:disabled{
  color:#bbbbbb ;
}
.el-pagination .el-pager{
  color: #444444;
}
.el-pagination__editor.el-input .el-input__inner{
  height: 26px;
}
.el-pagination .el-input__suffix{
  right: 10px;
}
</style>
<style lang="scss" scoped>
.el-pagination::before,
.el-pagination::after {
  display: none;
}
.el-pagination {
  display: flex;
  justify-content: space-between;
}
</style>
