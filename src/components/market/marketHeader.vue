<template>
  <div class="market-header">
    <v-header activeIndex="/market"></v-header>
    <el-row type="flex" justify="center" align="middle" class="search-wrapper">
      <el-col :span="4">
        <span class="logo">Spider 🕷</span>
        <span class="text">一站式爬虫云市场</span>
      </el-col>
      <el-col :span="8" :offset="1">
        <el-row class="content">
          <el-input placeholder="请输入需要查找的爬虫信息" v-model="searchInput">
            <el-button slot="append">搜索一下</el-button>
          </el-input>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import header from '../header/header';

export default {
  components: {
    'v-header': header
  },
  data() {
    return {
      searchInput: ''
    };
  }
};
</script>

<style lang="less">
  .market-header {
    position: relative;
    z-index: 1;
    .search-wrapper {
      z-index: -10;
      padding: 60px 0;
      border: solid 1px #ccc;
      .logo {
        display: block;
        text-shadow: 5px 5px 0px #ccc;
        color: #000;
        text-align: center;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 50px;
      }
      .text {
        display: block;
        text-align: center;
        color: #7e8c8d;
      } 
      .content {
        .el-input-group__append {
          color: #fff;
          background: rgb(32, 160, 255);
        }
      }
    }
  }
</style>
