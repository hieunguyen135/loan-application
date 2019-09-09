import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/admin",
      name: "Admin Dashboard",
      component: () => import("./views/Admin.vue")
    }
  ]
});
