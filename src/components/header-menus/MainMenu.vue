<template>
  <div
    class="flex space-x-4 lg:space-x-2 bg-blue-100 p-2 shadow-md rounded-sm main-menu items-center"
  >
    <template v-for="(val, i) in listMenu" :key="i">
      <router-link
        class="text-gray-800  dark:text-gray-500 hover:bg-gray-700 dark:hover:text-white lg:px-1 xl:px-2 hover:text-white px-3 py-2 rounded-md  text-base font-medium transition "
        :to="val.link"
        >{{ val.title }}</router-link
      >
    </template>

    <!-- Login -->
    <login-user :isLoggedIn="isLoggedIn" />
    <!-- Logout-->
    <logout-user :isLoggedIn="isLoggedIn" />
  </div>
</template>

<script>
import LoginUser from './LoginUser.vue';
import LogoutUser from "./LogoutUser.vue";
export default {
  components: {LogoutUser, LoginUser},
  name: "main-menu",
  data() {
    return {
      listMenu: [
        { title: "ホーム", link: "/" },
        { title: "カレンダー", link: "/carendar" },
        { title: "天気", link: "/weather" },
        { title: "運行情報", link: "/oparations" },
        { title: "辞書・翻訳", link: "/directory" },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>

<style>
.main-menu a.active {
  --tw-bg-opacity: 1;
  background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
</style>
