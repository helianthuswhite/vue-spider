<template>
  <div class="market">
    <v-header></v-header>
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
    <div class="market-wrapper">
      <div class="condition clearfix">
        <div class="type clearfix">
          <div class="title">价格</div>
          <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="type">
          <div class="title">关键字</div>
          <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="result">
        222
      </div>
    </div>
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
      searchInput: '',
      radio3: '上海'
    };
  }
};
</script>

<style lang="less">
  .market {
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
    .market-wrapper {
      position: relative;
      margin: 0 auto;
      width: 1200px;
      .condition {
        padding: 30px 0;
        border-bottom: solid 1px #ccc;
        .type {
          position: relative;
          margin: 15px 0;
          .title {
            float: left;
            width: 50px;
            padding: 0px 20px;
            line-height: 44px;
            border-right: solid 1px #7e8c8d;
          }
          .el-radio-group {
            float: left;
            max-width: 1080px;
            margin-left: 20px;
            .el-radio-button {
              margin: 5px 0;
              .el-radio-button__inner {
                border: none;
                border-radius: 0;
                padding: 10px 20px;
              }
            }
          } 
        }
      }
    }
  }
</style>
