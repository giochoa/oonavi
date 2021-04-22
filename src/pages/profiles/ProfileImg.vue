<template>
  <div class="w-64 h-64 relative mb-4">
    <div
      class=" w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer -mt-4"
    >
      <img
        :src="renderImage"
        alt="user avatar"
        class="object-cover object-center w-full h-full visible  transform hover:scale-125"
      />
    </div>
  </div>
  <div class="flex w-full items-center justify-center bg-grey-lighter">
    <label
      class="w-64 flex flex-col items-center px-4 py-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white"
    >
      <svg
        class="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
        />
      </svg>
      <span class="mt-2 text-base leading-normal" @click="uploadImage"
        >Select a file</span
      >
      <input
        type="file"
        class="hidden"
        ref="imageUpload"
        name="images"
        @change="handleUploadImage"
      />
    </label>
  </div>
  <save-button />
</template>

<script>
import SaveButton from "../../components/SaveButton.vue";
import { checkImageFile } from "../../utilities/composition/checkImageFile";
export default {
  components: { SaveButton },
  data() {
    return {
      url_image: "",
      obj_image: {
        objFile: null,
        base64URL: "",
      },
    };
  },
  computed: {
    renderImage() {
      if (this.$store.state.imgUser) return this.$store.state.imgUser;
      return "https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png";
    },

  },
  methods: {
    uploadImage() {
      this.$refs.imageUpload.click();
    },
    handleUploadImage(e) {
      if (e.target.files && e.target.files.length) {
        const imageUpload = e.target.files[0];

        let check = checkImageFile(imageUpload);
        if (!check) {
          alert("file error ! ");
          return;
        }

        let reader = new FileReader();

        reader.addEventListener(
          "load",
          () => {
            let result = reader.result;
            this.$store.commit("setUrlImgUser", result);
            // this.obj_image.base64URL = result;
            this.obj_image.objectFie = imageUpload;
          },
          false
        );

        if (imageUpload) {
          reader.readAsDataURL(imageUpload);
        }
      }
    },
  },
};
</script>

<style></style>
