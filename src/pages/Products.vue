<template>
  <div class="container mx-auto mt-3">
    <Loading v-if="loading" />
    <div v-else-if="error" class="bg-red-200 p-2 rounded">
      {{ error }}
    </div>
    <div class="grid grid-cols-3 gap-4 mx-3 my-3">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="mb-2 p-0 border-0 rounded-3xl bg-white"
      >
        <img
          class="rounded-tl-3xl rounded-tr-3xl"
          src="https://assets-global.website-files.com/61406347b8db463e379e2732/63480a867a204a115c632395_C4D-Ascent-p-500.jpg"
          :alt="product.name"
        />
        <div class="content-body mx-3 my-3">
          <h3 class="px-1 inline-block text-black font-bold text-xl">
            {{ product.name }}
          </h3>
          <p class="text-[#7c868d]">{{ product.description }}</p>
          <div class="flex justify-between items-center my-5">
            <p class="m-1">price {{ product.price }}</p>
            <p class="m-1">quantity {{ product.quantity }}</p>
          </div>
          <router-link
            class="rounded font-semibold border px-4 py-2 text-black"
            :to="`/details/${product._id}`"
            >Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Loading from "../components/Loading.vue";

export default {
  setup() {
    const products = ref([]);
    const loading = ref(false);
    const error = ref("");
    const getData = async () => {
      try {
        loading.value = true;
        const response = await fetch("http://localhost:3000/api/v1/products");
        if (!response.ok) error.value = "something went wrong";
        const data = await response.json();
        products.value = data.result;
      } catch (err) {
        error.value = err.message || "Something went wrong";
      } finally {
        loading.value = false;
      }
    };
    onMounted(getData);
    return {
      loading,
      products,
      error,
    };
  },
  components: { Loading },
};
</script>