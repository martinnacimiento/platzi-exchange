<template lang="pug">
  div.flex-col
    div.flex.justify-center
      bounce-loader(:loading="isLoading" :color="`#68d391`" :size="100")
    template( v-if="!isLoading" )
      v-card( 
        raised
        class="flex flex-col lg:flex-row justify-around items-center p-6" 
      )
        .flex.flex-col.items-center
          img(
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            :alt="asset.name"
            class="w-20 h-20 mr-5"
          )
          h1.text-5xl {{ asset.name }}
            small(class="sm:mr-2 text-gray-500") {{ asset.symbol }}
        div(class="my-10 mx-10 flex flex-col")
          v-list(dense).border.border-green-200
            v-list-item(class="flex justify-between")
              b(class="text-gray-600 mr-10 uppercase") Ranking
              span # {{ asset.rank }}
            v-list-item(class="flex justify-between")
              b(class="text-gray-600 mr-10 uppercase") Precio actual
              span {{ asset.priceUsd | dollar }}
            v-list-item(class="flex justify-between")
              b(class="text-gray-600 mr-10 uppercase") Precio más bajo
              span {{ min | dollar }}
            v-list-item(class="flex justify-between")
              b(class="text-gray-600 mr-10 uppercase") Precion más alto
              span {{ max | dollar }}
            v-list-item(class="flex justify-between")
              b(class="text-gray-600 mr-10 uppercase") Precion promedio
              span {{ avg | dollar }}
            v-list-item(class="flex justify-between")
              b(class="text-gray-600 mr-10 uppercase") Variación 24hs
              span {{ asset.changePercent24Hr | percent }}

        div(
          class="my-10 mx-10 sm:mt-0 flex flex-col justify-center text-center"
        )
          v-btn( 
            @click="toggleConverter"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          ) {{ fromUsd ? `USD a ${asset.symbol}` : `${asset.symbol} a USD` }}

          div(class="flex flex-row my-5")
            label(class="w-full" for="convertValue")
              v-text-field(
                v-model="convertValue"
                id="convertValue"
                :label="`Valor en ${fromUsd ? 'USD' : asset.symbol}`"
                color="green" 
              )

          span.text-xl {{ convertResult }} {{ fromUsd ? asset.symbol : "USD" }}
      v-card( raised ).my-6
        v-card-title Variación 24hs
        line-chart(
          :colors="['orange']"
          :min="min"
          :max="max"
          :data="history.map(h => [h.date, parseFloat(h.priceUsd).toFixed(2)])"
        )
      v-card( raised ).my-6
        v-card-title Mejores ofertas de cambio
        v-data-table(
          :headers="headers"
          :items="markets"
        )
          template(v-slot:item.priceUsd="{ item }") {{ item.priceUsd | dollar }}
          template(v-slot:item.symbol="{ item }") {{ item.baseSymbol }} / {{ item.quoteSymbol }}
          template(v-slot:item.actions="{ item }")
            v-btn(
              outlined
              color="green"
              @click="getWebSite(item)"
              :loading="item.isLoading || false"
              v-if="!item.url"
            ) Obtener link
            a(v-else class="hover:underline text-green-600" target="_blanck")
            | {{ item.url }}
</template>

<script>
import api from "@/api/index";
import PxButton from "@/components/PxButton";

export default {
  name: "CoinDetail",
  components: { PxButton },

  data() {
    return {
      asset: {},
      history: [],
      isLoading: false,
      markets: [],
      fromUsd: true,
      convertValue: null,
      headers: [
        { text: "ID", value: "exchangeId" },
        { text: "Precio", value: "priceUsd" },
        {
          text: "Símbolo",
          value: "symbol",
          sortable: false,
          filterable: false
        },
        { value: "actions", sortable: false, filterable: false }
      ]
    };
  },

  computed: {
    convertResult() {
      if (!this.convertValue) {
        return 0;
      }
      const result = this.fromUsd
        ? this.convertValue / this.asset.priceUsd
        : this.convertValue * this.asset.priceUsd;

      return result.toFixed(4);
    },

    min() {
      return Math.min(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      );
    },

    max() {
      return Math.max(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      );
    },

    avg() {
      return Math.abs(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      );
    }
  },

  created() {
    this.getCoin();
  },

  watch: {
    $route() {
      this.getCoin();
    }
  },

  methods: {
    toggleConverter() {
      this.fromUsd = !this.fromUsd;
    },
    getWebSite(exchange) {
      this.$set(exchange, "isLoading", true);
      return api
        .getExchange(exchange.exchangeId)
        .then(res => {
          this.$set(exchange, "url", res.exchangeUrl);
        })
        .finally(() => {
          this.$set(exchange, "isLoading", false);
        });
    },

    getCoin() {
      this.isLoading = true;
      const id = this.$route.params.id;

      Promise.all([
        api.getAsset(id),
        api.getAssetHistory(id),
        api.getMarkets(id)
      ])
        .then(([asset, history, markets]) => {
          this.asset = asset;
          this.history = history;
          this.markets = markets;
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style scoped>
td {
  padding: 10px;
  text-align: center;
}
</style>
