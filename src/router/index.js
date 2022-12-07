import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    meta: {
      title: "Index"
    }, path: "/", name: "index", redirect : { name: "login"}
  },
  {
    meta: {
      title: "Login"
    }, path: "/login", name: "login", component: () => import("@/views/Login.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(), routes, scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
});

export default router;
