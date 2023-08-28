<template>
  <div class="container mx-auto mt-3">
    <div class="flex justify-between items-center gap-5 mx-3 my-3">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div class="grid grid-cols-3 gap-4 mx-3 my-3">
        <div
          v-for="(product, index) in filteredProducts"
          :key="index"
          class="mb-2 p-0 border-0 rounded-3xl bg-white"
        >
          <div class="content-body mx-3 my-3">
            <h3 class="px-1 inline-block text-black font-bold text-xl">
              {{ product.name }}
            </h3>
            <p class="text-[#7c868d]">{{ product.description }}</p>
            <div class="flex justify-between items-center my-5">
              <p>price {{ product.price }}</p>
              <p>quantity {{ product.quantity }}</p>
            </div>
            <router-link
              class="rounded font-semibold text-black"
              :to="`/details/${product._id}`"
              >Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";

export default {
  setup() {
    const products = ref([]);
    const route = useRoute();
    const loading = ref(false);
    const error = ref("");
    const searchQuery = route.query.q;

    const getQuerySearched = async () => {
      loading.value = true;
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/products/?query=${searchQuery}`
        );
        if (!response.ok) {
          error.value = "Something went wrong";
        }
        const data = await response.json();
        products.value = data.result;
      } catch (err) {
        error.value = "Something went wrong";
      } finally {
        loading.value = false;
      }
    };

    onMounted(getQuerySearched);

    const filteredProducts = computed(() => {
      return products.value.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    return {
      loading,
      products,
      error,
      filteredProducts,
    };
  },
};
</script>