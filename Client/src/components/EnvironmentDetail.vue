<template lang="html">
  <div class="">
    <div v-if='latLng'>
      <p>Average temperature{{latLng}}</p>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import {LMap, LTileLayer, LMarker ,LControlZoom,} from 'vue2-leaflet';

export default {
  name:'environment-detail',
  data(){
    return{
      'latLng':{}
    }
  },
  mounted(){
    // eventBus.$on('latAndlang', values =>this.latLng=values)
    // this.latLng=LMarker.latLng
  },
  method:{
    fetchWeather: function() {
      const latlang2 = eventBus.$on('latAndlang', values =>this.latLng=values)
      // fetch(``)
      //   .then(bookings => this.bookings = bookings);
    }
  }

}
</script>

<!-- "name": "LMarker",
 "mixins": [ { "props": { "pane": { "default": "overlayPane" }, "attribution": { "default": null }, "name": { "custom": true }, "layerType": { "custom": true }, "visible": { "custom": true, "default": true } }, "methods": {} }, { "props": { "options": {} } } ],

  "props": { "pane": { "default": "markerPane" },

  "draggable": { "custom": true, "default": false },

  "latLng": { "type": [ null, null ], "custom": true, "default": null }, "icon": { "type": [ null ], "custom": false }, "zIndexOffset": { "custom": false, "default": null } }, "methods": {}, "_Ctor": {} -->

<style lang="css" scoped>
</style>
