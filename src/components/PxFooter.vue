<template>
  <div
    class="footer-wrapper bg-grey-lighter mt-auto p flex flex-col lg:flex-row "
  >
    <div class="footer border-t border-grey-light py-4 sticky inline-flex">
      <span class="px-2 py-2 mx-2"> &copy; Hecho por Nacimiento Martin </span>
      <button
        class="mx-1 hover:bg-gray-200 rounded-full"
        @click="href('https://www.linkedin.com/in/martinnacimiento/')"
        target="_blank"
      >
        <img
          class="w-5 h-5"
          src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-2.png"
        />
      </button>
      <button
        class="mx-1 hover:bg-gray-200 rounded-full"
        @click="href('https://github.com/martinnacimiento')"
        target="_blank"
      >
        <img
          class="w-5 h-5"
          src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
        />
      </button>
      <button
        class="mx-1 hover:bg-gray-200 rounded-full"
        @click="href('https://www.instagram.com/martinnacimiento/')"
        target="_blank"
      >
        <img
          class="w-5 h-5"
          src="https://img.icons8.com/material-outlined/26/000000/instagram-new.png"
        />
      </button>
      <button
        class="mx-1 hover:bg-gray-200 rounded-full"
        @click="href('https://twitter.com/martinacimiento')"
        target="_blank"
      >
        <img
          class="w-5 h-5"
          src="https://img.icons8.com/android/24/000000/twitter.png"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    href(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
