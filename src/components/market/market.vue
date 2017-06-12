<template>
  <div class="market">
    <marketHeader></marketHeader>
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
      <div class="sort clearfix">
        <div class="sort-content">
          综合排序
          <div class="sort-button">
            <i class="sort-caret ascending"></i>
            <i class="sort-caret descending"></i>
          </div>
        </div>
        <div class="sort-content">
          使用人数
          <div class="sort-button">
            <i class="sort-caret ascending"></i>
            <i class="sort-caret descending"></i>
          </div>
        </div>
        <div class="sort-content">
          更新时间
          <div class="sort-button">
            <i class="sort-caret ascending"></i>
            <i class="sort-caret descending"></i>
          </div>
        </div>
      </div>
      <div class="result">
        <el-row class="result-content">
          <el-col :span="6" class="result-wrapper">
            <router-link to="/apidetail" class="result-card">
              <img src="" class="image">
              <span class="title">哈哈哈牛逼的API</span>
              <p class="time-price clearfix">
                <span class="time">已使用1000次</span>
                <span class="price">1000次/5元起</span>
              </p>
            </router-link>
          </el-col>
          </el-col>
        </el-row>
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import marketHeader from './marketHeader';
import footer from '../footer/footer';

export default {
  components: {
    marketHeader,
    'v-footer': footer
  },
  data() {
    return {
      radio3: '上海'
    };
  }
};
</script>

<style lang="less">
  .market {
    position: relative;
    z-index: 1;
    .market-wrapper {
      position: relative;
      margin: 0 auto;
      width: 1200px;
      .condition {
        padding: 30px 0;
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
      .sort {
        border: solid 1px #ccc;
        .sort-content {
          position: relative;
          float: left;
          padding: 15px 20px;
          border-right: solid 1px #ccc;
          .sort-button {
            display: inline-block;
            .sort-caret {
              position: absolute;
              display: inline-block;
              width: 0;
              height: 0;
              border: 0;
              content: "";
              border-right: 5px solid transparent;
              border-left: 5px solid transparent;
              &.descending {
                bottom: 17px;
                border-bottom: none;
                border-top: 5px solid #97a8be;
              }
              &.ascending {
                top: 17px;
                border-top: none;
                border-bottom: 5px solid #97a8be;
              }
            }
          }
        }
      }
      .result {
        .result-content {
          .result-wrapper {
            padding: 15px;
            &:first-child {
              padding-left: 0;
            }
            &:last-child {
              padding-right: 0;
            }
            .result-card {
              display: block;
              color: #000;
              border: solid 1px #ccc; 
              &:hover {
                .title {
                  color: #20a0ff;
                  text-decoration: underline;
                }
                border: solid 1px #20a0ff;
              }
              .image {
                width: 100%;
                height: 170px;
              }
              .title {
                display: block;
                text-align: center;
                line-height: 30px;
              }
              .time-price {
                line-height: 50px;
                background: #f0f0f0;
                color: #7e8c8d;
                font-size: 14px;
                .time {
                  margin-left: 15px;
                  float: left;
                }
                .price {
                  margin-right: 15px;
                  float: right;
                  color: #f00;
                }
              }
            }
          }
        }
        .el-pagination {
          text-align: center;
          margin: 50px auto;
        }
      }
    }
  }
</style>
