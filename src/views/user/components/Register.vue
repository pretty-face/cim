<template>
    <div class="register-wrapper" ref="registerWrapper">
      <transition name="el-zoom-in-bottom">
        <div class="register-form-wrapper" v-show="show">
            <div class="title">欢迎注册</div>
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="rule-form">
                <el-form-item prop="emial-account">
                    <el-input prefix-icon="el-icon-mobile-phone"  placeholder="请输入注册邮箱" v-model.number="loginForm.userName"></el-input>
                </el-form-item>
                <el-form-item prop="user-name">
                    <el-input prefix-icon="el-icon-mobile-phone"  placeholder="设置用户名" v-model.number="loginForm.userName"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password" prefix-icon="el-icon-bell"  placeholder="设置登录密码" v-model="loginForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="pass-sure">
                    <el-input type="password" prefix-icon="el-icon-bell"  placeholder="再次确认密码" v-model="loginForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="volid">
                    <el-input style="width:250px" type="text" prefix-icon="el-icon-bell"  placeholder="验证码" v-model="loginForm.volid" auto-complete="off"></el-input>
                    <img style="width:120px;height36px;vertical-align:bottom;" src="static/volid.png"/>
                </el-form-item>
                <el-form-item>
                    <el-button style="width:370px" type="primary" @click="submitForm('loginForm')">登录</el-button>
                </el-form-item>        
            </el-form>
            <div class="oprate-btn">
                <el-button type="text" @click="toLogin">已有账号,快速登录</el-button>
                <el-button type="text" @click="toForgetPass">忘记密码</el-button>
            </div>
        </div>
      </transition>
    </div>
</template>

<script>
import { change } from "@/utils/bgTransform.js";
export default {
  name: "register",
  data() {
      var validatePass = (rule,value,callback) => {
          if (value !== "admin") {
              callback(new Error("请输入正确的用户名!"));
          } else {
              callback();
          }
      };
    return {
        show: false,
        loginForm:{
            userName:'',
            pass:'',
            volid:''
        },
        centerDialogVisible:true,
        rules:{
            userName: [
                { validator: validatePass, trigger: 'blur' }
            ],
            pass: [
                { validator: '', trigger: 'blur' }
            ]
        }
    };
  },
  components: {},
  created() {
    //   this.show = !this.show
  },
  mounted() {
    this.show = !this.show
  },
  methods: {
      toLogin () {
          this.$router.push({name: 'login'});
      },
      toForgetPass () {
          this.$router.push({name: 'forgetPass'});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
           // this.$router.push({path: '/register'});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  }
};
</script>

<style lang="scss" >
.register-wrapper {
  .register-form-wrapper{
    position: absolute;
    width: 450px;
    height: 480px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 50px #999;
    transition: all 0.4 linear;
    &.screw-enter-active, .screw-leave-active {
        opacity: 0;
    }
    &.screw-enter, .screw-leave-to{
        opacity: 0;
    }
    .title{
        padding: 20px 0;
        color: #666;
        text-align: center;
        font-weight: 700;
        font-size: 20px;
    }
  }
  .oprate-btn{
      text-align: right;
      margin-right: 40px;
  }
}
</style>

