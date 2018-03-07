import Vue from "vue";
import Router from "vue-router";
import Index from "../view/index.vue"; //首页

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: Index,
            meta: { title: "首页" }
        }
    ]
});
