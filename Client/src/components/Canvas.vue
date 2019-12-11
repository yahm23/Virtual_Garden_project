<template >
  <div class="">

    <div  >

      <p5  v-for='(plant,index) in plants' :key='index' :plant='plant'></p5>

    </div>
  </div>
</template>

<script>
import SinglePlant from '@/components/SinglePlant.vue'
import P5 from '@/components/P5Testing'
import GardenServices from "../services/gardenServices"

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
    }
}
</script>

<style lang="css" scoped>
</style>
