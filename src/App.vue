<template>
  <div :class="{ dark: isDark }">
    <div class="max-w-full  max-h-full dark:bg-black-alt transition">
      <router-view name="header" class="-mt-1"></router-view>
      <router-view  />
      <router-view name="footer"></router-view>
    </div>  
  </div>
  <teleport to="body">
    <login-form />
    <register-form />
  </teleport>
</template>

<script>
import LoginForm from "./components/header-menus/LoginForm.vue";
import RegisterForm from "./components/header-menus/RegisterForm.vue";
export default {
  name: "App",
  data() {
    return {
      color: "red",
    };
  },
  components: {
    LoginForm,
    RegisterForm,
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    
  },

};
</script>

<style></style>
