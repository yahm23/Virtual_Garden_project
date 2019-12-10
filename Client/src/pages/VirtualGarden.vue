<template lang="html">
  <div class="">
    <p>Virtual Garden connected</p>
    <environment-detail :allWeather='allWeather'> </environment-detail>
      <p>Recomended Plants: {{recomendedPlants}}</p>
      <p></p>
      <plant-list></plant-list>

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
  props:['gardenWOEID'],
  data(){
    return{
      recomendedPlants:'',
      allWeather:'',
      minTempF:'',
      humidityAsCm:'',
      allReccomendedData:[]



    }
  },
  methods:{

  },
  mounted(){



    fetch(`http://localhost:3000/woeid/${this.gardenWOEID}`)
      .then(results=>results.json())
      .then(weather =>{
        this.allWeather= weather['consolidated_weather'];
        this.minTempF =((this.allWeather[0]['the_temp']* 1.8) +32);
        this.humidityAsCm=(this.allWeather[0]['humidity']*0.03);

        fetch(`http://localhost:3000/plants/${this.minTempF}/${this.humidityAsCm}`)
          .then(results=>results.json())

          .then(plants => {
            this.recomendedPlants = plants.map(plant=> plant['common_name']).filter(plant=> plant!=null);
            this.allReccomendedData = plants.filter(plant=> plant.common_name!=null)
        })
      })


    eventBus.$on("weatherDataSend",weather=>{

    this.allWeather =weather['consolidated_weather']




    })



  }
}
</script>

<style lang="css" scoped>
</style>
