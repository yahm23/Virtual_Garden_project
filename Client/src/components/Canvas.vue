<template >
  <div v-if='plants'>
    <div  class="rowPlants">
      <div v-for='plant in plants' class="specsPlant">
          <p>{{plant['name']}}</p>
        <!-- <single-plant  :plant='plant'></single-plant> -->
      </div>

      <p5 v-for='(plant,id) in plants' :key='id' :plant='plant'></p5>



    </div>
  </div>
</template>

<script>

import SinglePlant from '@/components/SinglePlant.vue'
import P5 from '@/components/P5Testing'
import GardenServices from "../services/gardenServices"
import {eventBus} from '../main.js'


export default {
  name:"canvas-component",
  components:{
    'single-plant':SinglePlant,
    'p5':P5,
  },
    data(){
      return{
        test:[1],
        plants:[]
      }
    },
    mounted(){
        // eventBus.$on('getPlants',()=>{})
        GardenServices.getPlants()
        .then(res => this.plants = res)

        // .then(res => console.log(res))


    }
}
</script>

<style lang="css" scoped>
</style>
