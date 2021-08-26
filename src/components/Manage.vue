<!--
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-06-23 11:39:02
 * @LastEditTime: 2021-08-09 17:23:39
 * @LastEditors: 彭祥飞（pengXiangfei）
 * @Description:
-->
<template>
  <div class="Manage">
    <el-container>
      <el-header>
        <div class="header">相亲平台人才库</div>
      </el-header>
      <el-container>
        <el-aside width="200px"><Aside></Aside></el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './Asside.vue'
export default {
  components: {
    Aside
  }
}
</script>

<style lang="scss">
.Manage {
  height: 100%;
  .el-container {
    height: 100%;
    overflow: hidden;
  }
  .el-header {
    line-height: 60px;
    font-size: 18px;
    color: #516881;
    border-bottom: 1px solid #dddddd;
    box-shadow: 0px 0px 6px #b1b1b1;
  }
  .el-main {
    margin: 12px;
    border-radius: 6px;
    box-shadow: 1px 2px 6px #b1b1b1;
  }
}
</style>
