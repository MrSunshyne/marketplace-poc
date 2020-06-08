import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "../views/PageHome.vue";
import PageDetail from "../views/PageDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: PageDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
