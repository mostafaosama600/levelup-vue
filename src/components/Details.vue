<template>
  <div class="container mx-auto mt-3">
    <div class="flex justify-between items-center gap-5 mx-3 my-3">
      <div class="items mb-2 rounded border p-2">
        <div class="content-body mx-3 my-3">
          <h3 class="px-1 inline-block text-black font-bold text-xl">
            {{ product.name }}
          </h3>
          <p class="text-[#7c868d]">{{ product.description }}</p>
          <div class="flex justify-between items-center my-5">
            <p class="m-1">price {{ product.price }}</p>
            <p class="m-1">quantity {{ product.quantity }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const product = reactive({});
    const route = useRoute();
    const loading = ref(false);
    const error = ref("");

    const getProduct = async () => {
      try {
        loading.value = true;
        const response = await fetch(
          `http://localhost:3000/api/v1/products/${route.params.id}`
        );

        if (!response.ok) error.value = "something went wrong";
        const data = await response.json();
        product._id = data.result._id;
        product.name = data.result.name;
        product.description = data.result.description;
        product.quantity = data.result.quantity;
        product.price = data.result.price;
      } catch (err) {
        error.value = "something went wrong";
      }
    };
    onMounted(getProduct);
    return {
      loading,
      product,
      error,
    };
  },
};
</script>