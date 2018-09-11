<template>
    <div class="forget-wrapper" ref="forgetWrapper">
      <transition name="el-zoom-in-bottom">
        <div class="forget-form-wrapper" v-show="show">
            <div class="title">忘记密码</div>
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="rule-form">
                <el-form-item prop="userName">
                    <el-input prefix-icon="el-icon-mobile-phone"  placeholder="手机或邮箱" v-model.number="loginForm.userName"></el-input>
                </el-form-item>
                <el-form-item prop="volid">
                    <el-input style="width:250px" type="text" prefix-icon="el-icon-bell"  placeholder="验证码" v-model="loginForm.volid" auto-complete="off"></el-input>
                    <img style="width:120px;height36px;vertical-align:bottom;" src="static/volid.png"/>
                </el-form-item>
                <el-form-item>
                    <el-button style="width:370px" type="primary" @click="sure">确认</el-button>
                </el-form-item>        
            </el-form>
            <div class="oprate-btn">
                <el-button type="text" @click="toLogin">登录</el-button>
                <el-button type="text" @click="toRegister">注册</el-button>
            </div>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: "login",
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
            volid:''
        },
        centerDialogVisible:true,
        rules:{
            userName: [
                { validator: validatePass, trigger: 'blur' }
            ],
        }
    };
  },
  components: {},
  created() {
  },
  mounted() {
    this.show = !this.show
  },
  methods: {
      toRegister () {
          this.$router.push({name: 'register'});
      },
      toLogin () {
          this.$router.push({name: 'login'});
      }
  }
};
</script>

<style lang="scss" >
.forget-wrapper {
  .forget-form-wrapper{
    position: absolute;
    width: 450px;
    height: 365px;
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

