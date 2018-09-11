<template>
    <div class="wrapper" ref="loginWrapper">
        <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <router-view></router-view>
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
    change(this.$refs.loginWrapper);
    this.show = !this.show
  },
  methods: {
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
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ccc;
}
</style>

