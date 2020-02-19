<template lang="pug">
  div.flex.flex-row
    v-slide-x-transition
      div(v-show="isButtonBack" class="mr-2 -ml-4")
        v-btn( @click="back()" icon ) 
          v-icon mdi-arrow-left
    div.flex.items-center.flex-shrink-0.text-white.mr-6
      px-icon.mr-2
      router-link(
        :to="{ name: 'home' }"
        class="font-semibold text-xl tracking-tight text-white"
      ) Crypto Exchange
    div(class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto")
      div(class="text-sm lg:flex-grow")
        router-link(
          v-for="l in links"
          :key="l.title"
          :to="l.to"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        ) {{ l.title }}
    div.flex-row
      v-btn( 
        :to="{name:'about'}"
        text
      ).flex.justify-end Acerca
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  name: "PxHeader",

  components: { PxIcon },

  props: {
    links: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      isButtonBack: false
    };
  },

  watch: {
    $route() {
      if (this.$route.path === "/") {
        this.isButtonBack = false;
      } else {
        this.isButtonBack = true;
      }
    }
  },

  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
