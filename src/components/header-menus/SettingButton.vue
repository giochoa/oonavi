<template>
  <a class="relative  group">
    <avatar-button />
    <!-- setting button -->
    <router-link
      class="hidden px-4  py-2 dark:text-gray-500 group-hover:flex items-center origin-top-right absolute right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-gray-100 "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
      to="/profile"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="text-sm text-gray-600 px-1 setting-text">設定</span>
    </router-link>
  </a>
</template>

<script>
import AvatarButton from "./AvatarButton.vue";
export default {
  components: { AvatarButton },
  name: "setting-button",
};
</script>

<style>
.active .setting-text {
  --tw-text-opacity: 1;
  color: rgba(209, 213, 219, var(--tw-text-opacity));
}
</style>
