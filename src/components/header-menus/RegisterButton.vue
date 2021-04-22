<template>
  <button
    href="#"
    class="text-gray-800 hover:bg-gray-700 hover:text-white px-2 py-2 xl:px-3 lg:px-1 rounded-md text-sm font-medium focus:ring focus:outline-none focus:ring-offset-2 focus:ring-indigo-400 focus:ring-opacity-5"
    @click="openReg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 inline-block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
      />
    </svg>
    登録
  </button>
</template>

<script>
export default {
  name: "register-button",
  methods: {
    openReg() {
      this.$store.commit("setRegisterModal", true);
    },
  },
};
</script>

<style></style>
