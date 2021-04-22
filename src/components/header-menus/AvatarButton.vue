<template>
      <button
      v-if="isDark"
      @click="changeLight"
      type="button"
      class="flex text-sm border p-1  rounded-full bg-gray-800  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mt-1 transition duration-100"
      id="user-menu"
      aria-expanded="false"
      aria-haspopup="true"
    >
      <img
        class="h-5 w-5  rounded-full hover-trigger group"
        :src="renderImage"
        alt=""
      />
      <span class="px-2  font-thin text-gray-200">Rim</span>
    </button>
    <button
      v-else
      @click="changeDark"
      type="button"
      class="flex text-sm border p-1  rounded-full bg-gray-50  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mt-1 transition duration-100"
      id="user-menu"
      aria-expanded="false"
      aria-haspopup="true"
    >
      <span class="px-2 font-thin text-gray-800">Rim</span>
      <img
        class="h-5 w-5  rounded-full hover-trigger group"
       :src="renderImage"
        alt=""
      />
    </button>
</template>

<script>
import useDebounce from "@/utilities/composition/useDebounce";
export default {
  data() {
    return {
      debounce: "",
    };
  },
  computed: {
    isDark() {
      return this.$store.state.isDark;
    },
    renderImage() {
      if (this.$store.state.imgUser) return this.$store.state.imgUser;
      return "https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png";
    },
  },
  mounted() {
    const { debounce } = useDebounce();
    this.debounce = debounce;
  },
  methods: {
    changeDark() {
      const task = () => this.$store.commit("setDarkModal", true);
      this.debounce(task, 300);
    },
    changeLight() {
      const task = () => this.$store.commit("setDarkModal", false);
      this.debounce(task, 300);
    },
  },
}
</script>

<style>
.active .setting-text {
  --tw-text-opacity: 1;
  color: rgba(209, 213, 219, var(--tw-text-opacity));
}
</style>