<template>
  <div class="openSource">
    <v-header activeIndex="/openSource"></v-header>
    <el-row type="flex" justify="center" align="middle" class="content-wrapper">
      <el-col :span="12">
        <el-row class="content">
          很抱歉，代码暂无开源计划。
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
  .openSource {
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
        text-align: center;
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
    }
  }
</style>
