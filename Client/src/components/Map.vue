
<template >
  <div class="" lang="html">
    <p>Map connected</p>
    <environment-detail> </environment-detail>
    <virtual-garden> </virtual-garden>
    <l-map :zoom="zoom"
           :min-zoom="minZoom"
           :max-zoom="maxZoom"
           :position="zoomPosition">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="marker"
                  :draggable="draggable"
                  :icon="icon"
                  ></l-marker>
    </l-map>

  </div>
</template>

<script>
import VirtualGarden from '@/pages/VirtualGarden.vue'
import EnvironmentDetail from '@/components/EnvironmentDetail.vue'
import { icon, latLngBounds } from "leaflet";
import {LMap, LTileLayer, LMarker ,LControlZoom,} from 'vue2-leaflet';

export default {
    name: 'map-fullscreen',
    components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
    'virtual-garden':VirtualGarden,
    'environment-detail':EnvironmentDetail
},
    data: function() {
      return {
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
