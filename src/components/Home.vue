<!--
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-06-23 14:26:32
 * @LastEditTime: 2021-08-10 11:05:37
 * @LastEditors: 彭祥飞（pengXiangfei）
 * @Description:
-->
<template>
  <div>
    <h4>首页</h4>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" label="姓名" width="80"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="80"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="80"> </el-table-column>
      <el-table-column prop="education" label="学历" width="80">
      </el-table-column>
            <el-table-column prop="height" label="身高" width="80">
      </el-table-column>
      <el-table-column prop="moneyNumber" label="收入范围" width="150"> </el-table-column>
      <el-table-column prop="houseAddress" label="家庭地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: '刘亦菲',
          age: '21',
          gender: '男',
          education: '本科',
          height: '1.75',
          moneyNumber: '15000~20000',
          houseAddress: '三里屯二道沟108号'
        },
        {
          name: '刘亦菲',
          age: '21',
          gender: '男',
          education: '本科',
          height: '1.75',
          moneyNumber: '15000~20000',
          houseAddress: '三里屯二道沟108号'
        },
        {
          name: '刘亦菲',
          age: '21',
          gender: '男',
          education: '本科',
          height: '1.75',
          moneyNumber: '15000~20000',
          houseAddress: '三里屯二道沟108号'
        },
        {
          name: '刘亦菲',
          age: '21',
          gender: '男',
          education: '本科',
          height: '1.75',
          moneyNumber: '15000~20000',
          houseAddress: '三里屯二道沟108号'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
h4 {
  padding: 0;
  margin: 0;
  height: 40px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
</style>
