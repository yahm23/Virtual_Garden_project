
<template lang="html">



  <div class="enviroment-container">
    <!-- WEATHER DATA -->
    <div class="weather-data">
      <environment-detail :allWeather='allWeather' :coordsV='coordsV'> </environment-detail>
    </div>

<!-- SLIDE IN CONTAINER -->

    <div :class="{hidden:modal}" id="container-list">
      <div class="buttons-section">
        <h6>Recomended Plants:</h6>
        <plant-list :plantList='allReccomendedData'></plant-list>
      </div>
    </div>

        <button @click= 'modalActivate' v-if='!modal'type="button" name="button" class="btn search-plant">Search for a specific Plant</button>

        <div v-if='modal' class="plant-searcher">

          <input v-model='search' value="Plant Name">
          <plant-list :plantList='plantsFound'></plant-list>
          <button @click='searchPlants'type="button" name="button" class="btn searcherBtn">Search</button>
          <button @click='modalActivate'type="button" name="button" class="btn searcherBtn">Close</button>

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
  props:['gardenWOEID','coordsV'],
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
      canvasPLants:''





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
    },
    toggleClass: function(event){
       // Check value
       if(this.isActive){
         this.isActive = false;
       }else{
         this.isActive = true;
       }

    },
  },
  mounted(){
    // eventBus.$on("getPlants",()=>{
    //   GardenServices.getPlants()
    //   .then(res => this.canvasPLants = res)
    // })
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
