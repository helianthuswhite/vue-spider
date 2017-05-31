<template>
  <el-row class="header">
    <el-col :span="6">
      <span class="logo">Spider</span>
    </el-col>
    <el-col :span="12">
      <el-menu class="el-menu-header-index" :default-active="activeIndex" mode="horizontal">
        <el-menu-item index="1" >首页</el-menu-item>
        <el-menu-item index="2">爬虫市场</el-menu-item>
        <el-menu-item index="3">了解我们</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">开源代码</a></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6">
      <el-row>
        <el-col :span="12" :offset="8">
          <el-menu class="el-menu-header-login" mode="horizontal">
        <el-menu-item index="1"><a href="https://www.ele.me" target="_blank">登录</a></el-menu-item>
        <el-menu-item index="2"><a href="https://www.ele.me" target="_blank">注册</a></el-menu-item>
      </el-menu>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    };
  }
};
</script>

<style lang="less">
  .header {
    height: 60px;
    background: rgb(32, 160, 255);
    .logo {
      margin-left: 30px;
      color: #fff;
      font-weight: 700;
      font-size: 30px;
      line-height: 60px;
    }
    .el-menu-header-index {
      background: rgb(32, 160, 255);
      .el-menu-item {
        color: #fff;
        opacity: 0.8;
        &.is-active {
          opacity: 1;
          font-weight: 700;
          border-bottom: solid 5px rgb(153, 210, 252);
        }
        &:hover {
          background: rgb(32, 160, 255);
          opacity: 1;
          font-weight: 700;
        }
      }
    }
    .el-menu-header-login {
      display: flex;
      align-items: center;
      height: 60px;
      background: rgb(32, 160, 255);
      .el-menu-item {
        color: #fff;
        border: solid 1px #fff;
        border-radius: 10px;
        height: 30px;
        line-height: 30px;
        margin-left: 15px;
        &:hover {
          color: rgb(32, 160, 255);
        }
      }
    }
  }
</style>
