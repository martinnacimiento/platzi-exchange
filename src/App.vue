<template>
  <main
    class="App min-w-screen min-h-screen flex flex-col bg-grey-lightest font-sans"
  >
    <px-header :links="links" />
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
    <px-footer />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxFooter from "@/components/PxFooter";

export default {
  name: "app",
  components: { PxHeader, PxFooter },

  data() {
    return {
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
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
