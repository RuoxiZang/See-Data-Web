<template>
<div class="body"> 
    <NavBar></NavBar>
    <!-- <router-view></router-view> -->
     <!-- <div class="video"> -->
    <video id="background" autoplay muted loop>
        <source src="../assets/pic/flourish.mp4" type="video/mp4">
    </video>
    <!-- </div> -->
    
        <div class="text">
        <div id="textdiv">
            <h1>SEE DATA</h1>
            <p>Beautiful and easy data visualization</p>
        </div>
        <div class="button"> 
            <!-- <a href="./login.html">Get started now</a> -->
            <router-link to="/model">Get started now</router-link>
           
        </div>
   
    </div>
    

<!-- 设置前景色 -->
    <div class="forecolor">
        
    </div>
    
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "WelcomePage",
  components: {
    NavBar
  }
};
</script>



<style >
* {
  margin: 0;
  padding: 0;
}

.body{
    list-style: none;
    height: 600px;
    display:flex;
    /* background-color: rgb(255, 255, 255,0);  */
}

#background {
  z-index: -1;
  position: fixed;
  width: 100%;
  height: auto;
}

/* @font-face {
    font-family: Logo;
    src: url("../assets/font/LogoFont.ttf");
}
@font-face {
    font-family: span;
    src: url("../assets/font/yuantiFont.ttf");
} */

@media(min-aspect-ratio:16/9){
    #background{
        width:100%;
        height:auto;
    }
}
@media(max-aspect-ratio:16/9){
    #background{
        width:100%;
        height:auto;
    }
}

.forecolor {
  z-index: 2;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(4, 8, 81, 0.774);
}


.text {
  position: relative;
  top: 60%;
  left: 41%;
  width: 400px;
}

#textdiv {
  position: absolute;
  z-index: 3;
  width: auto;
  height: auto;
}

#textdiv h1 {
  color: aliceblue;
  font-size: 50px;
}

#textdiv p {
  color: aliceblue;
  font-size: 20px;
}

.button {
  position: absolute;
  top: 25%;
  left: 5%;
  width: 200px;
  height: 50px;
  z-index: 3;
  background-color: aliceblue;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.5);

  
}

.button a {
  font-size: 15px;
  font-weight: bold;
  line-height: 3.2;
  color: black;
  text-decoration: none;
}
</style>