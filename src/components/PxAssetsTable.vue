<template lang="pug">
  v-card( raised )
    v-card-title Divisas
      v-spacer
      v-text-field(
        v-model="search"
        label="Buscar"
        color="green" 
      )
    v-data-table(
      :headers="headers"
      :items="assets"
      :search="search"
    )
      template(v-slot:item.logo="{ item }")
        img(
            class="w-6 h-6"
            :src="`https://static.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`"
            :alt="item.name"
          )
      template(v-slot:item.priceUsd="{ item }") {{ item.priceUsd | dollar }}
      template(v-slot:item.marketCapUsd="{ item }") {{ item.marketCapUsd | dollar }}
      template(v-slot:item.changePercent24Hr="{ item }") {{ item.changePercent24Hr | percent }}
      template(v-slot:item.actions="{ item }")
        v-btn( outlined @click="goToCoin(item.id)" color="green").ma-2
          v-icon(left) mdi-plus 
          | Detalle
</template>

<script>
import PxButton from "@/components/PxButton";
export default {
  name: "PxAssetsTable",

  components: { PxButton },

  data() {
    return {
      search: "",
      headers: [
        { value: "logo", filterable: false, sortable: false },
        { text: "Ranking", align: "left", value: "rank" },
        { text: "Nombre", align: "center", value: "name" },
        { text: "Precio", align: "center", value: "priceUsd" },
        { text: "Cap. de Mercado", align: "center", value: "marketCapUsd" },
        { text: "Variación 24hs", align: "center", value: "changePercent24Hr" },
        {
          align: "center",
          value: "actions",
          filterable: false,
          sortable: false
        }
      ]
    };
  },

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    goToCoin(coin) {
      this.$router.push({ name: "coin-detail", params: { id: coin } });
    }
  }
};
</script>
