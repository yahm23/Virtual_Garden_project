<template lang="html">
  <div class="">
    <p>Virtual Garden connected</p>
    <environment-detail :allWeather='allWeather'> </environment-detail>
      <p>Recomended Plants:</p>
      <p></p>
      <div class="">
        <plant-search></plant-search>
        <plant-list></plant-list>
      </div>

    <canvascomp></canvascomp>
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
      recomendedPlants:'',
      allWeather:''

    }
  },
  methods:{

  },
  mounted(){
    eventBus.$on("weatherData",weather=>{this.allWeather =weather})
    // eventBus.$on('weatherData', weather =>{
    //   const minTempF =((weather[0]['min_temp']* 1.8) +32);
    //   const humidityAsCm=(weather[0]['humidity']*1.4);
    //   fetch(`https://trefle.io/api/plants/?token=Sk1pZTUyTDVMWCtRaVcyaVpBbFl1QT09&is_main_species=!null&temperature_minimum_deg_f=${minTempF}&precipitation_minimum%3E${humidityAsCm}`)
    //   .then(results=>results.json())
    //   .then(plants => {this.recomendedPlants = plants})
    //   })
  }
}
</script>

<style lang="css" scoped>
</style>
