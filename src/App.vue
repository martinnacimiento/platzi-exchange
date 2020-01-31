<template lang="pug">
  v-app
    v-app-bar(app dark).bg-green-400
      PxHeader

    v-content
      router-view(class="container px-5 sm:px-20 py-20 flex justify-center")
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",

  components: {
    PxHeader
  },

  data: () => ({
    links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } }
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } }
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "ripple" } }
        }
      ]
  })
};
</script>
