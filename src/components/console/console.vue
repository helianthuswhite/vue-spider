<template>
  <div class="console">
    <v-header activeIndex=""></v-header>
    <el-row class="console-row">
      <el-col :span="9" class="info-wrapper">
        <h4 class="title">
          爬虫详情
        </h4>
        <div class="content spider-detail">
          <div class="row" v-for="(value, key) in spiderDetail">
            <span class="key">{{ LANGUAGE[key] }}：</span>
            <span class="value">{{ value }}</span>
          </div>
        </div>
      </el-col>
      <el-col :span="9" :offset="1" class="info-wrapper">
        <h4 class="title">
          新建爬虫实例
        </h4>
        <div class="content spider-config">
          <el-form :model="spiderConfigForm" ref="spiderConfigForm" class="spider-config-form">
            <el-form-item label="accessToken：" prop="accessToken">
              <el-input type="text" v-model="spiderConfigForm.accessToken" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="查询内容：" prop="query">
              <el-input type="text" v-model="spiderConfigForm.query" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="间隔时间：" prop="intervalTime">
              <el-input type="text" v-model="spiderConfigForm.intervalTime" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()" class="submit">新建实例</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="4" :offset="1" class="info-wrapper spider-status-wrapper">
        <div class="content spider-status">
          <div class="button" v-for="(value, key) in operateStatus">
            <el-button type="primary" @click="operate(key)">{{ value }}</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="console-row">
      <el-col class="info-wrapper spider-data-wrapper">
        <el-tabs type="border-card" v-model="currentDataTab" @tab-click="changeData">
          <el-tab-pane :label="value" :name="key" v-for="(value, key) in spiderDataTab">
            <el-table
              :data="spiderData"
              border
              style="width: 100%"
              :default-sort = "{prop: 'publishTime', order: 'descending'}">
              <el-table-column type="expand">
                <template scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="名称">
                      <span>{{ props.row.title }}</span>
                    </el-form-item>
                    <el-form-item label="时间">
                      <span>{{ props.row.publishTime }}</span>
                    </el-form-item>
                    <el-form-item label="作者">
                      <span>{{ props.row.authorname }}</span>
                    </el-form-item>
                    <el-form-item label="作者链接">
                      <span>{{ props.row.authorhref }}</span>
                    </el-form-item>
                    <el-form-item label="文章链接">
                      <span>{{ props.row.href }}</span>
                    </el-form-item>
                    <el-form-item label="内容">
                      <span>{{ props.row.txtInfo }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="标题"
                prop="title">
              </el-table-column>
              <el-table-column
                label="时间"
                prop="publishTime">
              </el-table-column>
              <el-table-column
                label="作者"
                prop="authorname">
              </el-table-column>
            </el-table>
            <div class="export">
              <el-button type="primary" @click="exportData">导出JSON</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
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
      accessToken: '',
      spiderDetail: {
        'id': '1',
        'title': '爬虫TITLE',
        'description': '这是一条爬虫的描述，我觉得应该长一点这样会比较好很多，反正先试一试，有点蛋疼',
        'query': '查个奶子',
        'intervalTime': '10000'
      },
      LANGUAGE: {
        'id': '爬虫ID',
        'title': '爬虫名称',
        'description': '爬虫描述',
        'query': '查询内容',
        'intervalTime': '间隔时间'
      },
      spiderConfigForm: {
        'accessToken': this.accessToken,
        'query': '',
        'intervalTime': ''
      },
      operateStatus: {
        'run': '开始爬取',
        'suspend': '暂停爬取',
        'resume': '恢复爬取',
        'stop': '停止爬取'
      },
      currentDataTab: 'allData',
      spiderDataTab: {
        allData: '全部数据',
        lastestData: '最新数据'
      },
      spiderData: []
    };
  },
  created() {
    this.$http.get('/api/spiders?id=1').then(response => {
      if (response.body.ok === 0) {
        this.spiderDetail = {
          'id': response.body.body[0].id,
          'title': response.body.body[0].title,
          'description': response.body.body[0].description,
          'query': response.body.body[0].defaultspiderconfig.query,
          'intervalTime': response.body.body[0].defaultspiderconfig.intervalTime
        };
      }
    });
  },
  methods: {
    submitForm() {
      this.$http.post('/api/spiderInstance', {
        'userId': '1',
        'spiderId': '1',
        'spiderConfig': {
          'query': this.spiderConfigForm.query,
          'intervalTime': this.spiderConfigForm.intervalTime
        }
      }).then(response => {
        if (response.body.ok === 0) {
          this.$message({
            message: '新建实例成功！',
            type: 'success'
          });
          this.spiderDetail.query = this.spiderConfigForm.query;
          this.spiderDetail.intervalTime = this.spiderConfigForm.intervalTime;
          this.accessToken = response.body.body;
        } else {
          this.$message.error('操作失败！');
        }
      });
    },
    operate(status) {
      this.$http.post('/api/spiderInstances/status', {
        'accessToken': this.accessToken,
        'action': status
      }).then(response => {
        if (response.body.ok === 0) {
          this.$message({
            message: '操作成功！',
            type: 'success'
          });
          this.changeData();
        } else {
          this.$message.error('操作失败！');
        }
      });
    },
    changeData() {
      if (this.currentDataTab === 'allData') {
        this.$http.get(`/api/resources?accessToken=${this.accessToken}`).then(response => {
          if (response.body.ok === 0) {
            this.spiderData = response.body.body;
          } else {
            this.$message({
              message: '服务器响应中，请稍后...',
              type: 'warning'
            });
          }
        });
      } else {
        this.$http.get(`/api/resources/recent?accessToken=${this.accessToken}`).then(response => {
          if (response.body.ok === 0) {
            this.spiderData = response.body.body;
          }
        });
      }
    },
    exportData() {
      window.location.href = `/api/resources/jsonfile?accessToken=${this.accessToken}`;
    }
  }
};
</script>

<style lang="less">
  .console {
    position: relative;
    min-width: 1200px;
    .console-row {
      margin: 30px;
      .info-wrapper {
        height: 350px;
        border: solid 1px #ccc;
        .title {
          line-height: 40px;
          font-size: 16px;
          padding: 0 15px;
          border-bottom: solid 1px #ccc;
          background: #eef1f6;
        }
        .spider-detail {
          .row {
            margin: 15px;
            color: #48576a;
            line-height: 1.5;
            .key {
              display: inline-block;
            }
            .value {
              display: inline-block;
              vertical-align: text-top;
              width: 78%;
            }
          }
        }
        .spider-config {
          padding: 0 30px;
          .el-form-item {
            margin: 30px 0;
            text-align: right;
            &:last-child {
              text-align: center;
            }
            .el-input {
              font-size: 100%;
              width: 70%;
            }
            .submit {
              width: 150px;
            }
          }
        }
        .spider-status {
          .button {
            margin: 30px 0;
            .el-button {
              width: 150px;
            }
          }
        }
        &.spider-status-wrapper {
          border: none;
        }
        &.spider-data-wrapper {
          height: auto;
          .el-tabs {
            border: none;
            box-shadow: none;
            .el-tabs__item {
              color: #000;
              font-size: 16px;
            }
            .export {
              margin-top: 15px;
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>
