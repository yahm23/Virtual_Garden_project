<template >
    <div class="plant-list-container">
    <single-plant v-for='(plant,index) in plantList' :key='index' :plant='plant' :weatherData='weatherData' :refreshTime="refreshTime"></single-plant>

  </div>
</template>

<script>
import SinglePlant from '@/components/SinglePlant.vue'
export default {
  name:'plant-list',
  data(){
    return{
      plantData:[],
      refreshTime:1
    }
  },
  components:{
    'single-plant':SinglePlant
  },

  props:['plantList','weatherData']
}
</script>

<style lang="css" scoped>
</style>
