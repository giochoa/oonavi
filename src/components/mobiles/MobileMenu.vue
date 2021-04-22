<template>
  <div class="lg:hidden" v-if="isMobOpen">
    <div class="px-2 pt-2 pb-3 space-y-1 mobile-menu">
      <template v-for="(val, i) in listMenu" :key="i">
        <router-link
          :to="val.link"
          class="flex justify-items-center mb-2 items-center bg-gray-100 h-14 w-full rounded-md shadow-md  hover:bg-gray-500 hover:text-gray-50 cursor-pointer transition "
          aria-current="page"
        >
          <span
            class="capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500 px-4"
          >
            {{ val.name }}
          </span>
        </router-link>
      </template>
      <user-not-login/>
      <user-logged />
    </div>
  </div>
</template>

<script>

import UserLogged from "./UserLogged.vue";
import UserNotLogin from './UserNotLogin.vue';
export default {
  name: "mobile-menu",
  components: {
    UserLogged,
    UserNotLogin,
  },
  data() {
    return {
      listMenu: [
        { name: "ホーム", link: "/" },
        { name: "カレンダー", link: "/carendar" },
        { name: "天気", link: "/weather" },
        { name: "運行情報", link: "/operation" },
        { name: "辞書・翻訳", link: "/Dictionary" },
      ],
    };
  },
  computed: {
    isMobOpen() {
      return this.$store.state.isMobOpen;
    },
  },
};
</script>

<style>
.mobile-menu a.active {
  --tw-bg-opacity: 1;
  background-color: rgba(75, 85, 99, var(--tw-bg-opacity));
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
</style>
