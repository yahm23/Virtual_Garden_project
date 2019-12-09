import 'leaflet/dist/leaflet.css'

import Vue from 'vue'
import App from './App.vue'
import VueP5 from 'vue-p5';

Vue.config.productionTip = false
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
