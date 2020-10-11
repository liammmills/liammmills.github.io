import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueMeta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true
});

new Vue({
  render: h => h(App)
}).$mount("#b-wrapper");
