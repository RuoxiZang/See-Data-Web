<template>
<!-- <div class="body">  -->
    <NavBar2></NavBar2>
    <!-- </div> -->
    <main id="el-container">
      
                
                
    <div  v-for="(name, index) in nameArray" :key="index">
    
      <div v-if="typeArray[index] === 'scatterpic'"><scatterpic :modelname="name" @click="goToWork('scatterpic',name)"></scatterpic></div>
      <div v-else-if="typeArray[index] === 'PiePic'"><PiePic :modelname="name" @click="goToWork('PiePic',name)"></PiePic></div>
      <div v-else-if="typeArray[index] === 'IrpiePic'"><IrpiePic :modelname="name" @click="goToWork('IrpiePic',name)"></IrpiePic></div>
      <div v-else-if="typeArray[index] === 'boxpic'"><BoxPic :modelname="name" @click="goToWork('boxpic',name)"></BoxPic></div>
      <div v-else-if="typeArray[index] === 'bubblepic'"><BubblePic :modelname="name" @click="goToWork('bubblepic',name)"></BubblePic></div>
      <div v-else-if="typeArray[index] === 'histo'"><HistoPic :modelname="name" @click="goToWork('histo',name)"></HistoPic></div>
      <div v-else-if="typeArray[index] === 'Line_Pic'"><LinePic :modelname="name" @click="goToWork('Line_Pic',name)"></LinePic></div>
      <div v-else-if="typeArray[index] === 'radarpic'"><RadarPic :modelname="name" @click="goToWork('radarpic',name)"></RadarPic></div>
      <div v-else-if="typeArray[index] === 's_area'"><SareaPic :modelname="name" @click="goToWork('s_area',name)"></SareaPic></div>
      <div v-else-if="typeArray[index] === 'wordcloudpic'"><WordPic :modelname="name" @click="goToWork('wordcloudpic',name)"></WordPic></div>
      <div v-else>Other Type</div>
    </div>

    </main>
    
</template>

<script>
import NavBar2 from "@/components/NavBar2.vue";
import modelService from '../services/ModelService';
import PiePic from "@/components/picvue/PiePic.vue";
import IrpiePic from "@/components/picvue/Ir_piePic.vue";
import scatterpic from "@/components/picvue/ScatterPic.vue";
import BoxPic from "@/components/picvue/BoxPic.vue";
import BubblePic from "@/components/picvue/BubblePic.vue";
import HistoPic from "@/components/picvue/HistoPic.vue";
import LinePic from "@/components/picvue/LinePic.vue";
import RadarPic from "@/components/picvue/RadarPic.vue";
import SareaPic from "@/components/picvue/S_areaPic.vue";
import WordPic from "@/components/picvue/WordPic.vue";
export default {
  name: "MymodelPage",
  components: {
    NavBar2,
    PiePic,
    IrpiePic,
    scatterpic,
    BoxPic,
BubblePic,
HistoPic,
LinePic,
RadarPic,
SareaPic,

WordPic
  },
  data() {
      return {
        mymodellist:'',
        nameArray:[],
        typeArray:[]
        }
      },

  mounted() {
    console.log("hellohere3");
    modelService.getmyModel()
      .then(data => {
        this.mymodellist = data;
        // 提取 name 数组
        this.nameArray = data.map(item => item.name);

// 提取 type 数组
        this.typeArray = data.map(item => item.type);

      })
  },
  methods: {
    goToWork(param,name) {
      console.log(name);
      this.$router.push({ path: `/workplace/${name}`, query: { type: param } });
    },
    
  }

};
</script>

<style scoped>
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
#el-container{
    position:relative;
    left:100px;
    top:50px;
    display: flex;        /* 将父盒子设为弹性容器 */
    flex-direction: row;  /* 设置主轴方向为水平方向 */
    flex-wrap: wrap; /* 添加 flex-wrap 属性 */
}

</style>