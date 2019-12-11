<template >
  <div class="">
    <div v-for='plant in plants' :plant='plant' class="rowPlants">
      <div class="specsPlant">
          <p>{{plant['name']}}</p>
      </div>

      <p5 :plant='plant' >{{plant['name']}</p5>

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

        GardenServices.getPlants()
        .then(res => this.plants = res)

        // .then(res => console.log(res))


    }
}
</script>

<style lang="css" scoped>
</style>
