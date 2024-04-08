<template>
    <div class="navbar">
      <div class="title">
        <!-- <a href="./index.html">See Data</a> -->
        <router-link to="/welcome">See Data</router-link>

      </div>

      <div class="nav">
        <ul>
          <li><router-link to="/welcome">Home</router-link></li>
          <li><router-link to="/register">Sign up</router-link></li>
          <li><router-link to="/login">Sign in</router-link></li>
          <li><a href="#">About us</a></li>
          <div class="nav_box"></div>
        </ul>
      </div>
    </div>
</template>

<script>


// export default {
//   name: "NavBar",
  
// };


</script>


<style scoped>
/* 组件的样式代码 */
* {
  margin: 0;
  padding: 0;
}

.navbar {
  position: fixed;
  width: 100%;
  z-index: 99;
  height: 70px;
  background-color: aliceblue;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}

.navbar .title {
  position: absolute;
  width: 200px;
  top: 20%;
  left: 10px;
}

.navbar .title a {
  font: 10 30px Logo;
  color: black;
  text-decoration: none;
}

.nav {
  position: absolute;
  width: 50%;
  left: 50%;
  top: 5%;
}

.nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  right: 10%;
}

.nav ul .nav_box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc((100% / 4) * 1);
  height: 10px;
  border-radius: 2px;
  transition: 0.5s;
}

.nav ul li {
  width: 100%;
  text-align: center;
}

.nav ul li a {
  font: 10 20px span;
  display: block;
  line-height: 70px;
  text-decoration: none;
  color: black;
}

.nav ul li:nth-child(1):hover ~ .nav_box {
  left: calc(100% / 4 * 0);
  background-color: rgb(89, 144, 238);
}

.nav ul li:nth-child(2):hover ~ .nav_box {
  left: calc(100% / 4 * 1);
  background-color: rgb(52, 75, 151);
}

.nav ul li:nth-child(3):hover ~ .nav_box {
  left: calc(100% / 4 * 2);
  background-color: rgb(30, 54, 130);
}

.nav ul li:nth-child(4):hover ~ .nav_box {
  left: calc(100% / 4 * 3);
  background-color: rgb(18, 11, 117);
}
</style>