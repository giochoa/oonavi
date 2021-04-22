<template>
  <!-- Logo Box -->
  <logo-box />
  <draggable group="drag" v-model="list" class="dropzone" item-key="id">
    <template #item="{element}">
      <span class="trashzone" v-html="element.name"></span>
    </template>
    <template #footer>
      <div class="lg:overflow-x-auto ">
        <div
          class="flex items-center justify-center bg-gray-100 dark:bg-gray-800  font-sans overflow-hidden"
        >
          <div class="w-full  xl:w-5/6">
            <div class="bg-white shadow-md rounded my-6">
              <!-- Items  in Table-->
              <items-in-table />
              <!-- Items  in Tabl-->
              <pagination-items />
            </div>
          </div>
        </div>
      </div>
    </template>
  </draggable>
</template>
<script>
import LogoBox from "../components/LogoBox";
import ItemsInTable from "../components/ItemsInTable";
import PaginationItems from "../components/PaginationItems";
import draggable from "vuedraggable";
export default {
  name: "HomePage",
  components: {
    LogoBox,
    ItemsInTable,
    PaginationItems,
    draggable,
  },
   data() {
    return {
      list: [{ name: "" }],
    };
  } 
};
</script>
<style scoped>
.dropzone .trashzone {
  display: none;
}
</style>
