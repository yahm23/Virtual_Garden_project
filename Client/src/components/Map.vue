
<template >
  <div class="" lang="html">
    <p>Map connected:</p>
    <environment-detail > </environment-detail>
    <div class="">
      <l-map id="clicky" class='full-map' :zoom="zoom"
        :min-zoom="minZoom"
        :max-zoom="maxZoom"
        :position="zoomPosition">
        <l-tile-layer :url="url"></l-tile-layer>

        <l-marker @mouseup='onClick':lat-lng="marker"
        :draggable="draggable"
        :icon="icon"
        ></l-marker>

      </l-map>
    </div>
    <button type="button"  @click="onClick" name="button">Pick your location!</button>
  </div>
</template>

<script>
import EnvironmentDetail from '@/components/EnvironmentDetail.vue'
import { icon, latLngBounds } from "leaflet";
import {LMap, LTileLayer, LMarker ,LControlZoom,} from 'vue2-leaflet';
import {eventBus} from '@/main.js'

export default {
    name: 'map-fullscreen',
    components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
    'environment-detail':EnvironmentDetail
    },
    methods:{
      onClick(e){
        // eventBus.$emit("showEnvironment",false)
        // eventBus.$emit("latAndLng",this.LMarker)

        // Lmarker.$on('update:latLng',value =>this.test=value)
        // var latlng = map.mouseEventToLatLng(ev.originalEvent);
        // console.log(latlng.lat + ', ' + latlng.lng)

        eventBus.$emit("latAndLng",e.latlng);
        const lat = e.latlng['lat'];
        const lng = e.latlng['lng'];
        
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`)
        .then(results=>results.json())
        .then(weatherNearestCity => eventBus.$emit("nearestCity",weatherNearestCity[0]))
      }
    },
    data: function() {
      return {
        test:'',
        maxZoom: 10,
        minZoom: 2,
        zoom:2,
        zoomPosition: "bottomleft",
        url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        marker: L.latLng(10, 0),
        draggable: true,
        visible: true,
        icon: L.icon({
           iconSize: [90, 95],
           iconAnchor: [45, 95],
           iconUrl: "../img/map_marker.svg",
        })
        }

    }

  }

</script>

<style lang="css" scoped>

.full-map {
    height: calc(100vh - 80px);
    filter: grayscale(0.8) brightness(0.7) contrast(3) invert(0.89) hue-rotate(20deg);
}
</style>
