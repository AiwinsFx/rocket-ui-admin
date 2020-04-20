<template>
  <div>
    <fat-select v-model="inputValue">
      <fat-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        >{{ item.label }}</fat-option
      >
    </fat-select>
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import fatSelect from './index';
import FatOption from '../lhb-option/index';
export default {
  components:{fatSelect,FatOption},
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
          
        },
      ],
      inputValue: '选项2',
    }
  },
}
</script>

<style lang="scss" scoped></style>
