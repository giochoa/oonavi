<template>
  <div v-if="isLoginOpen">
    <section
      @click="close"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex  h-full">
        <div
          class="z-30 m-auto bg-white p-2 rounded-md shadow-md lg:w-1/3 xl:w-1/3 w-5/6"
        >
          <form class="p-2 my-2" @submit.prevent="submit">
            <div
              class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
            >
              <h1 class="text-xl text-center font-mono">ログイン</h1>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  ユーザー名
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 lg:text-xs"
                  id="username"
                  name="username"
                  type="username"
                  autocomplete="username"
                  required
                  placeholder="ユーザー名を入力してください。"
                />
              </div>
              <div class="mb-5 ">
                <div class="flex mb-2 ">
                  <label
                    class="block text-gray-700  text-sm font-bold mr-1"
                    for="password"
                  >
                    パスワード
                  </label>
                  <span aria-label="eyes" class="inline-block mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      @click="show = !show"
                      :class="{ hidden: !show, block: show }"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      @click="show = !show"
                      :class="{ block: !show, hidden: show }"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 lg:text-xs mb-3"
                  id="password"
                  name="password"
                  :type="show ? 'password' : 'text'"
                  autocomplete="password"
                  required
                  placeholder="******************"
                />
                <p class="text-red-400 text-xs italic">
                  パスワードを入力してください。
                </p>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-400 hover:bg-indigo-500 text-white font-bold p-2 px-4 rounded shadow-lg focus:outline-none focus:ring focus:ring-offset-1 focus:ring-indigo-500 focus:ring-opacity-50 lg:text-xs"
                  type="submit"
                >
                  ログイン
                </button>
                <a
                  class="inline-block align-baseline font-bold text-sm lg:text-xs text-gray-500 hover:text-blue-300"
                  href="#"
                >
                  パスワードをお忘れですか？
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      show: true,
    };
  },
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    },
  },
  methods: {
    close() {
      this.$store.commit("setLoginModal", false);
    },
  },
};
</script>

<style></style>
