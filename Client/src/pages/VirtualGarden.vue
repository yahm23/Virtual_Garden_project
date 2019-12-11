<template lang="html">
  <div class="">
    <div :class="{hidden:modal}">
      <p>Virtual Garden connected</p>
      <environment-detail :allWeather='allWeather' :coordsV='coordsV'> </environment-detail>
      <p>Recomended Plants: </p>

      <plant-list :plantList='allReccomendedData' :weatherData="allWeather[0]"></plant-list>
      <p></p>

      <canvascomp></canvascomp>
    </div>

    <div class="">
      <button @click= 'modalActivate' v-if='!modal'type="button" name="button">Search for a Plant</button>
      <div v-if='modal'>
        <input v-model='search' value="Plant Name">
        <plant-list :plantList='plantsFound'></plant-list>
        <button @click='searchPlants'type="button" name="button">Search</button>
        <button @click='modalActivate'type="button" name="button">Close</button>
      </div>
    </div>


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
  props:['gardenWOEID','coordsV','weatherData'],
  data(){
    return{
      recomendedPlants:'',
      allWeather:'',
      minTempF:'',
      humidityAsCm:'',
      allReccomendedData:[],
      modal:false,
      search:'',
      plantsFound:[],





    }
  },
  methods:{
    toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
    },

    modalActivate(){
      if(this.modal==false){
        this.modal= true
      }
      else{
        this.modal=false
      }
    },

    searchPlants(){
      fetch(`http://localhost:3000/plantToSearch/${this.search}`)

        .then(results=>results.json())

        .then(plants => {
          this.plantsFound = plants.filter(plant=> plant.common_name!=null)
      })
    }


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
            // this.recomendedPlants = plants.map(plant=> plant['common_name']).filter(plant=> plant!=null);
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
