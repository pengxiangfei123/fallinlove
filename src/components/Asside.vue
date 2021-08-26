<!--
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-06-23 14:01:22
 * @LastEditTime: 2021-08-09 16:39:12
 * @LastEditors: 彭祥飞（pengXiangfei）
 * @Description:
-->
<template>
  <div class="Aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="routerLink('/Home')">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="routerLink('/Information')">
        <i class="el-icon-picture"></i>
        <span slot="title">人才库</span>
      </el-menu-item>
      <el-menu-item index="3" @click="routerLink('/InformationDetall')">
        <i class="el-icon-circle-plus"></i>
        <span slot="title">新增人才库</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    routerLink (Path) {
      this.$router.push(Path)
    }
  }
}
</script>

<style scoped lang="scss">
.Aside {
  height: 100%;
}
.el-menu-vertical-demo {
  height: 100%;
  background-color: #545c64;
  /deep/ .is-active {
    background-color: darkcyan !important;
  }
}
</style>
