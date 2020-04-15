import Vue from "vue"
import VueRouter from "vue-router"
import Donate from "@/components/Donate"
// import About from "@/pages/components/About"
// import CaveWall from "@/pages/components/CaveWall"

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Donate",
      component: Donate
    }
    // {
    //   path: "about",
    //   name: "About",
    //   component: About
    // },
    // {
    //   path: "wall",
    //   name: "Cave Wall of Honor",
    //   component: CaveWall
    // }
  ]
})
