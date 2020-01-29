<template>
  <px-assets-table :assets="assets" />
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/api/index";

export default {
  name: "Home",
  components: { PxAssetsTable },

  data() {
    return {
      assets: []
    };
  },

  created() {
    api.getAssets().then(assets => (this.assets = assets));
  }
};
</script>
