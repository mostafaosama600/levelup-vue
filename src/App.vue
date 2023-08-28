<template>
  <Navbar />
  <router-link to="/"></router-link>

  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Products from "./pages/Products.vue";
export default {
  components: {
    Products,
    Navbar,
  },
  name: "App",
  data() {
    return {};
  },
};
</script>