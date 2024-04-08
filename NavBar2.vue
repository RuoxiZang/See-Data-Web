<template>
    <header class="navbar">
        <div class="title">
            <router-link to="/welcome"><a>See Data</a></router-link>
        </div>
        <!--<div class="user">
            <img src="../assets/pic/user.png">
        </div>
        <div class="user_name">
            <span>{{username}}</span>
        </div>
        <div class="close">
            <router-link to="/welcome"><img src="../assets/pic/close.png"></router-link>
        </div>-->
    </header>

    <section class="contain">
        <div class="_color_"></div>
        <div class="_color1"></div>
        <div class="_color2"></div>
        <aside class="toolbar">
            <div class="model">
                <router-link to="/model"><img src="../assets/pic/my_model.png"></router-link>
                <div class="text"><span>我的模板</span></div>
            </div>
            <div class="new">
                <router-link to="/model"><img src="../assets/pic/new.png"></router-link>
                <div class="text"><span>模板选择</span></div>
            </div>
            <div class="help">
                <router-link to="/help"><img src="../assets/pic/help.png"></router-link>
                <div class="text"><span>使用说明</span></div>
            </div>
        </aside>
    </section>
</template>

<script>
// import modelService from '../services/ModelService';
// import authService from '../services/AuthService';
import modelService from '../services/ModelService';

export default {
  data() {
    return {
      username: '',
    };
  },
  mounted() {
    console.log("hellohere");
    
    modelService.getUsername()
      .then(username => {
        this.username = JSON.parse(username).username;
        console.log(username);
      })
      .catch(error => {
        console.error(error);
      });
  }
};


</script>






<style scoped>
/* 组件的样式代码 */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
}

@font-face {
    font-family: Logo;
    src: url("../assets/font/LogoFont.ttf");
}
@font-face {
    font-family: span;
    src: url("../assets/font/yuantiFont.ttf");
}
.navbar{    
    position:fixed;
    width:100%;
    z-index:99;
    height:50px;
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 1px;
    border-color:rgb(219, 227, 234);
    /*box-shadow: 0 5px 20px rgba(0,0,0,0.5);*/
    z-index:99;
}
.navbar .title{
    position:absolute;
    width:200px;
    top:17%;
    left:10px;
}
.navbar .title a {
    font:10 27px Logo;
    color: black;
    text-decoration:none;
}
.navbar .user{
    position:absolute;
    width:40px;
    top:15%;
    left:80%;
}
.navbar .user img{
    width:100%;
}
.navbar .close{
    position:absolute;
    width:40px;
    top:15%;
    left:96%;
}
.navbar .close img{
    width:100%;
}
.navbar .user_name{
    position:absolute;
    width:200px;
    top:30%;
    left:85%;
}
.navbar .user_name span{
    font:10 20px span;
    color: black;
}

.contain ._color_{
    top:100px;
    width: 300px;
    height: 400px;
    position:fixed;
    filter: blur(150px);
    /*background-color:#2107b178;*/
    background-color:#ddc4f978;
    z-index:-1;
}
.contain ._color1{
    top:200px;
    left:350px;
    width: 300px;
    height: 400px;
    position:fixed;
    filter: blur(150px);
    /*background-color:#0049da4f;*/
    background-color:#9ab7ff78;
    z-index:-1;
}
.contain ._color2{
    top:480px;
    left:750px;
    width: 300px;
    height: 400px;
    position:fixed;
    filter: blur(150px);
    /*background-color:#004fe24c;*/
    background-color:#ada0ff78;
    z-index:-1;
}

.contain .toolbar{
    position:fixed;
    height:100%;
    width:60px;
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px);
    box-shadow: 0 25px 45px rgb(0,0,0,0.1);
    border: 1px solid rgba(255, 255, 255, 0.281);
    border-right: 5px solidrgb(255, 255, 255);
    border-bottom: 1px solid rgb(255,255,255,0.2);
    background:rgba(107, 122, 179, 0.279);
    z-index: 2;
}

.contain .toolbar .model{
    position:absolute;
    top:10%;
    width:70%;
    left:10%;
}
.contain .toolbar .model:hover{
    cursor: pointer;
}
.contain .toolbar .model img{
    width: 100%;
}
.contain .toolbar .model .text{
    width: 100px;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.539);
    position: absolute;
    top:10%;
    left:130%;
    border-radius: 5px;
    text-align: center;
    line-height: 45px;
    display: none;
}
.contain .toolbar .model:hover .text{
    display: block;
}
.contain .toolbar .model .text span{
    color: aliceblue;
    font:1 15px span;
}
.contain .toolbar .new{
    position:absolute;
    top:25%;
    width:70%;
    left:10%;
}
.contain .toolbar .new:hover{
    cursor: pointer;
}
.contain .toolbar .new img{
    width: 100%;
}
.contain .toolbar .new:hover .text{
    display: block;
}
.contain .toolbar .new .text{
    width: 100px;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.523);
    position: absolute;
    top:0%;
    left:130%;
    border-radius: 5px;
    text-align: center;
    line-height: 45px;
    display:none;
}
.contain .toolbar .new .text span{
    color: aliceblue;
    font:1 15px span;
}
.contain .toolbar .help{
    position:absolute;
    top:40%;
    width:70%;
    left:10%;
}
.contain .toolbar .help img{
    width: 100%;
}
.contain .toolbar .help .text{
    width: 100px;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.539);
    position: absolute;
    top:0%;
    left:130%;
    border-radius: 5px;
    text-align: center;
    line-height: 45px;
    display:none;
}
.contain .toolbar .help:hover .text{
    display: block;
}
.contain .toolbar .help:hover{
    cursor: pointer;
}
.contain .toolbar .help span{
    color: aliceblue;
    font:1 15px span;
}
</style>