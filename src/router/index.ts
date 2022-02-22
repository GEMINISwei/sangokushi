import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Roles from "@/views/Roles.vue";
import Skills from "@/views/Skills.vue";
import NotFound from "@/views/NotFound.vue";

const comopnents = [
  Home,
  Roles,
  Skills,
  NotFound
]

const router = createRouter({
  history: createWebHistory(),
  routes: comopnents.map(comopnent => {
    let pageUrl
    const baseUrl = '/sangokushi'

    switch (comopnent.name) {
      case 'Home':
        pageUrl = `${baseUrl}/`
        break;
      case 'NotFound':
        pageUrl = `${baseUrl}/:pathMatch(.*)*`
        break;
      default:
        pageUrl = `${baseUrl}/${comopnent.name.toLowerCase()}`
        break;
    }

    return {
      path: pageUrl,
      name: comopnent.name,
      component: comopnent
    }
  })
});

export default router;
