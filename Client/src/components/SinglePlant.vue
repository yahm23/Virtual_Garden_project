<template >
  <div v-if='plant' class='border single-plant'>
    <p>Common Name: {{toTitleCase(plant['common_name'])}}</p>
    <p>Scientific Name: {{toTitleCase(plant['scientific_name'])}}</p>
    <button class="btn btn-list" @click.prevent='moreInfo' >More Information</button>
    <div class="plant-info" v-if='show'>
      {{plantInformation}}
    </div>
    <button class="btn btn-list" @click='newPlant' type="button" name="button">Add Plant</button>
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
    },
    toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
    }

  }

}
</script>

<style lang="css" scoped>

.hidden{
  pointer-events: none;
  display: none;
  visibility: hidden;
}
</style>
