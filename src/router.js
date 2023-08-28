import { createRouter, createWebHistory } from "vue-router";
import Products from "./pages/Products.vue";
import Details from "./pages/Details.vue";
import SearchResult from "./pages/SearchResult.vue";

const routes = [
  { path: "/", component: Products },
  { path: "/details/:id", component: Details, props: true },
  { path: "/search-result", component: SearchResult, name: "SearchResult" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
