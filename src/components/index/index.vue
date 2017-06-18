<template>
  <div class="index">
    <v-header activeIndex="/"></v-header>
    <el-row type="flex" justify="center" align="middle" class="content-wrapper">
      <el-col :span="8">
        <el-row class="content">
          <el-input placeholder="请输入需要查找的爬虫信息" v-model="searchInput">
            <el-button slot="append" @click="search">搜索一下</el-button>
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
  },
  methods: {
    search() {
      this.$http.get('/spiders').then(response => {
        if (response.body.ok === 0) {
          this.$router.push({ name: 'market', params: { searchInput: this.searchInput } });
        }
      });
    }
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
    .footer {
      position: absolute;
      bottom: 0;
    }
  }
</style>
