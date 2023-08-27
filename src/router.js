import { createRouter, createWebHistory } from "vue-router";
import Products from "./components/Products.vue";
import Details from "./components/Details.vue";

const routes = [
  { path: "/", component: Products },
  { path: "/details/:id", component: Details, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
