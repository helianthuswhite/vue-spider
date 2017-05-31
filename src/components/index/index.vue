<template>
  <div class="index">
    <v-header></v-header>
    <el-row type="flex" justify="center" align="middle" class="content-wrapper">
      <el-col :span="8">
        <el-row class="content">
          <el-input placeholder="请输入内容" v-model="searchInput">
            <el-button slot="append">搜索一下</el-button>
          </el-input>
        </el-row>
      </el-col>
    </el-row>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '../header/header';
import footer from '../footer/footer';

export default {
  components: {
    'v-header': header,
    'v-footer': footer
  },
  data() {
    return {
      searchInput: ''
    };
  }
};
</script>

<style lang="less">
  html,body {
    height: 100%;
  }
  .index {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    .content-wrapper {
      position: absolute;
      box-sizing: border-box;
      top: 0;
      z-index: -10;
      width: 100%;
      height: 100%;
      padding: 60px 0;
      .content {
        .el-input-group__append {
          color: #fff;
          background: rgb(32, 160, 255);
        }
      }
    }
  }
</style>
