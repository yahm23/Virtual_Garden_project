<template >
  <div v-if='plant' class='border single-plant'>
    <p>Common Name: <span>{{toTitleCase(plant['common_name'])}}</span></p>
    <p>Scientific Name: <span>{{toTitleCase(plant['scientific_name'])}}</span></p>
    <button class="btn-list-info" @click.prevent='moreInfo' >More Information</button>
    <div class="plant-info" v-if='show'>
      <!-- {{plantInformation}} -->
      <p v-if ="plantInformation['main_species']['growth']['temperature_minimum'].deg_c">Minimum Temperature: {{plantInformation['main_species']['growth']['temperature_minimum'].deg_c.toPrecision(4)}} °C</p>
      <p v-if ="plantInformation['main_species']['growth']['precipitation_minimum'].cm">Minimum Precipitation: {{plantInformation['main_species']['growth']['precipitation_minimum'].cm.toPrecision(4)}} cm</p>
      <p v-if ="plantInformation['main_species']['growth']['precipitation_maximum'].cm">Maximum Precipitation: {{plantInformation['main_species']['growth']['precipitation_maximum'].cm.toPrecision(4)}} cm</p>
      <p v-if = "plantInformation['main_species']['growth']['precipitation_minimum'].cm" >Mature Height: {{plantInformation['main_species']['growth']['precipitation_minimum'].cm.toPrecision(4)}} cm</p>
      <p v-if = "plantInformation['main_species']['specifications']['growth_rate']" >Growth Rate: {{plantInformation['main_species']['specifications']['growth_rate']}}</p>
      <div class='show-img' v-if = "plantInformation['images']">
        <img :src="plantInformation['images'][0].url" alt="">
      </div>
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

  },
  methods:{
    moreInfo(){
      fetch(`http://localhost:3000/specificplant/${this.plant['id']}`)
        .then(results=>results.json())
        .then(plantInfo => {
          this.plantInformation = plantInfo
          //set data values
        })
        this.show = !this.show
    },

    newPlant(){
      const newPlant = {
        "name": this.plant.common_name,
 	      "plantApiId": this.plant.id,
        "water": 0.5,
        "birthDate": Date(),
        "tempMin": this.getMinTemp

      }
      GardenServices.addPlant(newPlant)
      .then( () => GardenServices.getPlants()
      .then(res => eventBus.$emit("getPlants", res)))
      // eventBus.$emit('plant-added',this.plant);
      GardenServices.getPlants()
      .then(res => eventBus.$emit("getPlants", res))


    },

    getMinTemp(){
      fetch(`http://localhost:3000/specificplant/${this.plant['id']}`)
        .then(results=>results.json())
        .then(plantInfo => this.plantInformation = plantInfo)

      let temp = 10


      if(this.plantInformation['main_species']){
        console.log('');
        if(this.plantInformation['main_species']['growth']){
          if(this.plantInformation['main_species']['growth']['temperature_minimum']){
            console.log(this.plantInformation['main_species']['growth']['temperature_minimum']);
            if(this.plantInformation['main_species']['growth']['temperature_minimum']['deg_c']){
              temp = this.plantInformation['main_species']['growth']['temperature_minimum']['deg_c']
              return temp
            }
          }
        }
      }
      else{
        console.log('hello');
        return temp}


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
.show-img img {
  width:100%;
}
</style>
