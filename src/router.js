import Vue from "vue"
import VueRouter from "vue-router"
import Donate from "@/components/Donate"
import About from "@/components/About"
import CaveWall from "@/components/CaveWall"

Vue.use(VueRouter)
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Donate",
      component: Donate
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/cavewall",
      name: "CaveWall",
      component: CaveWall
    }
  ]
})
