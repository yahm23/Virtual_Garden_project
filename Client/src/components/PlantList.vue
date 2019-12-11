<template >
  <div >
    <single-plant v-for='(plant,index) in plantList' :key='index' :plant='plant' :weatherData='weatherData' :refreshTime="refreshTime"></single-plant>
//Added weatherData as a prop
  </div>
</template>

<script>
import SinglePlant from '@/components/SinglePlant.vue'
export default {
  name:'plant-list',
  data(){
    return{
      plantData:[],
      weatherData:[],
      refreshTime:1
    }
  },
  components:{
    'single-plant':SinglePlant
  },

  props:['plantList']
}
</script>

<style lang="css" scoped>
</style>
