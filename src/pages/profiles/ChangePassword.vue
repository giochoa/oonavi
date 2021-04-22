<template>
  <div class="relative flex shadow-md border-b-2 border-gray-400">
    <label
      class="w-56 font-medium text-sm inline-flex items-center px-6 py-4 border-gray-300 bg-gray-100 text-gray-500"
      for="username"
    >
      ユーザー名
    </label>
    <input
      type="text"
      name="username"
      id="username"
      class="outline-none flex-1 block sm:text-sm border-gray-300 px-4 lg:w-96 "
      placeholder="example_yamata"
    />
  </div>
    <div class="relative flex shadow-md border-b-2 border-gray-400">
    <div class="flex items-center">
      <label
        class="w-56 font-medium text-sm inline-flex items-center px-6  py-4 border-gray-300 bg-gray-100 text-gray-500"
        for="password"
      >
        現在のパスワード
      </label>
    </div>
    <input
      type="password"
      name="email"
      id="password"
      class="outline-none flex-1 block sm:text-sm border-gray-300 px-4 lg:w-96"
      placeholder="*****************"
    />
  </div>
  <div class="relative flex shadow-md border-b-2 border-gray-400">
    <div class="flex items-center">
      <label
        class="w-56 font-medium text-sm inline-flex items-center px-6  py-4 border-gray-300 bg-gray-100 text-gray-500"
        for="password"
      >
        新しいパスワード
        <span aria-label="eyes" class="px-2">
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
      </label>
    </div>
    <input
      :type="show ? 'password' : 'text'"
      name="email"
      id="password"
      class="outline-none flex-1 block sm:text-sm border-gray-300 px-4 lg:w-96"
      placeholder="*****************"
    />
  </div>

  <div class="relative flex shadow-md border-b-2 border-gray-400">
    <label
      class=" w-56 font-medium text-sm inline-flex items-center px-6 py-4 border-gray-300 bg-gray-100 text-gray-500"
      for="password-confilm"
    >
      新しいパスワード（確認）
    </label>

    <input
      :type="show ? 'password' : 'text'"
      name="password-confilm"
      id="password-confilm"
      class="outline-none flex-1 block sm:text-sm border-gray-300 px-4 lg:w-96"
      placeholder="*****************"
    />
  </div>

  <save-button />
</template>

<script>
import SaveButton from "../../components/SaveButton.vue";
export default {
  components: { SaveButton },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style></style>
