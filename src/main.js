import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css";

Vue.config.productionTip = false;
Vue.use(Vuesax, {
  // options here
});
new Vue({
  vuetify,
  router,
  Vuesax,
  render: (h) => h(App),
}).$mount("#app");
