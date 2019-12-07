<template lang="html">
  <div class="">
    <p>Virtual Garden connected</p>
    <plant-search></plant-search>
    <plant-list></plant-list>
    <canvascomp></canvascomp>
    <environment-detail> </environment-detail>
  </div>
</template>

<script>
import PlantList from'@/components/PlantList.vue'
import PlantSearch from'@/components/PlantList.vue'
import CanvasComponent from'@/components/Canvas.vue'
import EnvironmentDetail from '@/components/EnvironmentDetail.vue'

export default {
  name:'virtual-garden',
  components:{
    'plant-list':PlantList,
    'plant-search':PlantSearch,
    'canvascomp':CanvasComponent,
    'environment-detail':EnvironmentDetail
  }
}
</script>

<style lang="css" scoped>
</style>
