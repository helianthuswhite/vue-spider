<template>
  <div class="api-detail">
    <marketHeader></marketHeader>
    <div class="api-detail-wrapper">
      <div class="summary clearfix">
        <div class="api-card">
          <img src="" class="image">
          <p class="time-price clearfix">
            <span class="time">已使用1000次</span>
            <span class="price">1000次/5元起</span>
          </p>
        </div>
        <div class="api-info">
          <h2 class="title">牛逼闪闪的API</h2>
          <div class="price">
            价格：
            <span class="text">￥5元</span> 起
            <a href="#" class="buy">购买API套餐</a>
          </div>
          <div class="info">
            <div class="row">
              套餐使用期限：
              <span class="time">自购买一年期限有效</span>
            </div>
            <div class="row">
              服务供应商：
              <span class="blank-right">Helianthuswhite</span>
              更新时间：
              <span class="blank-right">2018-09-11</span>
            </div>
            <div class="row">
              apikey：
              <a href="helianthuswhite.cn" class="get-apikey">获取apikey</a>
            </div>
            <div class="row intro">
              <span class="intro-title">服务简介：</span>这就是简介，非常非常牛逼的简介，我说这很牛逼你在还不信呢，你不信算了，反正就是这么牛逼，不想跟你说了，我还要撸代码呢。
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="API" name="first">
            
          </el-tab-pane>
          <el-tab-pane label="联系商家" name="second" class="contact">
            <div class="title">联系方式</div>
            <table>
              <tr class="row">
                <td class="col"><img src="./img/qq.png" class="image"></td>
                <td class="col">客服QQ：</td>
                <td class="col">964873559</td>
              </tr>
              <tr class="row">
                <td class="col"><img src="./img/tel.png" class="image"></td>
                <td class="col">客服电话：</td>
                <td class="col">18245010634</td>
              </tr>
              <tr class="row">
                <td class="col"><img src="./img/email.png" class="image"></td>
                <td class="col">客服邮箱：</td>
                <td class="col">hyz19960229@gamil.com</td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="套餐" name="third">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="name"
                label="套餐名称">
              </el-table-column>
              <el-table-column
                prop="time"
                label="使用次数">
              </el-table-column>
              <el-table-column
                prop="price"
                label="套餐价格">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="错误码参照" name="fourth">角色管理</el-tab-pane>
          <el-tab-pane label="交易记录" name="fifth">定时任务补偿</el-tab-pane>
        </el-tabs>
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
      activeName: '',
      tableData: [{
        name: '牛逼闪闪的套餐一',
        time: '666次',
        price: '666元'
      }, {
        name: '牛逼闪闪的套餐二',
        time: '66666次',
        price: '6661213元'
      }]
    };
  }
};
</script>

<style lang="less">
  .api-detail {
    .api-detail-wrapper {
      position: relative;
      margin: 50px auto;
      width: 1200px;
      .summary {
        position: relative;
        .api-card {
          float: left;
          border: solid 1px #EDEDED;
          .image {
            width: 250px;
            height: 200px;
          }
          .time-price {
            line-height: 50px;
            background: #f8f8f8;
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
        .api-info {
          width: auto;
          margin-left: 300px;
          .title {
            font-weight: 700;
            font-size: 25px;
            height: 50px;
            vertical-align: top;
          }
          .price {
            padding: 0 30px;
            color: #7e8c8d;
            background: #F8F8F8;
            border-top: solid 1px #EDEDED;
            border-bottom: solid 1px #EDEDED;
            .text {
              font-size: 25px;
              color: #F00;
              line-height: 80px;
            }
            .buy {
              display: inline-block;
              width: 150px;
              background: #FA9300;
              color: #fff;
              margin-left: 100px;
              text-align: center;
              line-height: 50px;
            }
          }
          .info {
            .row {
              margin: 20px 0;
              color: #7e8c8d;
              line-height: 30px;
              .time,
              .blank-right,
              &.intro {
                color: #000;
              }
              .intro-title {
                color: #7e8c8d;
              }
              .blank-right {
                margin-right: 50px;
              }
              .get-apikey {
                color: #20a0ff;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
      .details {
        margin: 50px 0;
        .el-tabs__header {
          background: #f8f8f8;
          border: none;
          margin: 30px 0;
          .el-tabs__item {
            width: 100px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            &.is-active {
              color: #fff;
              border-radius: 0;
              background: #20a0ff;
            }
          }
        }
        .contact {
          .title {
            margin: 30px 0;
          }
          .row {
            .col {
              width: 100px;
              height: 60px;
              vertical-align: middle;
              .image {
                width: 40px;
                height: 40px;
              }
            }
          }
        }
      }
    }
  }
</style>
