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
  props:['plant'],
  data(){
    return{
      plantInformation:[],
      show: false
    }
  },
  mounted(){
    GardenServices.getPlants()
    .then(res => console.log(res))
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
      .then( () => GardenServices.getPlants()
      .then(res => eventBus.$emit("getPlants", res)))
      // eventBus.$emit('plant-added',this.plant);
      GardenServices.getPlants()
      .then(res => eventBus.$emit("getPlants", res))
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
