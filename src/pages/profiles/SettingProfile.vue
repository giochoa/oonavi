<template>
  <div class="relative flex shadow-md border-b-2 border-gray-400">
    <label
      class=" w-40 lg:w-56 font-medium text-sm inline-flex items-center px-6 py-4 border-gray-300 bg-gray-100 text-gray-500"
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
    <label
      class="w-40 lg:w-56 font-medium text-sm inline-flex items-center px-6 py-4 border-gray-300 bg-gray-100 text-gray-500"
      for="email"
    >
      メールアドレス
    </label>
    <input
      type="text"
      name="email"
      id="email"
      class="outline-none flex-1 block sm:text-sm border-gray-300 px-4 lg:w-96"
      placeholder="example@gmail.com"
    />
  </div>
  <div class="relative flex shadow-md border-b-2 border-gray-400">
    <label
      class="w-40 lg:w-56 font-medium text-sm inline-flex items-center px-6 py-4 border-gray-300 bg-gray-100 text-gray-500"
      for="name"
    >
      氏名
    </label>
    <input
      type="text"
      name="name"
      id="name"
      class="outline-none flex-1 block sm:text-sm border-gray-300 px-4 lg:w-96"
      placeholder="未登録"
    />
  </div>
  <div class="flex shadow-md border-b-2 border-gray-400">
    <label
      class="w-40 lg:w-56 font-medium text-sm inline-flex items-center px-6 py-4 border-gray-300 bg-gray-100 text-gray-500"
      for="birthday"
    >
      誕生日
    </label>
    <input
      type="date"
      name="birthday"
      id="birthday"
      class="outline-none flex-1 block sm:text-sm border-gray-300 px-4 lg:w-96  cursor-pointer"
      placeholder="未登録"
    />
  </div>
  <div class="flex shadow-md border-b-2 border-gray-400">
    <label
      class="w-40 lg:w-56 font-medium text-sm inline-flex items-center px-6 py-4 border-gray-300 bg-gray-100 text-gray-500"
      for="sex"
    >
      性別
    </label>
    <select
      class="outline-none sm:text-sm  px-4 lg:w-96 w-52 cursor-pointer"
      id="sex"
      name="sex"
    >
      <option class="text-gray-500" value="0" selected>未登録</option>
      <option value="1">男性</option>
      <option value="2">女性</option>
    </select>
  </div>
  <save-button />
</template>

<script>
import SaveButton from "../../components/SaveButton.vue";
export default {
  components: { SaveButton },
};
</script>

<style></style>
