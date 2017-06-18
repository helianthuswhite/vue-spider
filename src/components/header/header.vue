<template>
  <el-row class="header">
    <el-col :span="6">
      <span class="logo">Spider</span>
    </el-col>
    <el-col :span="12">
      <el-menu class="el-menu-header-index" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/market">爬虫市场</el-menu-item>
        <el-menu-item index="/aboutUs">了解我们</el-menu-item>
        <el-menu-item index="/openSource">开源代码</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6">
      <el-row>
        <el-col :span="12" :offset="8">
          <el-menu class="el-menu-header-login" mode="horizontal" v-if="!isLogin">
            <el-menu-item index="6">
              <router-link to="/login/login">登录</router-link>
            </el-menu-item>
            <el-menu-item index="7"><router-link to="/login/register">注册</router-link></el-menu-item>
          </el-menu>
          <el-menu class="el-menu-header-login" mode="horizontal" v-else>
            <el-menu-item index="6">
              <router-link to="/console">控制台</router-link>
            </el-menu-item>
            <el-menu-item index="7"><a href="javascript:void(0);" @click="logout">退出</a></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['activeIndex'],
  data() {
    return {
    };
  },
  created() {
    this.isLogin = true;
  },
  methods: {
    handleSelect(key) {
      window.location.href = `#${key}`;
    },
    logout() {
      this.isLogin = false;
      // this.$http.post('/user/logout').then(response => {
      //   if (response.body.ok === 0) {
      //     window.location.href = '/';
      //     this.message({
      //       message: '退出成功!',
      //       type: 'success'
      //     });
      //   }
      // });
    }
  }
};
</script>

<style lang="less">
  .header {
    height: 60px;
    z-index: 10;
    background: rgb(32, 160, 255);
    .logo {
      margin-left: 30px;
      color: #fff;
      font-weight: 700;
      font-size: 30px;
      line-height: 60px;
    }
    .el-menu-header-index {
      background: rgb(32, 160, 255);
      .el-menu-item {
        box-sizing: border-box;
        color: #fff;
        opacity: 0.8;
        &.is-active {
          opacity: 1;
          font-weight: 700;
          border-bottom: solid 5px rgb(153, 210, 252);
        }
        &:hover {
          background: rgb(32, 160, 255);
          opacity: 1;
          font-weight: 700;
        }
      }
    }
    .el-menu-header-login {
      display: flex;
      align-items: center;
      height: 60px;
      background: rgb(32, 160, 255);
      .el-menu-item {
        color: #fff;
        border: solid 1px #fff;
        border-radius: 10px;
        height: 30px;
        line-height: 30px;
        margin-left: 15px;
        padding: 0;
        &:hover {
          color: rgb(32, 160, 255);
        }
        a {
          display: block;
          box-sizing: border-box;
          padding: 0 20px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
