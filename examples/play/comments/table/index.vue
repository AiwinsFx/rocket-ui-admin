<template>
<!--       :custom-filter="true"
      @custom-filter="filterSelect" -->
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @sort-change="changeSort"
      @filter-change="filterChange"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="120"
        column-key="date"
        filter-placement="bottom-end"
        :filter-multiple="false"
        :filters="[
          { text: '2016-05-01', value: '2016-05-01' },
          { text: '2016-05-02', value: '2016-05-02' },
          { text: '2016-05-03', value: '2016-05-03' },
          { text: '2016-05-04', value: '2016-05-04' },
        ]"
        :filter-method="filterHandler"
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column sortable='custom' prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column
       prop="address" 
      label="地址" 
        :filters="
[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >切换第二、第三行的选中状态</el-button
      >
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        // {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄',
        // },
      ],
      multipleSelection: [],
    }
  },

  methods: {
        changeSort(val){
      console.log('自定义筛选',val);
      // this.query.order = val.prop;
      // (val.order=="descending") ? (this.query.sort='desc'):((val.order=="ascending")?(this.query.sort='asc'):'')
      // console.log(val.order,this.query.sort);
      // this.getCoupons()
    },
    filterSelect(val,key){
      console.log('自定义的筛选事件',val,key);
    },
    filterChange(val1){
      console.log('筛选条件',val1)
      // console.log('val1',val1,'val2',val2);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    filterHandler(value, row, column) {
      // console.log('筛选的内容',value,row,
      // column)
    //   this.tableData = [
    //            {
    //       date: '2016-05-03',
    //       name: '王小虎',
    //       address: '上海市普陀区金沙江路 1518 弄',
    //     }
    //  ];
    //  return this.tableData
        //  return this.tableData = [];
      // const property = column['property']
      // return row[property] === value
    },
  },
}
</script>
<style lang="scss">
  .el-table .sort-caret.ascending{
    border-bottom-color: #888888;
  }
</style>
