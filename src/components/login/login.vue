<template>
  <div class="login">
    <v-header></v-header>
    <el-row type="flex" justify="center" align="middle" class="content-wrapper">
      <el-col :span="6">
        <el-row class="content login-content" v-if="isLogin">
          <h1 class="title">登录</h1>
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm"  class="login-ruleForm">
            <el-form-item label="用户名：" prop="user">
              <label class="to-register">没有账号？<router-link to="/login/register">去注册</router-link></label>
              <el-input type="text" v-model="loginForm.user" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="pass">
              <label class="forget-pass"><a href="#">忘记密码</a></label>
              <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="remember" style="float: right;">记住我</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')" class="submit">登录</el-button>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row class="content register-content" v-if="isRegister">
          <h1 class="title">注册账号</h1>
          <el-form :model="registerForm" :rules="registerRules" ref="registerForm" label-width="100px" class="register-ruleForm">
            <el-form-item label="用户名：" prop="user">
              <el-input type="text" v-model="registerForm.user" auto-complete="off" placeholder="请输入您的用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="pass">
              <el-input type="password" v-model="registerForm.pass" auto-complete="off" placeholder="请输入您的密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="checkPass">
              <el-input type="password" v-model="registerForm.checkPass" auto-complete="off" placeholder="请确认您的密码"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" prop="email">
              <el-input type="text" v-model="registerForm.email" auto-complete="off" placeholder="请输入您的邮箱账号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')" class="submit">注册</el-button>
              <label class="tologin">已有账号？<router-link to="/login/login">直接登录>></router-link></label>
            </el-form-item>
          </el-form>
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
    var validateRegisterPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validateRegisterCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      remember: false,
      loginForm: {
        user: '',
        pass: ''
      },
      loginRules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      registerForm: {
        user: '',
        pass: '',
        checkPass: '',
        email: ''
      },
      registerRules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validateRegisterPass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validateRegisterCheckPass, trigger: 'blur' }
        ],
        email: [
          { message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ]
      }
    };
  },
  computed: {
    isLogin() {
      return this.$route.params.path === 'login';
    },
    isRegister() {
      return this.$route.params.path === 'register';
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$http.post('/api/user/login')
          console.log(this.loginForm);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
  .login {
    position: relative;
    width: 100%;
    z-index: 1;
    .content-wrapper {
      width: 100%;
      padding: 150px 0;
      .content {
        .title {
          padding-bottom: 15px;
          margin-bottom: 15px;
          text-align: center;
          font-size: 20px;
          font-weight: 400;
        }
        .submit {
          width: 100%;
        }
        &.login-content {
          border: solid 1px #ccc;
          padding: 30px 20px;
          box-shadow: 0 0 5px 0 #ccc;
          .title {
            border-bottom: solid 1px #ccc;
          }
          .to-register,.forget-pass {
            float: right;
            font-size: 12px;
            color: #7e8c8d;
            a {
              text-decoration: underline;
            }
          }
        }
        &.register-content {
          .title {
            margin-left: 100px;
            margin-bottom: 30px;
          }
          .tologin {
            float: right;
            color: #7e8c8d;
            a {
              color: #20a0ff;
            }
          }
        }
      }
    }
  }
</style>
