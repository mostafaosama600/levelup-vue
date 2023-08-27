<template>
  <router-link to="/"></router-link>

  <router-view />
</template>

<script>
import Products from "./components/Products.vue";
export default {
  components: {
    Products,
  },
  name: "App",
  data() {
    return {};
  },
};
</script>