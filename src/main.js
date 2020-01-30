import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/routes/index";
import { dollarFilter, percentFilter } from "@/filters/index";

import Chart from "chart.js";
import Chartkick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";

Vue.use(Chartkick.use(Chart));
Vue.use(VueSpinners);

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
