import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Roles from "@/views/Roles.vue";
import Skills from "@/views/Skills.vue";

const comopnents = [
  Home,
  Roles,
  Skills
]

const router = createRouter({
  history: createWebHistory(),
  routes: comopnents.map(comopnent => {
    const baseUrl = '/sangokushi'
    const pageUrl = baseUrl + (comopnent.name == 'Home' ? '/' : `/${comopnent.name.toLowerCase()}`)

    return {
      path: pageUrl,
      name: comopnent.name,
      component: comopnent
    }
  })
});

export default router;
