<template>
    <NavBar></NavBar>
    <!-- <router-view></router-view> -->
    <section>
        <div class="color_"></div>
        <div class="color_"></div>
        <div class="color_"></div>
        <div class="box">
            <div class="square" style="--i:0;"></div>
            <div class="square" style="--i:1;"></div>
            <div class="square" style="--i:2;"></div>
            <div class="square" style="--i:3;"></div>
            <div class="square" style="--i:4;"></div>
            <div class="container">
                <div class="form">
                    <h2>Register Form</h2>
                    <form @submit.prevent="register">
                        <!-- 用户名 -->
                        <div class="inputBox">
                            <input type="text" placeholder="Username" id="username"  autocomplete="off" v-model="registerForm.username" />
                        </div>
                        <!-- 密码 -->
                        <div class="inputBox">
                            <input type="password" placeholder="Password" id="password"  autocomplete="off" v-model="registerForm.password" />
                        </div>
                        <!-- 确认密码 -->
                        <div class="inputBox">
                            <input type="password" placeholder="Password again" id="confirmPassword"  autocomplete="off" v-model="registerForm.confirmPassword" />
                        </div>
                        <!-- 邮箱 -->
                        <!-- <div class="inputBox">
                            <input type="email" placeholder="Email">
                        </div> -->
                        <!-- 验证码 -->
                        <!-- <div class="inputBox">
                            <input type="text" placeholder="Verification Code">
                        </div> -->
                        <div class="inputBox">
                            <input type="submit" value="Submit">
                        </div>
                        <!-- <div class="inputBox_">
                            <input type="submit" value="Send">
                        </div> -->
                    </form>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import authService from '../services/AuthService';
export default {
  name: "RegisterPage",
  components: {
    NavBar
  },
  data() {
      return {
        registerForm: {
          username: '',
          password: '',
          confirmPassword: '',
        },
      };
    },
    methods: {
      register() {
        console.log('here1')
        this.$router.push('/model');
        // authService.getRegisterData(this.registerForm)
        // //authService.getRegisterData()
        //   .then(response => {
        //     console.log("Success");
        //     console.log(response.data.message);
        //     // 注册成功处理逻辑
        //     // 可以进行页面跳转或其他操作
        //     this.$router.push('/login'); // 页面跳转到 Login.vue
        //   })
        //   .catch(error => {
        //     console.log("Fail");
        //     console.error(error.response.data.errors);
            // 注册失败处理逻辑
        //   });
      },
    }, 
};
</script>


<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    
}
body{
    overflow: hidden;
}
@font-face {
    font-family: Logo;
    src: url("../assets/font/LogoFont.ttf");
}
@font-face {
    font-family: span;
    src: url("../assets/font/yuantiFont.ttf");
}

section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to bottom,#f1f4f9,#dff1ff);
}

section .color{
    position: absolute;
    filter: blur(150px);
}

section .color:nth-child(1){
    top: -350px;
    width: 600px;
    height: 600px;
    background: #071c57;
}

section .color:nth-child(2){
    bottom: -150px;
    left: 100px;
    width: 500px;
    height: 500px;
    background: #0f558fb9;
}

section .color:nth-child(3){
    bottom: 50px;
    right: 100px;
    width: 500px;
    height: 500px;
    background: #200080c1;
}

section .color_{
    position: absolute;
    filter: blur(150px);
}

section .color_:nth-child(1){
    top: -350px;
    width: 600px;
    height: 600px;
    background:#0e085fb9;
}

section .color_:nth-child(2){
    bottom: -150px;
    left: 100px;
    width: 500px;
    height: 500px;
    background: #043975c1;
}

section .color_:nth-child(3){
    bottom: 50px;
    right: 100px;
    width: 500px;
    height: 500px;
    background: #1d6097c1;
}

.box{
     position: relative;
}

.box .square{
    position: absolute;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgb(0,0,0,0.1);
    border: 1px solid rgb(255,255,255,0.5);
    border-right: 1px solid rgb(255,255,255,0.2);
    border-bottom: 1px solid rgb(255,255,255,0.2);
    background:rgb(255,255,255,0.1);
    border-radius: 10px;
    animation: animate 10s linear infinite;
    animation-delay: calc(-1s*var(--i));
}

/* 动画 */

@keyframes animate{
    0%,100%{
    transform: translateY(-40px);
    }
    50%{
    transform: translate(40px);
    }
}

.box .square:nth-child(1){
    top: -50px;
    right: -60px;
    width: 100px;
    height: 100px;
}

.box .square:nth-child(2){
    top: 150px;
    left: -100px;
    width: 120px;
    height: 120px;
    z-index: 2;
}

.box .square:nth-child(3){
    bottom: 50px;
    right: -60px;
    width: 80px;
    height: 80px;
    z-index: 2;
}

.box .square:nth-child(4){
    bottom: -80px;
    left: 100px;
    width: 50px;
    height: 50px;
}

.box .square:nth-child(5){
    top: -90px;
    left: 140px;
    width: 60px;
    height: 60px;
}

.container{
    position: relative;
    width:400px;
    min-height: 400px;
    background:rgb(255,255,255,0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgb(0,0,0,0.1);
    border: 1px solid rgb(255,255,255,0.5);
    border-right: 1px solid rgb(255,255,255,0.2);
    border-bottom: 1px solid rgb(255,255,255,0.2);
}

.form{
    position: relative;
    height: 100%;
    width: 100%;
    padding: 40px;
}

.form h2{
    position: relative;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 40px;
}

.form h2::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: #fff;
}

.form .inputBox{
    width: 100%;
    margin-top: 20px;
}
.form .inputBox input{
    width: 100%;
    background: rgb(255,255,255,0.2);
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 35px;
    border: 1px solid rgb(255,255,255,0.5);
    border-right: 1px solid rgb(255,255,255,0.2);
    border-bottom: 1px solid rgb(255,255,255,0.2);
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;
    box-shadow: 0 5px 15px rgb(0,0,0,0.05);
}

.form .inputBox input::placeholder{
    color: #fff;
}

.form .inputBox input[type="submit"]{
    background: #fff;
    color: #666;
    max-width: 100px;
    cursor: pointer;
    margin-bottom: 20px;
    font-weight: 600;
}
.form .inputBox_{
    position: absolute;
    left:280px;
    top:298px;
}
.form .inputBox_ input{
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 35px;
    font-size: 16px;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px rgb(0,0,0,0.05);
    background: #ffffff9e;
    color: #666;
    max-width: 100px;
    cursor: pointer;
    margin-bottom: 20px;
    font-weight: 600;
}

.forget{
    margin-top: 5px;
    color: #fff;
}

.forget a{
    color: #fff;
    font-weight: 600;
}


</style>