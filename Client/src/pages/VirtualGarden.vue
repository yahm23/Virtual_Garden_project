<template lang="html">
  <div class="">
    <p>Virtual Garden connected</p>
      <p>Recomended Plants:</p>

      <div class="">
        <plant-search></plant-search>
        <plant-list></plant-list>
      </div>

    <canvascomp></canvascomp>
    <environment-detail> </environment-detail>
  </div>
</template>

<script>
import PlantList from'@/components/PlantList.vue'
import PlantSearch from'@/components/PlantList.vue'
import CanvasComponent from'@/components/Canvas.vue'
import EnvironmentDetail from '@/components/EnvironmentDetail.vue'
import {eventBus} from '@/main.js'

export default {
  name:'virtual-garden',
  components:{
    'plant-list':PlantList,
    'plant-search':PlantSearch,
    'canvascomp':CanvasComponent,
    'environment-detail':EnvironmentDetail
  },
  data(){
    return{
      weather:''

    }
  },
  mounted(){
    eventBus.$on('weatherData', weather =>{ this.allWeather=weather})
  }
}
</script>

<style lang="css" scoped>
</style>
