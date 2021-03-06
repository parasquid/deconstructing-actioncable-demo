import Vue from "vue";
import App from "./App.vue";
import VueNativeSock from "vue-native-websocket";
Vue.use(VueNativeSock, "ws://localhost:3000/cable", {
  format: "json",
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000 // (Number) how long to initially wait before attempting a new (1000)
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
