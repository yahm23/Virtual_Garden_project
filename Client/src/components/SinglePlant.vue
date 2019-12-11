<template >
  <div v-if='plant' class='border'>
    <p>Common Name: {{plant['common_name']}}</p>
    <p>Scientific Name: {{plant['scientific_name']}}</p>
    <button @click.prevent='moreInfo' >Click here for More Information</button>
    <div class="plant-info" v-if='show'>
      {{plantInformation}}
    </div>
    <button @click='newPlant' type="button" name="button">Add Plant</button>
  </div>
</template>

<script>
import GardenServices from "../services/gardenServices"
import {eventBus} from "../main.js"

export default {
  name:'single-plant',
  props:['plant','weatherData','refreshTime'],
  data(){
    return{
      waterLevel: 0,
      dbData: null,
      canvasParams:{
        volume: 0,
        height: 0
      },
      show: false,

    }
  },
  mounted(){

    // setInterval(this.updatePlant(),this.refreshTime*1000 )

  },
  methods:{
    moreInfo(){
      fetch(`http://localhost:3000/specificplant/${this.plant['id']}`)
        .then(results=>results.json())
        .then(plantInfo => this.plantInformation = plantInfo)
        this.show = !this.show
    },
    newPlant(){
      const newPlant = {
        "name": this.plant.common_name,
 	      "plantApiId": this.plant.id,
        "water": 0.5,
        "birthDate": Date()
      }


      GardenServices.addPlant(newPlant)
      .then(res => this.dbData = res)

        // .then((data) => eventBus.$emit('plant-added',data))
      // .then(res => console.log(res))
      // eventBus.$emit('plant-added',this.plant);
      // GardenServices.getPlants()
      // .then(res => eventBus.$emit("plant-added", this.plant))
    },

    updatePlant(){
      //need to fetch data from the plant
      //NOT FINISHED THE SHOW REQUEST ON SERVICES
      //should get the id of the plant
      GardenServices.showPlant(dbPlant.id)
      .then(res => this.waterLevel = res.waterLevel);
      // if the humidity level is > than 50% water level +10% else -10%
      //WEATHER TEMPERATURE NOT SHURE IF DEFINED LIKE THAT
      this.weatherData.humidity > 50 ? this.waterLevel += 0.10 : this.waterLevel -= 0.10;

      // if the weather temperature is > Plant min temperature +5% else -5%
      //WEATHER TEMPERATURE NOT SHURE IF DEFINED LIKE THAT
      this.waterData.temperature > this.plant.main_species.growth.temperature_minimum ?
      this.waterLevel += 0.5 : this.waterLevel -= 0.5;

      if (waterLevel > 0.60){
        canvasParams.volume += 0.1;
        canvasParams.height -= 0.3;
        this.waterLevel -= 0.50
      };

      //update waterLevel on db

      GardenServices.updateP(this.dbPlant)
}



  }

}

</script>

<style lang="css" scoped>

.border{
  border: 2px solid slategrey;
}
.hidden{
  pointer-events: none;
  display: none;
  visibility: hidden;
}
</style>
