<template>
  <div class="container mx-auto mt-3 bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <div v-if="errors === true" className="bg-red-200 p-2">
            {{ errors }}
          </div>
          <div v-for="(err, index) in errorList" :key="index">
            <div v-if="index === 1" class="bg-red-200 rounded-md p-2">
              password must start with a capital letter and have at least 8
              characters
            </div>
            <div v-else class="bg-red-200 rounded-md p-2">
              {{ err.message }}
            </div>
          </div>
          <form class="space-y-4 md:space-y-6" @submit.prevent="userLogin">
            <div>
              <label for="" class="block mb-2 text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id=""
                v-model="user.email"
                class="bg-gray-50 border rounded-lg w-full p-2.5"
                placeholder="name@company.com"
                required="true"
              />
            </div>
            <div>
              <label for="" class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id=""
                v-model="user.password"
                placeholder="*********"
                class="bg-gray-50 border rounded-lg w-full p-2.5"
                required="true"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                @click="userLogin"
                :disabled="loading"
                class="rounded-md p-2 px-4 bg-blue-600 text-sm font-medium text-white"
              >
                <span>{{ loading ? "loading..." : "login" }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Joi from "joi";
export default {
  setup() {
    const user = ref({
      email: "",
      password: "",
    });

    const loading = ref(false);
    const errors = ref("");
    const errorList = ref([]);
    const router = useRouter();

    async function userLogin() {
      const { error } = validationRegisterForm();

      if (error) {
        loading.value = false;
        errorList.value = error.details;
        return;
      } else {
        try {
          loading.value = true;
          const url =
            import.meta.env.VUE_APP_API_URL || process.env.VUE_APP_API_URL;
          const response = await fetch(
            "http://localhost:3000/api/v1/users/signin",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user.value),
            }
          );
          if (response.ok) {
            loading.value = false;
            router.push({ name: "profile" }).catch((err) => console.log(err));
          } else {
            const dataError = await response.json();
            errors.value = dataError.msg;
          }
        } catch (err) {
          errors.value = err.message || "Something went wrong";
        } finally {
          loading.value = false;
        }
      }
    }
    function validationRegisterForm() {
      let scheme = Joi.object({
        email: Joi.string()
          .email({ tlds: { allow: ["com", "net", "org", "eg"] } })
          .required(),
        password: Joi.string()
          .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
          .required(),
      });

      return scheme.validate(user.value, { abortEarly: false });
    }

    return {
      user,
      errors,
      errorList,
      loading,
      userLogin,
    };
  },
};
</script>
