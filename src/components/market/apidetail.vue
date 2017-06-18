<template>
  <div class="api-detail">
    <v-header></v-header>
    <div class="api-detail-wrapper">
      <div class="summary clearfix">
        <div class="api-card">
          <img src="" class="image">
          <p class="time-price clearfix">
            <span class="time">已使用0次</span>
            <span class="price">免费</span>
          </p>
        </div>
        <div class="api-info">
          <h2 class="title">WxapiSpider</h2>
          <div class="price">
            价格：
            <span class="text">免费</span> 起
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
              <span class="intro-title">服务简介：</span>
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="API" name="first" class="api-use">
            <div class="api-use-panel">
              <div class="row">
                接口地址： http://helianthuswhite.cn/api/getPic
              </div>
              <div class="row">
                请求方法： POST
              </div>
              <div class="row">
                请求参数（header）： 
                <el-table
                  :data="apiHeaderTableData"
                  border
                  style="width: 100%" class="api-table">
                  <el-table-column
                    prop="name"
                    label="参数名称">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="参数类型">
                  </el-table-column>
                  <el-table-column
                    prop="must"
                    label="必填">
                  </el-table-column>
                  <el-table-column
                    prop="locat"
                    label="参数位置">
                  </el-table-column>
                  <el-table-column
                    prop="desc"
                    label="描述">
                  </el-table-column>
                  <el-table-column
                    prop="default"
                    label="默认值">
                  </el-table-column>
                </el-table>
              </div>
              <div class="row">
                请求参数（bodyParam）： 
                <el-table
                  :data="apiBodyTableData"
                  border
                  style="width: 100%" class="api-table">
                  <el-table-column
                    prop="name"
                    label="参数名称">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="参数类型">
                  </el-table-column>
                  <el-table-column
                    prop="must"
                    label="必填">
                  </el-table-column>
                  <el-table-column
                    prop="locat"
                    label="参数位置">
                  </el-table-column>
                  <el-table-column
                    prop="desc"
                    label="描述">
                  </el-table-column>
                  <el-table-column
                    prop="default"
                    label="默认值">
                  </el-table-column>
                </el-table>
              </div>
              <div class="row">
                请求示例： 
              </div>
              <div class="row">
                返回结果： 
                <div class="content">
                  {
                      "errNum": "0",
                      "errMsg": "success",
                      "querySign": "3845925467,2370020290",
                      "retData": [
                          {
                              "rect": {
                                  "left": "0",
                                  "top": "0",
                                  "width": "33",
                                  "height": "31"
                              },
                              "word": "  8"
                          }
                      ]
                  }

                  errNum   : 标识处理是否成功, 0: 表示成功, 其它值, 表示失败
                  errMsg   : 错误类型说明
                  querySign: 本次请求用户传递原图或rl的唯一标示, 方便定位问题
                  retData  : 返回内容集合
                  rect     :  {left, right, width, height}该行文字所在的矩形区域坐标: left, right, width, height
                  word     : 该行所识别出的文字
                </div>
              </div>
              <div class="row">
                备注： 
                <div class="content">
                  2016-5-10日起提供两种版本 v1 为原本使用的稳定版本，v2为升级版本，可以通过version参数进行选择，默认为v1版本同时即日起支持1M以内的大图片识别，对于原本支持的300K以内图片大小保持原有收费方案，对于大于300K，小于1M的图可以通过参数sizetype设定为big进行识别，但此时计费2次。即sizetype设定为small时为原本识别方案，仅识别300K以内的图片，sizetype设定为big时支持1M以内的图片识别，此时小于300K的图片计费1次，大于300K小于1M的计费2次。
                </div>
              </div>
            </div>
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
              :data="priceTableData"
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
          <el-tab-pane label="错误码参照" name="fourth">
            <el-table
              :data="errorTableData"
              border
              style="width: 100%">
              <el-table-column
                prop="name"
                label="错误码">
              </el-table-column>
              <el-table-column
                prop="time"
                label="错误码返回">
              </el-table-column>
              <el-table-column
                prop="price"
                label="错误码返回说明">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="交易记录" name="fifth">
            <el-table
              :data="boughtTableData"
              border
              style="width: 100%">
              <el-table-column
                prop="name"
                label="购买用户">
              </el-table-column>
              <el-table-column
                prop="time"
                label="购买套餐">
              </el-table-column>
              <el-table-column
                prop="price"
                label="购买时间">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
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
      activeName: 'first',
      priceTableData: [{
        name: '牛逼闪闪的套餐一',
        time: '666次',
        price: '666元'
      }, {
        name: '牛逼闪闪的套餐二',
        time: '66666次',
        price: '6661213元'
      }],
      errorTableData: [{
        name: '牛逼闪闪的套餐一',
        time: '666次',
        price: '666元'
      }, {
        name: '牛逼闪闪的套餐二',
        time: '66666次',
        price: '6661213元'
      }],
      boughtTableData: [{
        name: '牛逼闪闪的套餐一',
        time: '666次',
        price: '666元'
      }, {
        name: '牛逼闪闪的套餐二',
        time: '66666次',
        price: '6661213元'
      }],
      apiHeaderTableData: [{
        name: 'apikey',
        type: 'string',
        must: '是',
        locat: 'header',
        desc: 'API密钥',
        default: '默认值'
      }],
      apiBodyTableData: [{
        name: 'apikey',
        type: 'string',
        must: '是',
        locat: 'header',
        desc: 'API密钥',
        default: '默认值'
      }, {
        name: 'apikey',
        type: 'string',
        must: '是',
        locat: 'header',
        desc: 'API密钥',
        default: '默认值'
      }, {
        name: 'apikey',
        type: 'string',
        must: '是',
        locat: 'header',
        desc: 'API密钥',
        default: '默认值'
      }, {
        name: 'apikey',
        type: 'string',
        must: '是',
        locat: 'header',
        desc: 'API密钥',
        default: '默认值'
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
        .api-use {
          padding: 0px 15px;
          border: solid 1px #EDEDED;
          .row {
            margin: 30px 0;
            .api-table {
              margin-top: 20px;
            }
            .content {
              margin-top: 20px;
              line-height: 25px;
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
