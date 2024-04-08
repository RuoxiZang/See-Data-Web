// import Vue from "vue";
//import Router from "vue-router";
import { createRouter, createWebHistory } from 'vue-router';



import MymodelPage from "@/components/MymodelPage";
import HelpPage from "@/components/HelpPage";
import ModelPage from "@/components/ModelPage";
import WelcomePage from "@/components/WelcomePage";
import LoginPage from "@/components/LoginPage";
import RegisterPage from "@/components/RegisterPage";
import WorkPlacePage from "@/components/WorkPlacePage";

// import FileData from "@/components/FileData";
// import WorkTest from "@/components/WorkTest";
// Vue.useAttrs(Router);

//export default new Router({
//    mode:"history",
const routes=[
        {
            path:"/",
            redirect:"/welcome"
        },
        {
            path: "/welcome",
            name: "WelcomePage",
            component: WelcomePage
        },
        {
            path: "/login",
            name: "LoginPage",
            component: LoginPage
        },
        {
            path: "/register",
            name: "RegisterPage",
            component: RegisterPage
        },
        {
            path: "/model",
            name: "ModelPage",
            component: ModelPage
        },
        {
            path: "/mymodel",
            name: "MymodelPage",
            component: MymodelPage
        },
        {
            path: "/help",
            name: "HelpPage",
            component: HelpPage
        },
        {
            path: "/workplace/:templateName",
            name: "WorkPlacePage",
            component: WorkPlacePage,
            props: (route) => ({ type: route.query.type }) // 定义路由的 props，包含 type 参数
        },

    ]


const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;