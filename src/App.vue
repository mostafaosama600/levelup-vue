<template>
  <Navbar />
  <router-link to="/"></router-link>
  <router-link to="/user-profile"></router-link>
  <router-link to="/sign-up"></router-link>
  <router-link to="/sign-in"></router-link>

  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Products from "./pages/Products.vue";
import UserProfile from "./pages/UserProfile.vue";
import Signup from "./pages/Signup.vue";
import Signin from "./pages/Signin.vue";

export default {
  components: {
    Navbar,
    Products,
    UserProfile,
    Signup,
    Signin,
  },
  name: "App",
  data() {
    return {};
  },
};
</script>