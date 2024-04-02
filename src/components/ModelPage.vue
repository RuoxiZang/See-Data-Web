<template>
<!-- <div class="body">  -->
    <NavBar2></NavBar2>
    <main id="el-container">
            <!-- <div class="choose"> -->
            <ul id="choose-list">
                <li class="active"><span>全部</span></li>
                <li><span>柱状图</span></li>
                <li><span>折线图</span></li>
                <li><span>饼图</span></li>
                <li><span>点图</span></li>
                <li><span>极坐标图</span></li>
                <li><span>词云图</span></li>
            </ul>
            <!-- </div> -->
            <div class="show" id="all">
                <scatterpic @click="goToWork('scatterpic')"></scatterpic>
                <PiePic @click="goToWork('PiePic')"></PiePic>
                <IrpiePic @click="goToWork('IrpiePic')"></IrpiePic>
                <histo @click="goToWork('histo')"></histo>
                <Line_Pic @click="goToWork('Line_Pic')"></Line_Pic>
                <bubblepic @click="goToWork('bubblepic')"></bubblepic>
                <s_area @click="goToWork('s_area')"></s_area>
                <radarpic @click="goToWork('radarpic')"></radarpic>
                <boxpic @click="goToWork('boxpic')"></boxpic>
                <wordcloudpic @click="goToWork('wordcloudpic')"></wordcloudpic>
            </div>
            <div class="hidden" id="histo">
                <histo @click="goToWork('histo')"></histo>
                <boxpic @click="goToWork('boxpic')"></boxpic>
            </div>
            <div class="hidden" id="line">
                <Line_Pic @click="goToWork('Line_Pic')"></Line_Pic>
                <s_area @click="goToWork('s_area')"></s_area>
            </div>
            <div class="hidden" id="pie">
                <PiePic @click="goToWork('IrpiePic')"></PiePic>
                <IrpiePic @click="goToWork('IrpiePic')"></IrpiePic>
            </div>
            <div class="hidden" id="scatter">
                <scatterpic @click="goToWork('IrpiePic')"></scatterpic>
                <bubblepic @click="goToWork('bubblepic')"></bubblepic>
            </div>
            <div class="hidden" id="pole">
                <radarpic @click="goToWork('radarpic')"></radarpic>
            </div>
            <div class="hidden" id="wordcloud">
                <wordcloudpic @click="goToWork('wordcloudpic')"></wordcloudpic>
            </div>
    </main>
<!-- </div> -->
</template>

<script>
import NavBar2 from "@/components/NavBar2.vue";
import PiePic from "@/components/picvue/PiePic.vue";
import IrpiePic from "@/components/picvue/Ir_piePic.vue";
import s_area from "@/components/picvue/S_areaPic.vue";
import Line_Pic from "@/components/picvue/LinePic.vue";
import histo from "@/components/picvue/HistoPic.vue";
import boxpic from "@/components/picvue/BoxPic.vue";
import scatterpic from "@/components/picvue/ScatterPic.vue";
import bubblepic from "@/components/picvue/BubblePic.vue";
import radarpic from "@/components/picvue/RadarPic.vue";
import wordcloudpic from "@/components/picvue/WordPic.vue";

// import NavBar2 from 'NavBar2.vue';


export default {
  name: "ModelPage",
  components: {
      NavBar2,
      PiePic,
      IrpiePic,
      s_area,
      Line_Pic,
      histo,
      boxpic,
      scatterpic,
      bubblepic,
      radarpic,
      wordcloudpic
    },
    mounted() {
    console.log("hellohere2");
//     mounted() {
//     this.$refs.navbar2Component.getUsername();

// window.onload = function() {
	var list = document.getElementById("choose-list").getElementsByTagName("li");
	var div = document.getElementById("el-container").getElementsByTagName("div");
	var index = 0;
	for (var i=0; i<list.length; i++) {
		list[i].num = i;
		list[i].onclick = function () {
			Change(this.num);
		}
	}
			
	function Change(curIndex) {
		for (var i=0; i<list.length; i++) {
			list[i].className = "";
			div[i].className = "hidden";
            list[i].style.backgroundColor = 'rgb(255,255,255)';
		}
		list[curIndex].className = "active";
        list[curIndex].style.backgroundColor = 'rgba(136, 217, 252, 0.187)';
		div[curIndex].className = "show";
		index = curIndex;
        console.log(index);
	}
}
  ,
  methods: {
    goToWork(param) {
      this.$router.push({ path: "/workplace/untitle", query: { type: param } });
    },
    // goToPie() {
    //   this.$router.push("/workplace/pie");
    // },
    // 其他组件的跳转方法...
  }
}
;


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
    left:130px;
    top:50px;
}
.show{
    width:100%;
    display:flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* margin-left: 30px; */
    margin-bottom: 200px;
}
.hidden{
    display: none;
}
.contentbox{
    /* top:100px; */
    width:250px;
    height: 200px;
    margin:40px;
    position: relative;
    display: inline-block;
    box-shadow: 5px 5px 10px 0px lightgray;
    border-radius:10px;
    transition: 0.3s;
}
.contentbox img{
    width: 100%;
}
.contentbox h2{
    color:black;
    font-size:20px;
    margin: 5px;
    letter-spacing: 2px;
}

.contentbox h2::after{
    content:'';
    background-color: rgba(32, 49, 178, 0.352);
    width: 120px;
    height: 4px;
    position:absolute;
    left:2%;
    bottom:10px;
}

.contentbox:hover{
    scale: 0.97;
    box-shadow: none;
}

#choose-list{
    position: relative;
    top:50px;
    margin-bottom:50px;
    width:100%;
    height:100px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    left:-60px;
}
#choose-list li{
    width:100px;
    height: 30px;
    margin:20px;
    position: relative;
    display: inline-block;
    box-shadow: 1px 1px 3px 0px lightgray;
    background-color: rgba(255, 255, 255, 0.653);
    border-radius:10px;
    transition: 0.3s;
    text-align: center;
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(50px);
    line-height: 25px;
    transition: 0.3s;
}
#choose-list a{
    text-decoration:none;
}
#choose-list li span{
    font:10 15px span;
    color: rgb(65, 65, 65);
}
#choose-list li:hover{
    background-color: rgba(136, 217, 252, 0.187);
    cursor: pointer;
}

</style>