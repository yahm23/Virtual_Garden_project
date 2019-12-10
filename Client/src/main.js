// import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'

import Vue from 'vue'
import App from './App.vue'

import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
