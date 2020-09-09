import Vue from "vue";
import Router from "vue-router";
// import Home from "@/views/Home";
// import About from "@/views/About";
import Intro from "@/views/Intro";
import Main from "@/views/Main";

Vue.use(Router);
/* eslint-disable */
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "Home",
    //   component: Home
    // },
    // {
    //   path: "/about",
    //   name: "About",
    //   component: About
    // }
    {
      path: "/",
      name: "Intro",
      component: Intro
    },
    {
      path: "/main",
      name: "Main",
      component: Main
    }
  ]
});
