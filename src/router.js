import { createRouter, createWebHistory } from "vue-router";
import Products from "./pages/Products.vue";
import UserProfile from "./pages/UserProfile.vue";
import Signup from "./pages/Signup.vue";
import Signin from "./pages/Signin.vue";
import Details from "./components/Details.vue";
import SearchResult from "./components/SearchResult.vue";

const routes = [
  { path: "/", component: Products },
  { path: "/details/:id", component: Details, props: true },
  { path: "/search-result", component: SearchResult, name: "SearchResult" },
  { path: "/user-profile", component: UserProfile },
  { path: "/sign-up", component: Signup },
  { path: "/sign-in", component: Signin, name: "sign-in" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
