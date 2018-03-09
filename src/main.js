// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

//modules
import iView from "iview"; //iview模块

//styles
import "iview/dist/styles/iview.css"; //iview样式
import "./assets/public/selftheme.less"; //自定义主题
import "./assets/public/reset.css"; //初始化默认样式

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
});
