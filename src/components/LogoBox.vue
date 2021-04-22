<template>
  <div
    class="flex m-10 flex-grap  p-10  items-center flex-row  shadow-md rounded space-x-5 bg-white"
  >
    <ul>
      <draggable
        v-model="list"
        item-key="id"
        group="drag"
        class="grid grid-cols-6 gap-6 grid-flow-row 2xl:gap-8 2xl:grid-cols-8 "
      >
        <template #item="{element}">
          <li class=" flex items-center justify-center">
            <a :href="element.link" :title="element.title">
              <img
                :src="element.name"
                :alt="element.title"
                class="w-auto h-auto"
              />
            </a>
          </li>
        </template>
        <template #footer>
          <!-- border-none outline-none -->
          <!--    @input="doSearch" -->
          <!--  v-model="q" -->
          <input
            class="border-none outline-none  focus cursor-wait"
            :class="{ 'opacity-0': opacity }"
            :disabled="isDisabled"
            @input="doSearch"
            @keypress="keyDown"
            v-for="number in 6"
            :value="q"
            :key="number"
            :name="number"
            type="text"
            :id="number"
          />
        </template>
      </draggable>
    </ul>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import axios from "axios";
export default {
  name: "logo-box",
  components: {
    draggable,
  },
  data() {
    return {
      isDisabled: false,
      opacity: false,
      q: "",
      list: [
        { name: "images/4_header_ocn.gif", link: "#", title: "" },
        { name: "images/aapb.png", link: "#", title: "" },
        { name: "images/lec-jp.gif", link: "#", title: "" },
        { name: "images/itojuku.png", link: "#", title: "" },
        { name: "images/logo_latam_color.png", link: "#", title: "" },
        { name: "images/expedia.PNG", link: "#", title: "" },
        { name: "images/ferry_hl.png", link: "#", title: "" },
        { name: "images/miyakoap.gif", link: "#", title: "" },
        { name: "images/ishigaki-airport.png", link: "#", title: "" },
        { name: "images/foresight.png", link: "#", title: "" },
        { name: "images/houterasu.gif", link: "#", title: "" },
        { name: "images/chousei_logo.png", link: "#", title: "" },
        { name: "images/box_r_34_2x.png", link: "#", title: "" },
        { name: "images/banner_airtrip.png", link: "#", title: "" },
        { name: "images/amazon.jpg", link: "#", title: "" },
      ],
    };
  },
  methods: {
    doSearch(e) {
      var array = this;
      var q = e.target.value;
      axios
        .get(
          "https://www.googleapis.com/customsearch/v1?key=AIzaSyDWUUCt-Y-Dp4m0AUaUXqrFrFVxe9hLLTU&cx=07ba691660892f501\n&q=" +
            q
        )
        .then(function(response) {
          q = "";
          const data = response.data.items[0];
          if (data) {
            array.list.push({
              name: data.pagemap.metatags[0]
                ? data.pagemap.metatags[0]["msapplication-tileimage"] ||
                  data.pagemap.metatags[0]["og:image"] ||
                  data.pagemap.cse_image[0].src ||
                  data.pagemap.cse_thumbnail[0].src
                : "images/noimage-1-580x440.png",
              link: data.link,
              title: data.title,
            });
          }
        })
        .catch(function(error) {
          q = "";
          console.log("error:", error);
        });
    },
    keyDown() {
      this.opacity = true;
      this.isDisabled = true;
    },
  },
};
</script>

<style></style>
