<template lang="pug">
  v-app
    v-app-bar(app dark).bg-green-400
      PxHeader

    v-content
      v-fade-transition
        router-view(class="container px-5 sm:px-20 py-20 flex justify-center")
    PxFooter
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxFooter from "@/components/PxFooter";

export default {
  name: "App",

  components: {
    PxHeader, PxFooter
  },

  data: () => ({
    //
  })
};
</script>
