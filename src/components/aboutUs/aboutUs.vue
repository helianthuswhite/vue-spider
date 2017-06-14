<template>
  <div class="aboutUs">
    <v-header></v-header>
    <el-row type="flex" justify="center" align="middle" class="content-wrapper">
      <el-col :span="12">
        <el-row class="content">
          <h2 class="title">关于我们</h2>
          <p class="sen">我们致力于打造一个以爬虫为中心，通过爬虫以及爬取到的数据形成市场的平台，让更多的用户能够成本更加低廉的爬取自己想要的信息，并且为那些拥有编写爬虫技能的开发者提供一个价值变现的机会。</p>
          <p class="sen">平台的主要功能包括爬虫搜索、爬虫市场、爬取数据、爬虫API调用、数据分析等，为人们爬取信息提供一站式爬虫服务。</p>
          <p class="sen">团队成员为哈尔滨工业大学计算机学院本科三年级学生，包括刘星焜、黄运智、贾智斌、董乐天。</p>
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
  .aboutUs {
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
        .title {
          text-align: center;
          font-size: 30px;
          margin-bottom: 50px;
        }
        .sen {
          line-height: 1.5;
          margin-bottom: 30px;
        }
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
    }
  }
</style>
