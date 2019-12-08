<template lang="html">
  <div class="full-map">
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


export default {
  name:'map-environment',
  components:{
    'virtual-garden':VirtualGarden,
    'environment-detail':EnvironmentDetail
  }
}
</script>

<style lang="css" scoped>
</style>
