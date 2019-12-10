<template lang="html">
  <div class="">
    <p>Virtual Garden connected</p>
    <environment-detail :allWeather='allWeather'> </environment-detail>
      <p>Recomended Plants: </p>

      <plant-list :plantList='allReccomendedData'></plant-list>
      <p></p>


      <!-- pop up -->



        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <div class="w3-container">
          <input v-model='search' type="text" name="" value="Enter name Here">
          <button onclick="document.getElementById('id01').style.display='block';myPopFunction()" class="">


            Search For Plant

          </button>

          <div id="id01" class="w3-modal">
            <div class="w3-modal-content">
              <div class="w3-container">
                <span onclick="document.getElementById('id01').style.display='none'" class="">

                </span>

                <plant-list :plantList='searchResults'></plant-list>
              </div>
            </div>
          </div>
        </div>

        <!-- <button @click= 'myPopFunction'>
          Search your own plant!
        </button> -->


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
      allReccomendedData:[],
      search:'',
      searchResults:''

    }
  },
  methods:{

    myPopFunction() {
        console.log('pop wfiring');
        fetch(`http://localhost:3000/plantCommonName/${this.search}`)
          .then(results=>results.json())
          .then(plants => {
          this.searchResults = plants
          console.log(plants)
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
