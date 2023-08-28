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
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="" class="block mb-2 text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                type="email"
                name=""
                id=""
                class="bg-gray-50 border rounded-lg w-full p-2.5"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label for="" class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                type="password"
                name=""
                id=""
                placeholder="*********"
                class="bg-gray-50 border rounded-lg w-full p-2.5"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <router-link
                :to="`/`"
                class="rounded-md p-2 px-4 bg-blue-600 text-sm font-medium text-white"
                >login</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>