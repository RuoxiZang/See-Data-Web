<template>
    <!-- <div class="body">  -->
        <NavBar2></NavBar2>
        <form class="Workplace" ref="myForm">
            <div class="Nav">
                <input  id ="download" type="button" value="下载">
                <input id="save" type="button" value="保存" >
            </div>
            <div id="submitform" class="submitform" >
                <div class="_head_">
                    <p>保存模板</p>
                </div>
                <img id="close" src="../assets/pic/close2.png" class="close" >
                <input type="hidden" name="uid" value="1" id="change_form" class="form-control">
                <div class="form-group">
                    <label for="name_in_list" class="form-name">模板名称:</label>
                    <input type="text" class="form-control" id="name_in_list" name="name_in_list" placeholder="Enter name" autocomplete="off">
                </div>
                <div class="buttons-container">
                    <button type="submit" class="btn btn-primary" @click="submitData">Submit</button>
                </div>
            </div>
            <main id="change_model" class="change_model">
                <div class="model_nav">
                    <p>模型选择</p>
                </div>
                <div class="model">
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
            </main>
            <div class="pic_place">
                <div class="pic_container" id="container">
                </div>
            </div>
            <main id="change" class="change">
                <ul class="choose_bar" id="choose_bar">
                    <li>相关配置</li>
                    <li>风格设置</li>
                    <li>数据上传</li>
                </ul>
                <section class="moduel" id="1">
                        <div class="content" id="title">
                            <p><a href ="#title">标题设置&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;∨</a></p>
                            <div class="submenu">
                                <span>显示标题<input type="checkbox" class="show" id="title_show" value="1" autocomplete="off"></span>
                                <span>标题名称 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="name" id="title_name" placeholder="请输入标题" value="Echarts例" autocomplete="off"></span>
                                <span>标题大小 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" class="size" id="title_size"  placeholder="标题文字大小(px)" value="17" autocomplete="off"></span>
                                <span>标题颜色<input type="color" class="_color" id="title_color" value="#000000" autocomplete="off"></span>
                            </div>
                        </div>
                        <div class="content" id="canva">
                            <p><a href ="#canva">画布设置&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;∨</a></p>
                            <div class="submenu">
                                <div :hidden="shouldHideMyElement" class="hidden">
                                <span>显示网格<input type="checkbox" class="show" id="grid_show" value="0" autocomplete="off"></span>
                                </div>
                                <span>背景颜色<input type="color" class="_color" id="back_color" value="#FFFFFF" autocomplete="off"></span>
                                <div :hidden="shouldHideMyElement" class="hidden">
                                <span>网格颜色<input type="color" class="_color" id="grid_color" value="#000000" autocomplete="off"></span>
                                </div>
                            </div>
                        </div>
                        <div :hidden="shouldHideMyElement">
                        <div class="content" id="x">
                            <p><a href ="#x">x轴设置&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;∨</a></p>
                            <div class="submenu">
                                <span>显示 x轴<input type="checkbox" class="show" id="x_show" value="1"></span>
                                <span>x轴位于底部<input type="checkbox" class="show" id="x_position" value="1" autocomplete="off"></span>
                                <span>x轴名字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="name" id="x_name" placeholder="请输入x轴名称" value="x轴" autocomplete="off"></span>
                                <span>x轴文字大小&nbsp;&nbsp;<input type="number" class="size" id="x_size"  placeholder="x轴文字大小(px)" value="12" autocomplete="off"></span>
                                <span>x轴文字颜色<input type="color" class="_color" id="x_color" value="#000000" autocomplete="off"></span>
                            </div>
                        </div>
                        <div class="content" id="y">
                            <p><a href ="#y">y轴设置&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;∨</a></p>
                            <div class="submenu">
                                <span>显示 y轴<input type="checkbox" class="show" id="y_show" value="1" ></span>
                                <span>y轴位于左侧<input type="checkbox" class="show" id="y_position" value="1" autocomplete="off"></span>
                                <span>y轴名字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" class="name" id="y_name" placeholder="请输入y轴名称" value="y轴" autocomplete="off"></span>
                                <span>y轴文字大小&nbsp;&nbsp;<input type="number" class="size" id="y_size"  placeholder="y轴文字大小(px)" value="12" autocomplete="off"></span>
                                <span>y轴文字颜色<input type="color" class="_color" id="y_color" value="#000000" autocomplete="off"></span>
                            </div>
                        </div>
                        </div>
                        <div class="content" id="legend">
                            <p><a href ="#legend">图例设置&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;∨</a></p>
                            <div class="submenu">
                            <span>显示图例<input type="checkbox" class="show" id="legend_show" value="1"></span>
                            <span>图例大小&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" class="size" id="legend_size"  placeholder="图例文字大小(px)" value="12" autocomplete="off"></span>
                            <span>图例文字颜色<input type="color" class="_color" id="legend_color" value="#000000" autocomplete="off"></span>
                            </div>
                        </div>
                </section>
                <section class="color" id="2">
                    <!-- 含有主题信息的输入标签 -->
                    <input id="theme" type="hidden" value="0">
    
                    <ul class="theme_choose" id="theme-list">
                        <li>
                            <div class="colorsquare" style="background-color: rgb(81,107,145);"></div>
                            <div class="colorsquare" style="background-color: rgb(89,196,230);"></div>
                            <div class="colorsquare" style="background-color: rgb(237,175,218);"></div>
                            <div class="colorsquare" style="background-color: rgb(147,183,227);"></div>
                            <div class="colorsquare" style="background-color: rgb(165,231,240);"></div>
                            <div class="colorsquare" style="background-color: rgb(203,176,227);"></div>
                        </li>
                        <li>
                            <div class="colorsquare" style="background-color: rgb(216,124,124);"></div>
                            <div class="colorsquare" style="background-color: rgb(145,158,139);"></div>
                            <div class="colorsquare" style="background-color: rgb(215,171,130);"></div>
                            <div class="colorsquare" style="background-color: rgb(110,112,116);"></div>
                            <div class="colorsquare" style="background-color: rgb(97,160,168);"></div>
                            <div class="colorsquare" style="background-color: rgb(239,161,141);"></div>
                        </li>
                        <li>
                            <div class="colorsquare" style="background-color: rgb(137,52,72);"></div>
                            <div class="colorsquare" style="background-color: rgb(217,88,80);"></div>
                            <div class="colorsquare" style="background-color: rgb(235,129,70);"></div>
                            <div class="colorsquare" style="background-color: rgb(255,178,72);"></div>
                            <div class="colorsquare" style="background-color: rgb(242,214,67);"></div>
                            <div class="colorsquare" style="background-color: rgb(235,219,164);"></div>
                        </li>
                        <li>
                            <div class="colorsquare" style="background-color: rgb(193,35,43);"></div>
                            <div class="colorsquare" style="background-color: rgb(39,114,123);"></div>
                            <div class="colorsquare" style="background-color: rgb(252,206,16);"></div>
                            <div class="colorsquare" style="background-color: rgb(232,124,37);"></div>
                            <div class="colorsquare" style="background-color: rgb(181,195,52);"></div>
                            <div class="colorsquare" style="background-color: rgb(254,132,99);"></div>
                        </li>
                        <li>
                            <div class="colorsquare" style="background-color: rgb(138,124,168);"></div>
                            <div class="colorsquare" style="background-color: rgb(224,152,199);"></div>
                            <div class="colorsquare" style="background-color: rgb(143,211,232);"></div>
                            <div class="colorsquare" style="background-color: rgb(113,102,158);"></div>
                            <div class="colorsquare" style="background-color: rgb(204,112,175);"></div>
                            <div class="colorsquare" style="background-color: rgb(124,180,204);"></div>
                        </li>
                        <li>
                            <div class="colorsquare" style="background-color: rgb(221,107,102);"></div>
                            <div class="colorsquare" style="background-color: rgb(117,154,160);"></div>
                            <div class="colorsquare" style="background-color: rgb(230,157,135);"></div>
                            <div class="colorsquare" style="background-color: rgb(141,193,169);"></div>
                            <div class="colorsquare" style="background-color: rgb(234,126,83);"></div>
                            <div class="colorsquare" style="background-color: rgb(238,221,120);"></div>
                        </li>
                    </ul>
                </section>
                <section class="data_up" id="3">
                    <!-- <el-upload
  class="upload"
  action=""
  :auto-upload="false"
  :before-upload="handleBeforeUpload"
>
  <el-button size="small" type="primary">选择文件</el-button>
  <div slot="tip" class="el-upload__tip">只能上传 .xlsx 或 .xls 格式的文件</div>
</el-upload> -->
                    <input type="file" id="data" name="file" placeholder="Enter address" accept=".xlsx, .xls"  >
                    <input type="button" value="上传数据文件" id="btn">
                    <img src="../assets/pic/upload.png">

                    <div v-if="(this.$route.query.type === 'scatterpic'||this.$route.query.type === 'histo'||this.$route.query.type === 'Line_Pic')">
                    <img src="../assets/example/tiaoxing.png" alt="Example Image" style="width: 200px; height: 150px;top:40%" />
                    </div>
                    <div v-if="(this.$route.query.type==='PiePic'||this.$route.query.type==='IrpiePic'||this.$route.query.type==='wordcloudpic')">
                    <img src="../assets/example/bingzhuang.png" alt="Example Image" style="width: 200px; height: 150px;top:40%" />
                    </div>
                    <div v-if="(this.$route.query.type==='boxpic')">
                    <img src="../assets/example/xiangxian.png" alt="Example Image" style="width: 380px; height: 100px;top:40%;left:10%" />
                    </div>
                    <div v-if="(this.$route.query.type==='bubblepic')">
                    <img src="../assets/example/qipao.png" alt="Example Image" style="width: 200px; height: 120px;top:40%" />
                    </div>
                    <div v-if="(this.$route.query.type==='s_area')">
                    <img src="../assets/example/xianxia.png" alt="Example Image" style="width: 380px; height: 100px;top:40%;left:10%" />
                    </div>
                    <div v-if="(this.$route.query.type==='radarpic')">
                    <img src="../assets/example/leida.png" alt="Example Image" style="width: 380px; height:80px;top:40%;left:10%" />
                    </div>
                </section>
               
            </main>
        </form>
</template>
    
    <script>
    import XLSX from 'xlsx/dist/xlsx.full.min.js';
    import NavBar2 from "@/components/NavBar2.vue";
    import PiePic from "@/components/picvue2/PiePic.vue";
    import IrpiePic from "@/components/picvue2/Ir_piePic.vue";
    import s_area from "@/components/picvue2/S_areaPic.vue";
    import Line_Pic from "@/components/picvue2/LinePic.vue";
    import histo from "@/components/picvue2/HistoPic.vue";
    import boxpic from "@/components/picvue2/BoxPic.vue";
    import scatterpic from "@/components/picvue2/ScatterPic.vue";
    import bubblepic from "@/components/picvue2/BubblePic.vue";
    import radarpic from "@/components/picvue2/RadarPic.vue";
    import wordcloudpic from "@/components/picvue2/WordPic.vue";
    import workService from '../services/WorkService';
    import vintage from '@/json/2vintage.json';
    import westeros from '@/json/1westeros.json';
    import essos from '@/json/3essos.json';
    import infographic from '@/json/4infographic.json';
    import purple_passion from '@/json/5purple-passion.json';
    import dark from '@/json/6dark.json';
    import * as echarts from 'echarts'
    export default {
      name: "MymodelPage",
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
      data(){
            return {
                file: null
            }
        },
      
    
        mounted() {
        const param = this.$route.query.type;
        console.log(param); // 输出传递的参数值
        console.log(document.getElementById("title_name").value);

        this.jiazaiData();
        
        console.log(document.getElementById("title_name").value);
        console.log(document.getElementById("title_name").value);
        document.getElementById("close").onclick=function(){
           document.getElementById("submitform").style.display="none";
        }
        document.getElementById("save").onclick=function(){
            // document.getElementById("submitform").style.display="block";
        }
        //阻止表单提交
        this.$refs.myForm.addEventListener('submit', this.handleSubmit);
        },
      
      computed:{
        shouldHideMyElement() {
          // 根据条件返回是否隐藏 myElement
          console.log("隐藏",this.$route.query.type === 'IrpiePic'||this.$route.query.type === 'radarpic'||this.$route.query.type === 'wordcloudpic'||this.$route.query.type === 'PiePic');
          return this.$route.query.type === 'IrpiePic'||this.$route.query.type === 'radarpic'||this.$route.query.type === 'wordcloudpic'||this.$route.query.type === 'PiePic'; // 根据实际需要修改判断条件
        },
      },
        methods: {
            change_data(wholedata) {
            return wholedata
            },
            goToWork(param) {
                //this.$router.go({ path: "/workplace/untitle", query: { type: param } });
                let routeData = this.$router.resolve({ path: "/workplace/untitle", query: { type: param } });
                window.open(routeData.href, '_blank');
            },
        initializeEChart() {

            var theme_list = ["westeros", "vintage", "essos", "infographic", "purple_passion", "dark"];// eslint-disable-line no-unused-vars
                var title_text = document.getElementById("title_name").value;
                console.log("title_name", title_text);
                var title_color = document.getElementById("title_color").value;
                var title_size = document.getElementById("title_size").value;
                var back_color = document.getElementById("back_color").value;
                var grid_color = document.getElementById("grid_color").value;
                var x_name = document.getElementById("x_name").value;
                var x_size = document.getElementById("x_size").value;
                var x_color = document.getElementById("x_color").value;
                var y_name = document.getElementById("y_name").value;
                var y_size = document.getElementById("y_size").value;
                var y_color = document.getElementById("y_color").value;
                var legend_size = document.getElementById("legend_size").value;
                var legend_color = document.getElementById("legend_color").value;
                var ini_theme = document.getElementById("theme").value;

                var title_show = document.getElementById("title_show");
                var grid_show = document.getElementById("grid_show");
                var x_show = document.getElementById("x_show");
                var y_show = document.getElementById("y_show");
                var x_position = document.getElementById("x_position");
                var y_position = document.getElementById("y_position");
                var legend_show = document.getElementById("legend_show");

                if (title_show.value == "1") {
                    title_show.checked = true;
            }
                else {
                    title_show.checked = false;
            }
                if (grid_show.value == "1") {
                    grid_show.checked = true;
            }
                else {
                    grid_show.checked = false;
            }
                if (x_show.value == "1") {
                    x_show.checked = true;
            }
                else {
                    x_show.checked = false;
            }
                if (y_show.value == "1") {
                    y_show.checked = true;
            }
                else {
                    y_show.checked = false;
            }
                if (x_position.value == "1") {
                    x_position.checked = true;
            }
                else {
                    x_position.checked = false;
            }
                if (y_position.value == "1") {
                    y_position.checked = true;
            }
                else {
                    y_position.checked = false;
            }
                if (legend_show.value == "1") {
                    legend_show.checked = true;
            }
                else {
                    legend_show.checked = false;
            }

            echarts.registerTheme('vintage', vintage);
            echarts.registerTheme('westeros', westeros);
            echarts.registerTheme('essos', essos);
            echarts.registerTheme('infographic', infographic);
            echarts.registerTheme('purple_passion', purple_passion);
            echarts.registerTheme('dark', dark);
            var echart = echarts.init(document.getElementById("container"), theme_list[ini_theme]);
            // 4.2 定义配置项

            const box_data = [
                [850, 960, 880, 930, 970],
                [840, 880, 800, 820, 940],
                [790, 930, 870, 880, 960],
                [770, 840, 860, 880, 950],
            ];
            const bubble_data = [
                [8, 33, 10],
                [5, 23, 23],
                [15, 29, 55],
                [10, 20, 30],
                [20, 30, 40],
                [35, 40, 50],
                [37, 50, 60],
            ];
            var option = {};
            var themeoption = {};
                const type = this.$route.query.type;
            if (type == "scatterpic") {
                option = {
                    // 设置图表的标题
                        backgroundColor: back_color,
                    title: {
                            show: (title_show.value == "1"),
                        text: title_text,
                        textStyle: {
                            fontSize: title_size, // 初始字体大小
                                color: title_color
                        }
                    },
                    //设置提示
                        tooltip: {
                            show: true
                    },
                    //设置图例
                        legend: {
                            show: (legend_show.value == "1"),
                        data: ['系列一'],  // 图例项的名称
                        textStyle: {
                            fontSize: legend_size, // 初始字体大小
                                color: legend_color
                        }
                    },
                    //设置坐标轴
                        xAxis: {
                            show: (x_show.value == "1"),
                        type: 'value',  // x 轴类型为数值
                            position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                        nameTextStyle: {
                            color: x_color, // 初始 x 轴名称颜色
                            fontSize: x_size
                        },
                        splitLine: {
                                show: (grid_show.value == "1"),
                                lineStyle: {
                                    color: grid_color
                            }
                        }
                    },
                        yAxis: {
                            show: (y_show.value == "1"),
                            position: (y_position.value == '1' ? 'left' : 'right'),
                            type: 'value',
                        name: y_name, // 初始 y 轴名称
                        nameTextStyle: {
                            color: y_color, // 初始 y 轴名称颜色
                            fontSize: y_size
                        },
                        splitLine: {
                                show: (grid_show.value == "1"),
                                lineStyle: {
                                    color: grid_color
                            }
                        }
                    },
                    //设置数据
                        series: {
                        name: '系列一',  // 系列名称
                        type: 'scatter',  // 散点图类型
                        data: [[3, 4], [5, 6], [7, 8], [9, 10],
                            [3.5, 5], [5, 6.5], [6, 7], [8, 12]]  // 散点数据

                    }
                    };
                themeoption = {
                    // 设置图表的标题
                    title: {
                            show: (title_show.value == "1"),
                        text: title_text,
                    },
                    //设置提示
                        tooltip: {
                            show: true
                    },
                    //设置图例
                        legend: {
                            show: (legend_show.value == "1"),
                            data: ["系列一"],
                    },
                    //设置坐标轴
                        xAxis: {
                            show: (x_show.value == "1"),
                            type: 'value',
                            position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                    },
                        yAxis: {
                            show: (y_show.value == "1"),
                            position: (y_position.value == '1' ? 'left' : 'right'),
                            type: 'value',
                        name: y_name, // 初始 y 轴名称
                    },
                    //设置数据
                        series: {
                        name: '系列一',  // 系列名称
                        type: 'scatter',  // 散点图类型
                        data: [[3, 4], [5, 6], [7, 8], [9, 10],
                            [3.5, 5], [5, 6.5], [6, 7], [8, 12]]  // 散点数据

                    }
                };
            }
            else if (type == "PiePic") {
                option = {
                    // 设置图表的标题
                    backgroundColor: back_color,
                    title: {
                        show: (title_show.value == "1"),
                        text: title_text,
                        textStyle: {
                            fontSize: title_size, // 初始字体大小
                                color: title_color
                        }
                    },
                    //设置提示
                    tooltip: {
                        show: true
                    },
                    //设置图例
                    legend: {
                        show: (legend_show.value == "1"),
                        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                        textStyle: {
                            fontSize: legend_size, // 初始字体大小
                            color: legend_color
                        }
                    },
                    //设置坐标轴
                    xAxis: {
                        show: 0,
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                        nameTextStyle: {
                            color: x_color, // 初始 x 轴名称颜色
                            fontSize: x_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    yAxis: {
                            show: 0,
                        position: (y_position.value == '1' ? 'left' : 'right'),
                        type: 'value',
                        name: y_name, // 初始 y 轴名称
                        nameTextStyle: {
                            color: y_color, // 初始 y 轴名称颜色
                            fontSize: y_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    //设置数据
                    series: {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                    }
                };
                themeoption = {
                    // 设置图表的标题
                    title: {
                            show: (title_show.value == "1"),
                        text: title_text,
                    },
                    //设置提示
                    tooltip: {
                            show: true
                    },
                    //设置图例
                        legend: {
                            show: (legend_show.value == "1"),
                        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                    },
                    //设置坐标轴
                        xAxis: {
                            show: 0,
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                    },
                        yAxis: {
                            show: 0,
                            position: (y_position.value == '1' ? 'left' : 'right'),
                            type: 'value',
                        name: y_name, // 初始 y 轴名称
                    },
                    //设置数据
                    series: {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                    }
                };
            }
            else if (type == "IrpiePic") {
                option = {
                        // 设置图表的标题
                    backgroundColor: back_color,
                    title: {
                        show: (title_show.value == "1"),
                        text: title_text,
                        textStyle: {
                            fontSize: title_size, // 初始字体大小
                                color: title_color
                        }
                    },
                    //设置提示
                    tooltip: {
                        show: true
                    },
                    //设置图例
                    legend: {
                        show: (legend_show.value == "1"),
                        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                        textStyle: {
                            fontSize: legend_size, // 初始字体大小
                            color: legend_color
                        }
                    },
                    //设置坐标轴
                    xAxis: {
                        show: 0,
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                        nameTextStyle: {
                            color: x_color, // 初始 x 轴名称颜色
                            fontSize: x_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    yAxis: {
                            show: 0,
                        position: (y_position.value == '1' ? 'left' : 'right'),
                        type: 'value',
                        name: y_name, // 初始 y 轴名称
                        nameTextStyle: {
                            color: y_color, // 初始 y 轴名称颜色
                            fontSize: y_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    //设置数据
                    series: {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        roseType: 'radius',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                    }
                };
                themeoption = {
                    // 设置图表的标题
                    title: {
                            show: (title_show.value == "1"),
                        text: title_text,
                    },
                    //设置提示
                    tooltip: {
                            show: true
                    },
                    //设置图例
                        legend: {
                            show: (legend_show.value == "1"),
                        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                    },
                    //设置坐标轴
                        xAxis: {
                            show: 0,
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                    },
                        yAxis: {
                            show: 0,
                            position: (y_position.value == '1' ? 'left' : 'right'),
                            type: 'value',
                        name: y_name, // 初始 y 轴名称
                    },
                    //设置数据
                    series: {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        roseType: 'radius',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                    }
                    };
            }
            else if (type == "boxpic") {
                option = {
                    // 设置图表的标题
                        backgroundColor: back_color,
                    title: {
                            show: (title_show.value == "1"),
                        text: title_text,
                        textStyle: {
                            fontSize: title_size, // 初始字体大小
                                color: title_color
                        }
                    },
                    //设置提示
                        tooltip: {
                            show: true,
                    },
                    //设置图例
                        legend: {
                            show: (legend_show.value == "1"),
                        data: ['系列一'],  // 图例项的名称
                        textStyle: {
                            fontSize: legend_size, // 初始字体大小
                                color: legend_color
                        }
                    },
                    //设置坐标轴
                        xAxis: {
                            show: (x_show.value == "1"),
                        type: 'category',  // x 轴类型为数值
                        data: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
                            position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                        nameTextStyle: {
                            color: x_color, // 初始 x 轴名称颜色
                            fontSize: x_size
                        },
                        splitLine: {
                                show: (grid_show.value == "1"),
                                lineStyle: {
                                    color: grid_color
                            }
                        }
                    },
                        yAxis: {
                            show: (y_show.value == "1"),
                            position: (y_position.value == '1' ? 'left' : 'right'),
                            type: 'value',
                        name: y_name, // 初始 y 轴名称
                        nameTextStyle: {
                            color: y_color, // 初始 y 轴名称颜色
                            fontSize: y_size
                        },
                        splitLine: {
                                show: (grid_show.value == "1"),
                                lineStyle: {
                                    color: grid_color
                            }
                        }
                    },
                    //设置数据
                    series: [{
                        type: 'candlestick',
                        data: box_data,
                    }],
                    };
                    themeoption = {
                    // 设置图表的标题
                    title: {
                            show: (title_show.value == "1"),
                        text: title_text,
                    },
                    //设置提示
                        tooltip: {
                            show: true
                    },
                    //设置图例
                        legend: {
                            show: (legend_show.value == "1"),
                            data: ["系列一"],
                    },
                    //设置坐标轴
                        xAxis: {
                            show: (x_show.value == "1"),
                            type: 'category',
                        data: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
                            position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                    },
                        yAxis: {
                            show: (y_show.value == "1"),
                            position: (y_position.value == '1' ? 'left' : 'right'),
                            type: 'value',
                        name: y_name, // 初始 y 轴名称
                    },
                    //设置数据
                    series: {
                        type: 'candlestick',
                        data: box_data,
                    },
                    };
            }
            else if (type == 'bubblepic') {
                option = {
                    // 设置图表的标题
                    backgroundColor: back_color,
                    title: {
                        show: (title_show.value == "1"),
                        text: title_text,
                        textStyle: {
                            fontSize: title_size, // 初始字体大小
                            color: title_color
                        }
                    },
                    //设置提示
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            return `x: ${params.data[0]}<br>y: ${params.data[1]}<br>z: ${params.data[2]}`;
                        }
                    },
                    //设置图例
                    legend: {
                        show: (legend_show.value == "1"),
                        data: ['系列一'],  // 图例项的名称
                        textStyle: {
                            fontSize: legend_size, // 初始字体大小
                            color: legend_color
                        }
                    },
                    //设置坐标轴
                    xAxis: {
                        show: (x_show.value == "1"),
                        type: 'value',  // x 轴类型为数值
                        position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                        nameTextStyle: {
                            color: x_color, // 初始 x 轴名称颜色
                            fontSize: x_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    yAxis: {
                        show: (y_show.value == "1"),
                        position: (y_position.value == '1' ? 'left' : 'right'),
                        type: 'value',
                        name: y_name, // 初始 y 轴名称
                        nameTextStyle: {
                            color: y_color, // 初始 y 轴名称颜色
                            fontSize: y_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    //设置数据
                    series: {
                        name: '系列一',
                        type: 'scatter',
                        symbolSize: function (data) {
                            return Math.sqrt(data[2]) * 5; // 设置气泡的大小，这里使用 z 值开平方根作为半径
                        },
                        data: bubble_data,
                    },
                }
                console.log(option.series.symbolSize);
                themeoption = {
                    // 设置图表的标题
                    title: {
                        show: (title_show.value == "1"),
                        text: title_text,
                    },
                    //设置提示
                    tooltip: {
                        show: true
                    },
                    //设置图例
                    legend: {
                        show: (legend_show.value == "1"),
                        data: ["系列一"],
                    },
                    //设置坐标轴
                    xAxis: {
                        show: (x_show.value == "1"),
                        type: 'value',
                        position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                    },
                    yAxis: {
                        show: (y_show.value == "1"),
                        position: (y_position.value == '1' ? 'left' : 'right'),
                        type: 'value',
                        name: y_name, // 初始 y 轴名称
                    },
                    //设置数据
                    series: {
                        name: '系列一',
                        type: 'scatter',
                        symbolSize: function (data) {
                            return Math.sqrt(data[2]) * 5; // 设置气泡的大小，这里使用 z 值开平方根作为半径
                        },
                        data: bubble_data,
                    },
                };
            }
            else if (type == "histo") {
                option = {
                    // 设置图表的标题
                    backgroundColor:back_color,
                    title: {
                        show: (title_show.value=="1"),
                        text: title_text,
                        textStyle: {
                            fontSize: title_size, // 初始字体大小
                            color:title_color
                        }
                    },
                    //设置提示
                    tooltip:{
                        show:true
                    },
                    //设置图例
                    legend:{
                        show:(legend_show.value=="1"),
                        data:["销量"],
                        textStyle: {
                            fontSize: legend_size, // 初始字体大小
                            color:legend_color
                        }
                    },
                    //设置坐标轴
                    xAxis:{
                        show:(x_show.value=="1"),
                        data:["一月","二月","三月","四月"],
                        position:(x_position.value=='1'?'bottom':'top'),
                        name: x_name, // 初始 x 轴名称
                        nameTextStyle: {
                            color: x_color, // 初始 x 轴名称颜色
                            fontSize: x_size
                        },
                        splitLine: {
                            show: (grid_show.value=="1"),
                            lineStyle:{
                            color: grid_color
                            }
                        }
                    },
                    yAxis:{
                        show:(y_show.value=="1"),
                        position:(y_position.value=='1'?'left':'right'),
                        type:'value',
                        name: y_name, // 初始 y 轴名称
                        nameTextStyle: {
                            color: y_color, // 初始 y 轴名称颜色
                            fontSize: y_size
                        },
                        splitLine: {
                            show: (grid_show.value=="1"),
                            lineStyle:{
                            color: grid_color
                            }
                        }
                    },
                    //设置数据
                    series:{
                        name:"销量",
                        type:"bar",
                        data:[200,400,600,300]
                    }
                };  
                themeoption = {
                    // 设置图表的标题
                    title: {
                        show: (title_show.value=="1"),
                        text: title_text,
                    },
                    //设置提示
                    tooltip:{
                        show:true
                    },
                    //设置图例
                    legend:{
                        show:(legend_show.value=="1"),
                        data:["销量"],
                    },
                    //设置坐标轴
                    xAxis:{
                        show:(x_show.value=="1"),
                        data:["一月","二月","三月","四月"],
                        position:(x_position.value=='1'?'bottom':'top'),
                        name: x_name, // 初始 x 轴名称
                    },
                    yAxis:{
                        show:(y_show.value=="1"),
                        position:(y_position.value=='1'?'left':'right'),
                        type:'value',
                        name: y_name, // 初始 y 轴名称
                    },
                    //设置数据
                    series:{
                        name:"销量",
                        type:"bar",
                        data:[200,400,600,300]
                    }
                };               
            }
            else if (type == "Line_Pic") {
                option = {
                    // 设置图表的标题
                    backgroundColor:back_color,
                    title: {
                        show: (title_show.value=="1"),
                        text: title_text,
                        textStyle: {
                            fontSize: title_size, // 初始字体大小
                            color:title_color
                        }
                    },
                    //设置提示
                    tooltip:{
                        show:true
                    },
                    //设置图例
                    legend:{
                        show:(legend_show.value=="1"),
                        data:["销量"],
                        textStyle: {
                            fontSize: legend_size, // 初始字体大小
                            color:legend_color
                        }
                    },
                    //设置坐标轴
                    xAxis:{
                        show:(x_show.value=="1"),
                        data:["一月","二月","三月","四月"],
                        position:(x_position.value=='1'?'bottom':'top'),
                        name: x_name, // 初始 x 轴名称
                        nameTextStyle: {
                            color: x_color, // 初始 x 轴名称颜色
                            fontSize: x_size
                        },
                        splitLine: {
                            show: (grid_show.value=="1"),
                            lineStyle:{
                            color: grid_color
                            }
                        }
                    },
                    yAxis:{
                        show:(y_show.value=="1"),
                        position:(y_position.value=='1'?'left':'right'),
                        type:'value',
                        name: y_name, // 初始 y 轴名称
                        nameTextStyle: {
                            color: y_color, // 初始 y 轴名称颜色
                            fontSize: y_size
                        },
                        splitLine: {
                            show: (grid_show.value=="1"),
                            lineStyle:{
                            color: grid_color
                            }
                        }
                    },
                    //设置数据
                    series:{
                        name:"销量",
                        type:"line",
                        data:[200,400,600,300]
                    }
                };  

                themeoption = {
                // 设置图表的标题
                    title: {
                        show: (title_show.value=="1"),
                        text: title_text,
                    },
                    //设置提示
                    tooltip:{
                        show:true
                    },
                    //设置图例
                    legend:{
                        show:(legend_show.value=="1"),
                        data:["销量"],
                    },
                    //设置坐标轴
                    xAxis:{
                        show:(x_show.value=="1"),
                        data:["一月","二月","三月","四月"],
                        position:(x_position.value=='1'?'bottom':'top'),
                        name: x_name, // 初始 x 轴名称
                    },
                    yAxis:{
                        show:(y_show.value=="1"),
                        position:(y_position.value=='1'?'left':'right'),
                        type:'value',
                        name: y_name, // 初始 y 轴名称
                    },
                    //设置数据
                    series:{
                        name:"销量",
                        type:"line",
                        data:[200,400,600,300]
                    }
                };                
            }
            else if (type == "radarpic") {
                option = {
                    // 设置图表的标题
                    backgroundColor: back_color,
                    title: {
                        show: (title_show.value == "1"),
                        text: title_text,
                        textStyle: {
                            fontSize: title_size, // 初始字体大小
                                color: title_color
                        }
                    },
                    //设置提示
                    tooltip: {
                        show: true
                    },
                    //设置图例
                    legend: {
                        show: (legend_show.value == "1"),
                        data: ['Allocated Budget', 'Actual Spending'],
                        textStyle: {
                            fontSize: legend_size, // 初始字体大小
                            color: legend_color
                        }
                    },
                    radar: {
                        // shape: 'circle',
                        indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Technology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 }
                        ]
                    },
                    //设置坐标轴
                    xAxis: {
                        show: 0,
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                        nameTextStyle: {
                            color: x_color, // 初始 x 轴名称颜色
                            fontSize: x_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    yAxis: {
                        show:0,
                        position: (y_position.value == '1' ? 'left' : 'right'),
                        type: 'value',
                        name: y_name, // 初始 y 轴名称
                        nameTextStyle: {
                            color: y_color, // 初始 y 轴名称颜色
                            fontSize: y_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    //设置数据
                    series: [
                        {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: 'Allocated Budget'
                            },
                            {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Actual Spending'
                            }
                        ]
                        }
                    ]
                };
                themeoption = {
                    // 设置图表的标题
                    title: {
                        show: (title_show.value=="1"),
                        text: title_text,
                    },
                    //设置提示
                    tooltip: {
                        show:true
                    },
                    //设置图例
                    legend:{
                        show:(legend_show.value=="1"),
                        data: ['Allocated Budget', 'Actual Spending'],
                    },
                    radar: {
                        // shape: 'circle',
                        indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Technology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 }
                        ]
                    },
                    //设置坐标轴
                    xAxis:{
                        show:0,
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        position:(x_position.value=='1'?'bottom':'top'),
                        name: x_name, // 初始 x 轴名称
                    },
                    yAxis:{
                        show:0,
                        position:(y_position.value=='1'?'left':'right'),
                        type:'value',
                        name: y_name, // 初始 y 轴名称
                    },
                    //设置数据
                    series: 
                        {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: 'Allocated Budget'
                            },
                            {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Actual Spending'
                            }
                        ]
                        }
                    
                };                
            }
            else if (type == "s_area") {
                option = {
                    // 设置图表的标题
                    backgroundColor: back_color,
                    title: {
                        show: (title_show.value == "1"),
                        text: title_text,
                        textStyle: {
                            fontSize: title_size, // 初始字体大小
                                color: title_color
                        }
                    },
                    //设置提示
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        type: 'cross',
                        },
                    },
                    //设置图例
                    legend: {
                        show: (legend_show.value == "1"),
                        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                        textStyle: {
                            fontSize: legend_size, // 初始字体大小
                            color: legend_color
                        }
                    },
                    //设置坐标轴
                    xAxis: {
                        show: (x_show.value == "1"),
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        position: (x_position.value == '1' ? 'bottom' : 'top'),
                        name: x_name, // 初始 x 轴名称
                        nameTextStyle: {
                            color: x_color, // 初始 x 轴名称颜色
                            fontSize: x_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    yAxis: {
                        show: (y_show.value == "1"),
                        position: (y_position.value == '1' ? 'left' : 'right'),
                        type: 'value',
                        name: y_name, // 初始 y 轴名称
                        nameTextStyle: {
                            color: y_color, // 初始 y 轴名称颜色
                            fontSize: y_size
                        },
                        splitLine: {
                            show: (grid_show.value == "1"),
                            lineStyle: {
                                color: grid_color
                            }
                        }
                    },
                    //设置数据
                    series: [
                        {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };
                themeoption = {
                    // 设置图表的标题
                    title: {
                        show: (title_show.value=="1"),
                        text: title_text,
                    },
                    //设置提示
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        type: 'cross',
                        },
                    },
                    //设置图例
                    legend:{
                        show:(legend_show.value=="1"),
                        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
                    },
                    //设置坐标轴
                    xAxis:{
                        show:(x_show.value=="1"),
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        position:(x_position.value=='1'?'bottom':'top'),
                        name: x_name, // 初始 x 轴名称
                    },
                    yAxis:{
                        show:(y_show.value=="1"),
                        position:(y_position.value=='1'?'left':'right'),
                        type:'value',
                        name: y_name, // 初始 y 轴名称
                    },
                    //设置数据
                    series: [
                        {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };               
            }

            // 4.3 更新配置
            echart.setOption(option);
                
            document.getElementById("title_show").onclick=function() {
                if (title_show.checked) {
                    title_show.value='1';
                }
                else{
                    title_show.value='0';
                }
                var updateoption={
                    title: {
                        show: (title_show.value=="1")
                    }             
                }
                themeoption.title.show = (title_show.value == "1");
                echart.setOption(updateoption);           
            }
            document.getElementById("x_show").onclick=function() {
    
                if (x_show.checked) {
                    x_show.value='1';
                }
                else{
                    x_show.value='0';
                }
                var updateoption={
                    xAxis: {
                        show: (x_show.value=="1")
                    }             
                }
                themeoption.xAxis.show = (x_show.value == "1");
                echart.setOption(updateoption);           
            }
            document.getElementById("x_position").onclick=function() {
    
                if (x_position.checked) {
                    x_position.value='1';
                }
                else{
                    x_position.value='0';
                }
                var updateoption={
                    xAxis: {
                        position:(x_position.value=='1'?'bottom':'top')
                    }             
                }
                themeoption.xAxis.position = (x_position.value=='1'?'bottom':'top');
                echart.setOption(updateoption);           
            }
            document.getElementById("y_show").onclick=function() {
    
                if (y_show.checked) {
                    y_show.value='1';
                }
                else{
                    y_show.value='0';
                }
                var updateoption={
                    yAxis: {
                        show: (y_show.value=="1")
                    }             
                }
                themeoption.yAxis.show=(y_show.value=="1")
                echart.setOption(updateoption);           
            }
            document.getElementById("y_position").onclick=function() {
    
                if (y_position.checked) {
                    y_position.value='1';
                }
                else{
                    y_position.value='0';
                }
                var updateoption={
                    yAxis: {
                        position:(y_position.value=='1'?'left':'right')
                    }             
                }
                themeoption.yAxis.position = (y_position.value == '1' ? 'left' : 'right');
                echart.setOption(updateoption);           
            }
            document.getElementById("legend_show").onclick=function() {
                if (legend_show.checked) {
                    legend_show.value='1';
                }
                else{
                    legend_show.value='0';
                }
                var updateoption={
                    legend: {
                        show: (legend_show.value=="1")
                    }             
                }
                themeoption.legend.show=(legend_show.value=="1")
                echart.setOption(updateoption);           
            }
            document.getElementById("grid_show").onclick=function() {
                if (grid_show.checked) {
                    grid_show.value='1';
                }
                else{
                    grid_show.value='0';
                }
                var updateoption={
                    xAxis:{
                        splitLine: {
                            show: (grid_show.value=="1"),
                        }
                    },
                    yAxis:{
                        splitLine: {
                            show: (grid_show.value=="1"),
                        }
                    }       
                }
                echart.setOption(updateoption);           
            }
    
            document.getElementById('title_name').addEventListener('input', function(event) {
                var userInput=event.target.value;
                var updateoption={
                    title: {
                        text: userInput
                    }             
                }
                themeoption.title.text = userInput;
                //切换标题
                echart.setOption(updateoption);       
            });
            document.getElementById('title_size').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        title: {
                            textStyle: {
                                fontSize: userInput // 初始字体大小
                            }
                        }             
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            document.getElementById('title_color').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        title: {
                            textStyle: {
                                color: userInput // 初始字体大小
                            }
                        }             
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            document.getElementById('back_color').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        backgroundColor:userInput
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            document.getElementById('grid_color').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        // grid: {
                        //     containLabel: true
                        // },
                        xAxis: {
                            splitLine: {
                                show: true,
                                lineStyle:{
                                color: userInput,
                                }
                            }
                        },
                        yAxis: {
                            splitLine: {
                                show: true,
                                lineStyle:{
                                color: userInput,
                                }
                            }
                        },
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            document.getElementById('x_name').addEventListener('input', function(event) {
                var userInput=event.target.value;
                var updateoption={
                    xAxis:{
                        name: userInput
                    }
                }
                themeoption.xAxis.name = userInput;
                //切换标题
                echart.setOption(updateoption);       
            });
            document.getElementById('x_color').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        xAxis:{
                            nameTextStyle: {
                                color: userInput
                            }
                        }
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            document.getElementById('x_size').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        xAxis:{
                            nameTextStyle: {
                                fontSize: userInput
                            }
                        }
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            document.getElementById('y_name').addEventListener('input', function(event) {
                var userInput=event.target.value;
                var updateoption={
                    yAxis:{
                        name: userInput
                    }
                }
                themeoption.yAxis.name = userInput;
                //切换标题
                echart.setOption(updateoption);       
            });
            document.getElementById('y_color').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        yAxis:{
                            nameTextStyle: {
                                color: userInput
                            }
                        }
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            document.getElementById('y_size').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        yAxis:{
                            nameTextStyle: {
                                fontSize: userInput
                            }
                        }
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            document.getElementById('legend_color').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        legend:{
                            textStyle: {
                                color: userInput
                            }
                        }
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            document.getElementById('legend_size').addEventListener('input', function(event) {
                var userInput=event.target.value;
                    var updateoption={
                        legend:{
                            textStyle: {
                                fontSize: userInput
                            }
                        }
                    }
                    //切换标题
                    echart.setOption(updateoption);       
            });
            

            /*保存图片 */
            document.getElementById('download').onclick=function downloadChart() {
                // 保存图表为图片
                const chart = echarts.getInstanceByDom(document.getElementById("container"));
                const base64Data = chart.getDataURL({ pixelRatio: 2 }); // 设置 pixelRatio 可以提高图片质量
                const link = document.createElement('a');
                link.href = base64Data;
                link.download = 'chart.png'; // 下载的文件名
                link.click();
            }

            const vm = this; // 保存 Vue 组件实例的引用
           
            document.getElementById('data').addEventListener('input', function(event) {
                console.log('filelalala');
                vm.file = event.target.files[0];
                console.log(vm.file);
                
                document.getElementById('btn').onclick=function handleExtractData() {
                    console.log(vm.file);
                    if (!vm.file) {
                        console.error('No file selected.');
                        return;
                    }
                    console.log(vm.$route.query.type);
                    const reader = new FileReader();
                    const type=vm.$route.query.type;
                    reader.onload = (e) => {
                        const data = new Uint8Array(e.target.result);
                        const workbook = XLSX.read(data, { type: 'array' });
                        const sheetName = workbook.SheetNames[0];
                        const worksheet = workbook.Sheets[sheetName];
                        const jsonDataValue = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                        var wholedata = {};
                        var updateoption={};
                        if(type=='Line_Pic'||type=='scatterpic'||type=='histo')
                        {
    
                            wholedata.x_name = jsonDataValue[0][0];
                            wholedata.y_name = jsonDataValue[0][1];
                            wholedata.x = [];
                            wholedata.y = [];
                        
                            // 将 x 的取值存入 x 数组
                            for (let i = 1; i < jsonDataValue.length; i++) {
                              wholedata.x.push(jsonDataValue[i][0]);
                            }
                        
                            // 将 y 的取值存入 y 数组
                            for (let i = 1; i < jsonDataValue.length; i++) {
                              wholedata.y.push(jsonDataValue[i][1]);
                            }
                        
                            console.log('x_name:', wholedata.x_name);
                            console.log('y_name:', wholedata.y_name);
                            console.log('x:', wholedata.x);
                            console.log('y:', wholedata.y);
                            /*修改echart参数 */
                            updateoption={
                                    legend:{
                                        //show:(legend_show.value=="1"),
                                        data:[wholedata.y_name],
                                    },
                                    xAxis:{
                                       data: wholedata.x,
                                       name:wholedata.x_name
                                    },
                                    yAxis:{
                                        //data:wholedata.y,
                                        name:wholedata.y_name
                                    },
                                    series:[{
                                        data:wholedata.y
                                    }]
                                }
                                //切换标题
                            echart.setOption(updateoption);
                            themeoption.legend.data=wholedata.y_name;
                            themeoption.xAxis.data=wholedata.x;
                            themeoption.xAxis.name=wholedata.x_name;
                            themeoption.yAxis.name=wholedata.y_name;
                            themeoption.series.data=wholedata.y;
                        }
                        else if(type=='PiePic'||type=='IrpiePic'||type=='wordcloudpic')
                        {
                             // 修改整体数据对象
                            wholedata.data = [];
    
                            // 将第一列的值存入 data 数组的 name 属性，第二列的值存入 data 数组的 value 属性
                            for (let i = 0; i < jsonDataValue.length; i++) {
                                wholedata.data.push({
                                value: jsonDataValue[i][1],
                                name: jsonDataValue[i][0]
                                });
                            }
                            console.log('data:', wholedata.data);
                            /*修改echart参数 */
                            updateoption={
                                series:[{
                                    data:wholedata.data
                                }]
                            }
                            
                            echart.setOption(updateoption);
                            themeoption.series.data=wholedata.data;
                        }           
                        else if(type=='boxpic')
                        {
                           // 修改整体数据对象
                            wholedata.part_names = [];
                            wholedata.part_min = [];
                            wholedata.Q1 = [];
                            wholedata.Q2 = [];
                            wholedata.Q3 = [];
                            wholedata.part_max = [];
                            wholedata.data=[];
                            // 将每列的值存入相应的数组
                            for (let i = 0; i < jsonDataValue.length; i++) {
                                wholedata.part_names.push(jsonDataValue[i][0]);
                                wholedata.part_min.push(jsonDataValue[i][1]);
                                wholedata.Q1.push(jsonDataValue[i][2]);
                                wholedata.Q2.push(jsonDataValue[i][3]);
                                wholedata.Q3.push(jsonDataValue[i][4]);
                                wholedata.part_max.push(jsonDataValue[i][5]);
                            }
                            wholedata.data.push(wholedata.part_min);
                            wholedata.data.push(wholedata.Q1);
                            wholedata.data.push(wholedata.Q2);
                            wholedata.data.push(wholedata.Q3);
                            wholedata.data.push(wholedata.part_max);
                            console.log('part_names:', wholedata.part_names);
                            console.log('part_min:', wholedata.part_min);
                            console.log('Q1:', wholedata.Q1);
                            console.log('Q2:', wholedata.Q2);
                            console.log('Q3:', wholedata.Q3);
                            console.log('part_max:', wholedata.part_max);
                        
                            /*修改echart参数 */
                            updateoption={
                                    xAxis:{
                                        data:wholedata.part_names
                                    },
                                    series:[{
                                        data:wholedata.data
                                    }]
                            }
                            //切换标题
                            echart.setOption(updateoption);
                            themeoption.xAxis.data=wholedata.part_names;
                            themeoption.series.data=wholedata.data;
                        }
                        else if(type=='bubblepic')
                        {
                            // 修改整体数据对象
                            wholedata.x = [];
                            wholedata.y = [];
                            wholedata.size = [];
                            wholedata.data=[];
                            wholedata.symbolsize_data=[];
                            
                            // 将每列的值存入相应的数组
                            for (let i = 0; i < jsonDataValue.length; i++) {
                                wholedata.x.push(jsonDataValue[i][0]);
                                wholedata.y.push(jsonDataValue[i][1]);
                                wholedata.size.push(jsonDataValue[i][2]);
                                wholedata.data.push(jsonDataValue[i]);
                                wholedata.symbolsize_data.push(Math.sqrt(jsonDataValue[i][2]) * 5);
                            }
                            

                            console.log('x:', wholedata.x);
                            console.log('y:', wholedata.y);
                            console.log('size:', wholedata.size);
                            console.log('data:',wholedata.data);
                            /*修改echart参数 */
                            // updateoption={
    
                            //         series:[{
                            //             symbolSize: function (wholedata) {
                            //                 return Math.sqrt(wholedata[2]) * 5; // 设置气泡的大小，这里使用 z 值开平方根作为半径
                            //             },
                            //             data:wholedata
                            //         }]
                            //     }
                            //     //切换标题
                            // echart.setOption(updateoption);  
                            // themeoption.series.data=wholedata;  
                            // themeoption.symbolSize(wholedata) ;
                            /* 修改echart参数 */
                            updateoption = {
                                    series: [{
                                        // symbolSize: function (data) {
                                        //     return Math.sqrt(data[2]) * 5; // 设置气泡的大小，这里使用 z 值开平方根作为半径
                                        // },
                                        //symbolSize:wholedata.symbolsize_data,
                                        data: wholedata.data // 将 wholedata 包装在数组中
                                    }]
                            }
                            // console.log(updateoption.series.symbolSize);
                            // 切换标题
                            echart.setOption(updateoption);
                            console.log("themeoption.series.data",themeoption.series.data);
                            themeoption.series.data = wholedata.data;
                            console.log("themeoption.series.data",themeoption.series.data);
                            // console.log(themeoption.series.symbolSize) ;
                        }
                        else if(type=='s_area')
                        {
                            // 修改整体数据对象
                            wholedata.x = jsonDataValue[0].slice(1);
                            wholedata.result = [];
                            
                            for (let i = 1; i < jsonDataValue.length; i++) {
                                const category = jsonDataValue[i][0];
                                const values = jsonDataValue[i].slice(1);
                                wholedata.result.push({ category, values });
                            }
                        
                            console.log('x:', wholedata.x);
                            console.log('result', wholedata.result);
                        
                            /*修改echart参数 */
                            updateoption={
                                    legend:{
                                        data:wholedata.category
                                    },
                                
                                    series:[{
                                        data:wholedata.values
                                    }]
                            }
                            
                            echart.setOption(updateoption);
                            themeoption.legend.data=wholedata.category;
                            themeoption.series.data=wholedata.values;
                        }
                        else if(type=='radarpic')
                        {
                            // 修改整体数据对象
                            wholedata.result = [];
                            
                            for (let i = 1; i < jsonDataValue.length; i++) {
                              const name = jsonDataValue[i][0];
                              const value = jsonDataValue[i].slice(1);
                              wholedata.result.push({ value,name  });
                            }
                            
                            console.log('result', wholedata.result);
                            /*修改echart参数 */
                            updateoption={
                                    radar:{
                                        indicator:[
                        { name: 'Sales', max: 10 },
                        { name: 'Administration', max: 10 },
                        { name: 'Information Technology', max: 10 },
                        { name: 'Customer Support', max: 10 },
                        { name: 'Development', max: 10 }]
                    },
                                    series:[{
                                        data:wholedata.result
                                    }]
                                }
                                //切换标题
                            echart.setOption(updateoption);
                            themeoption.series.data=wholedata.result;
                        }
                        
                    };
    
                    reader.readAsArrayBuffer(vm.file);
                }
            });
    
            var list = document.getElementById("theme-list").getElementsByTagName("li");
            var theme=document.getElementById("theme");
            for (var i=0; i<list.length; i++) {
                list[i].num = i;
                list[i].onclick = function () {
                Change(this.num);
                }
            }
            function Change(curIndex) {
                for (var i=0; i<list.length; i++) {
                    list[i].style.borderColor = 'rgb(225, 225, 225)';
                }
                list[curIndex].style.borderColor = 'black';
                theme.value=curIndex;
                echart.dispose();  
                echart = echarts.init(document.getElementById("container"), theme_list[theme.value]);
                //切换主题
                echart.setOption(themeoption);
            }
        
            var list2 = document.getElementById("choose_bar").getElementsByTagName("li");
            var section = document.getElementById("change").getElementsByTagName("section");
            for (var j=0; j<list2.length; j++) {
                list2[j].num = j;
                list2[j].onclick = function () {
                    change(this.num);
                }
            }
            function change(curIndex) {
                for (var k=0; k<list2.length; k++) {
                    list2[k].className = "";
                    section[k].style.display = "none";
                    list2[k].style.backgroundColor = 'rgb(255,255,255)';
                }
                list2[curIndex].className = "active";
                list2[curIndex].style.backgroundColor = '#f0f0f0d6';
                section[curIndex].style.display ="block";
            }
            document.getElementById("close").onclick=function(){
                document.getElementById("submitform").style.display="none";
            }
            document.getElementById("save").onclick=function(){
                document.getElementById("submitform").style.display="block";
                console.log("submit");
            }
        },
        handleSubmit(event) {
            // 阻止表单的默认提交行为
            event.preventDefault();
        },
        jiazaiData(){
            console.log("jiazai里:",document.getElementById("title_name").value);
            console.log(this.$route.path); // 输出当前路由的路径
            const path=this.$route.path;
            const parts = path.split("/");
            const name = parts[2];
            workService.fetchData(name).then(data => {
                console.log(data); 
                if(data){
                    document.getElementById('name_in_list').value=data.template_name;
                    document.getElementById('title_show').checked=data.title.show;
                    document.getElementById('title_name').value=data.title.text;
                    document.getElementById('title_size').value=data.title.textstyle_fontSize;
                    document.getElementById('title_color').value=data.title.textstyle_color;
                    document.getElementById('grid_show').checked=data.grid.show;
                    document.getElementById('grid_color').value=data.grid.borderColor;
                    document.getElementById('x_show').checked=data.xAxis.show;
                    document.getElementById('x_position').value=data.xAxis.position;
                    document.getElementById('x_name').value=data.xAxis.name;
                    document.getElementById('x_size').value=data.xAxis.nameTextStyle_fontSize;
                    document.getElementById('x_color').value=data.xAxis.nameTextStyle_color;
                    document.getElementById('y_show').checked=data.yAxis.show;
                    document.getElementById('y_position').value=data.yAxis.position;
                    document.getElementById('y_name').value=data.yAxis.name;
                    document.getElementById('y_size').value=data.yAxis.nameTextStyle_fontSize;
                    document.getElementById('y_color').value=data.yAxis.nameTextStyle_color;
                    document.getElementById('back_color').value=data.grid.backgroundColor;
                    document.getElementById('legend_show').checked=data.legend.show;
                    document.getElementById('legend_color').value=data.legend.color;
                    document.getElementById('legend_size').value=data.legend.size;           
                    document.getElementById('theme').value=data.colormode;
            }
            this.initializeEChart();
                }).catch(error => {
                    console.log(error); 
                });
        },
    
        // submitData() {
        // //     document.getElementById("submitform").style.display="none";
        // //     console.log("here submit data");
          
        // // const jsonData = {
        // //     template_name: document.getElementById('name_in_list').value,
        // //     template_type: this.$route.query.type,
        // //     title: {
        // //         show: document.getElementById('title_show').checked,
        // //         text: document.getElementById('title_name').value,
        // //         textstyle_fontSize: document.getElementById('title_size').value,
        // //         textstyle_color: document.getElementById('title_color').value
        // //     },
        // //     grid: {
        // //         show: document.getElementById('grid_show').checked,
        // //         backgroundColor: document.getElementById('back_color').value,
        // //         borderColor: document.getElementById('grid_color').value
        // //     },
        // //     legend: {
        // //         show: document.getElementById('legend_show').checked,
        // //         color: document.getElementById('legend_color').value,
        // //         size: document.getElementById('legend_size').value
        // //     },
        // //     xAxis: {
        // //         show: document.getElementById('x_show').checked,
        // //         position: document.getElementById('x_position').value,
        // //         name: document.getElementById('x_name').value,
        // //         nameTextStyle_fontSize: document.getElementById('x_size').value,
        // //         nameTextStyle_color: document.getElementById('x_color').value
        // //     },
        // //     yAxis: {
        // //         show: document.getElementById('y_show').checked,
        // //         position: document.getElementById('y_position').value,
        // //         name: document.getElementById('y_name').value,
        // //         nameTextStyle_fontSize: document.getElementById('y_size').value,
        // //         nameTextStyle_color: document.getElementById('y_color').value
        // //     },
        // //     colormode:document.getElementById('theme').value
        // //     };
    
        // // const jsonDataString = JSON.stringify(jsonData);
        // // console.log(jsonDataString);
    
        // // const modelname = document.getElementById('name_in_list').value;
        // // const modeltype = this.$route.query.type;
        // // const newPath = "/workplace/" + document.getElementById('name_in_list').value;
    
        // // console.log(newPath);
        // // workService.sendData(jsonDataString,modelname);
        // // console.log("modeltype:",modeltype);
        // // this.$router.push({ path: newPath, query: { type: modeltype } });
        // // this.$router.push('/model');
        // }
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
    body{
        overflow: hidden;
    }
    body::-webkit-scrollbar {
        display:none
    }

    .navbar{    
        position:fixed;
        width:100%;
        z-index:99;
        height:50px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 5px 20px rgba(0,0,0,0.5);
        z-index:99;
    }
    .navbar .title{
        position:absolute;
        width:200px;
        top:20%;
        left:10px;
    }
    .navbar .title a {
        font:10 30px Logo;
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
        background-color:#2107b178;
        z-index:-1;
    }
    .contain ._color1{
        top:200px;
        left:350px;
        width: 300px;
        height: 400px;
        position:fixed;
        filter: blur(150px);
        background-color:#0049da4f;
        z-index:-1;
    }
    .contain ._color2{
        top:480px;
        left:750px;
        width: 300px;
        height: 400px;
        position:fixed;
        filter: blur(150px);
        background-color:#004fe24c;
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
        background:rgba(46, 64, 129, 0.279);
        z-index: 2;
    }
    
    .contain .toolbar .model{
        position:absolute;
        top:10%;
        width:70%;
        left:10%;
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
    .contain .toolbar .help span{
        color: aliceblue;
        font:1 15px span;
    }
    .Workplace{
        position:absolute;
        width:1430px;
        height:710px;
        top:50px;
        left: 60px;
        background-color: rgb(255, 255, 255);
    }
    .Nav{
        background-color: rgb(255, 255, 255);
        width: 100%;
        height: 8%;
        border-radius:8px;
        display:flex;
        flex-wrap: wrap;
        justify-content:right;
    }
    .Nav input{
        margin-right:30px;
        margin-top:5px;
        position: relative;
        display: inline-block;
        width:80px;
        height:40px;
        border-radius:20px;
        border-style:none;
        background-color: rgba(31, 68, 203, 0.916);
        border-color:rgba(176, 176, 176, 0.911);
        letter-spacing:2px;
        color:aliceblue;
    }
    .Nav input:nth-child(1){
        background-color: rgba(206, 234, 255, 0.434);
        border-style: solid;
        border-width: 1px;
        border-color: darkblue;
        color:darkblue
    }
    .Nav input:nth-child(1):hover{
        background-color: white;
        cursor: pointer;
    }
    .pic_place{
        position:absolute;
        top:8%;
        background-color:rgb(255, 255, 255);
        width: 67%;
        height: 92%;
        left: 15%;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border-radius:10px;
        border: 2px solid darkblue;
    }
    .pic_container{
        position:absolute;
        top:5%;
        height: 90%;
        left:5%;
        width:90%;
    }
    .change_model{
        position:absolute;
        width:15%;
        height: 92%;
        border-style: solid;
        border-width: 1px;
        border-color:rgb(221, 224, 225);
        border-radius:10px;
    }
    .model_nav{
        height:7%;
        width:100%;
        border-style: solid;
        border-width: 1px;
        border-color:rgb(221, 224, 225);
        border-radius:10px;
    }
    .model_nav p{
        text-align: center;
        line-height: 43px;
        position: relative;
        font-size:12px;
        letter-spacing:5px;
        background-color: rgba(255, 255, 255, 0.902);
        color:rgb(52, 52, 52);
    }
    .model{
        width:100%;
        height:93%;
        top:7%;
        overflow-y: auto;
        -ms-overflow-style: none; /* Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* WebKit */
        }
    }
    .change{
        position:absolute;
        left:82%;
        top:8%;
        /* background-color: rgb(255, 255, 255); */
        width: 18%;
        height: 92%;
        border-style: solid;
        border-width: 1px;
        border-color:rgb(221, 224, 225);
        border-radius:10px;

    }
    .choose_bar{
        position:absolute;
        width:100%;
        height:10%;
        border-radius:15px;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .choose_bar li{
        text-align: center;
        line-height: 43px;
        position: relative;
        display: inline-block;
        width:calc((100%/3)*1);
        height:45px;
        font-size:11px;
        letter-spacing:5px;
        background-color: rgba(255, 255, 255, 0.902);
        color:rgb(52, 52, 52);
    }
    .choose_bar li:nth-child(1){
        background-color:#f0f0f0d6;
    }
    .choose_bar li:hover{
        background-color:#f0f0f0d6;
        cursor: pointer;
    }
    .Nav input:hover{
        background-color:rgb(14, 0, 102);
        cursor: pointer;
    }
    .color{
        display: none;
    }
    .color .theme_choose{
        position:absolute;
        top:50px;
        width:100%;
        height:90%;
        overflow-y: auto;
        -ms-overflow-style: none; /* Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* WebKit */
        }
    }
    .color .theme_choose li{
        margin-top:20px;
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
        border-color: rgb(225, 225, 225);
        position:relative;
        left:8%;
        width:84%;
        height:30px;
        display: flex;
        flex-direction: row;
        background-color: rgba(255, 255, 255, 0.324);
    }
    .color .theme_choose li:nth-child(2){
        background-color: rgb(254,248,239);
    }
    .color .theme_choose li:nth-child(5){
        background-color: rgb(91,92,110);
    }
    .color .theme_choose li:nth-child(6){
        background-color: rgb(51,51,51);
    }
    .color .theme_choose li:hover{
        cursor: pointer;
    }
    .color .theme_choose li .colorsquare{
        width:15px;
        height: 15px;
        position: relative;
        top:6px;
        border-radius: 6px;
        margin-left: 17px;
    
    }
    .data_up{
        position:absolute;
        top:50px;
        width:90%;
        height:90%;
        display: none;
        overflow-y: auto;
        -ms-overflow-style: none; /* Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* WebKit */
        }
    }
    .data_up input[type="file"]{
        /* display:none; */
        position: absolute;
        display: inline-block;
        top:10%;
        left:45%;
    }
    .data_up input[type="button"]{
        border-style: none;
        position: absolute;
        display: inline-block;
        width:120px;
        height:40px;
        border-radius:20px;
        background-color: rgba(31, 68, 203, 0.916);
        letter-spacing:2px;
        color:aliceblue;
        top:20%;
        left:45%;
    }
    .data_up img{
        position: absolute;
        top:10%;
        left: 27%;
        width: 12%;
    }
    .moduel{
        position:absolute;
        top:50px;
        width:100%;
        height:90%;
        overflow-y: auto;
        -ms-overflow-style: none; /* Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* WebKit */
        }
    }
    .moduel .content{
        width: 100%;
        height:40px;
        overflow:hidden;
        border-style: solid;
        border-width: 1px;
        border-color: rgb(237, 238, 247);
        /*display: flex;
        flex-direction: column;
        align-items: left;
        gap: 30px; /* 设置元素之间的垂直间隔 */
    }
    .moduel p{
        
        left:5%;
        position: relative;
        top:10px;
        letter-spacing: 3px;
        font-size:12px;

    }
    .moduel p::after{
        content:'';
        background-color: rgba(87, 9, 195, 0.648);
        width: 60px;
        height: 1px;
        position:absolute;
        left:0%;
        bottom:-4px;
    }
    .moduel p a{
        text-decoration: none; /* 取消下划线 */
        color:rgb(99, 99, 99);
    }
    .submenu{
        position: relative;
        width:100%;
        background-color:#f4f6ff;
        top:30px;
        border-width: 1px;
        display: flex;
        flex-direction: column;
        align-items: left;
        gap: 20px; /* 设置元素之间的垂直间隔 */
    }
    #title:target{
        height:250px;
    }
    #canva:target{
        height:200px;
    }
    #x:target{
        height:300px;
    }
    #y:target{
        height:300px;
    }
    #legend:target{
        height:200px;
    }
    .content span{
        font-size: 12px;
        position:relative;
        /* /* top:40px; */
        left:5%;
        color: #474747d4;
        letter-spacing: 3px;
    }
    .show {
        width: 44px;
        height: 23px;
        -webkit-appearance: none; 
        appearance: none;
        background-color: #e5e8ff;
        border-radius: 40px;
        border: 1px solid rgba(117, 117, 117, 0.15);
        position: relative;
        left:50%;
        top:10px;
    }
    .show::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 21px;
        width: 21px;
        background-color: #fff;
        border-radius: 50%;
        transition: all 0.15s ease-in-out;
    } 
    .show:checked {
        background-color: #813cf8;
    }	
    .show::before {
        transition: all 0.15s ease-in-out;
    }
    .show:checked::before {
        left: calc(100% - 21px);
    } 
    
    .name{
        width:54%;
        height:30px;
        border-radius: 15px;
        border: none;
        outline: none;
        font-size: 12px;
    }
    .size{
        width:54%;
        height:30px;
        border-radius: 15px;
        border: none;
        outline: none;
        font-size: 12px;
    }
    ._color{
        width:30px;
        height:30px;
        border-radius: 0px;
        position:relative;
        left:52%;
        top:10px;
        border: none;
    }
    #grid_color{
        position:relative;
        margin-bottom: 30px;   
    }
    #legend_color{
        position:relative;
        left:45%;
        margin-bottom: 30px;
    }
    #x_color,#y_color{
        margin-bottom: 30px;
        position:relative;
        left:45%;
    }
    #x_position,#y_position{
        position:relative;
        left:40%;   
    }
    #title_color{
        margin-bottom: 30px;
    }
    
    .submitform {
        display: none;
        position:absolute;
        left: 500px;
        top: 200px;
        height: 250px;
        width: 450px;
        border-radius: 5px;
        background-color: rgb(227, 246, 253);
        z-index: 99;
    }
    .submitform .close{
        position: absolute;
        left: 420px;
        top: 0px;
        width:30px;
    }
    .submitform .close:hover{
       cursor: pointer; 
    }
    ._head_{
         position: relative;
         top:2px;
         left: 20px;
         width: 400px;
         height: 40px;
    }
    ._head_ p{
        text-align: center;
        font:20px span;
        color:#27374be5;
        letter-spacing: 5px;
    }
    .form-control {
        margin-left: 105px;
        margin-top: 10px;
        width: 240px;
        height: 50px;
        font-size: 16px;
        font-family: span;
        color: rgba(155, 89, 182, 0.7);
        outline: none;
        border: none;
        border-radius: 0px 5px 5px 0px;
        z-index: 99;
    }
    .form-name {
        color: #223142;
        font-family: span;
    }
    .form-name{
       margin-left: 105px;
    }
    .buttons-container {
        position: absolute;
        top:170px;
        left: 170px;
    }
    .btn-primary {
        width: 100px;
        height:40px;
        border-radius: 5px;
        outline: none;
        border-style: none;
        background-color: rgb(104, 141, 220);
    }
    
    .btn-primary:hover{
       background: rgb(28, 28, 141);
       cursor: pointer; 
    }
    
    .hidden{
        position:relative;
        left:0px;
    }
    </style>