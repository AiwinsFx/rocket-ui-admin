<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-tag class="tags" type="success">标签二</el-tag>
    <el-alert title="成功提示的文案" type="success"></el-alert>
    <el-button type="primary">11</el-button>
    <el-button @click="open">默认按钮</el-button>
    <lhb-select></lhb-select>
    <lhb-input></lhb-input>
    <lhb-picker></lhb-picker>
    <lhb-table></lhb-table>
    <lhb-pagination></lhb-pagination>
    <lhb-tree></lhb-tree>
    <el-cascader :options="options" :props="{ expandTrigger: 'hover' }"></el-cascader>
  </div>
</template>

<script>
// import LhbSelect from './comments/lhb-select/ceshi'
import LhbSelect from "./comments/lhb-select/demo1";
// import LhbSelect from './comments/select/index'
import LhbInput from "./comments/input/index";
import LhbPicker from "./comments/date-picker/index";
import LhbTable from "./comments/table/index";
import LhbPagination from "./comments/lhb-pagination/index";
import LhbTree from "./comments/lhb-tree/index";
export default {
  components: {
    LhbSelect,
    LhbInput,
    LhbPicker,
    LhbTable,
    LhbPagination,
    LhbTree
  },
  data() {
    return {
      input: "Hello Element UI!",
      options: [
        {
          value: "经纪人",
          label: "经纪人",
          children: [
            {
              value: "底薪经纪人",
              label: "底薪经纪人"
            },
            {
              value: "实习经纪人",
              label: "实习经纪人"
            }
          ]
        },
        {
          value: "经理",
          label: "经理",
          children: [
            {
              value: "实习经理",
              label: "实习经理"
            },
            {
              value: "职能经理",
              label: "职能经理"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    open() {
      this.$confirm(`是否移除该岗位？`, "移除部门提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(() => {

        })
        .catch(() => {
          console.log("已取消");
        });
    }
  }
};
</script>
<style lang="scss"></style>
