<template >
  <div class="plant-list-container">

    <div class="plant-list">
      <single-plant v-for='(plant,index) in plantList' :key='index' :plant='plant'></single-plant>
    </div>
    </div>
</template>

<script>
import SinglePlant from '@/components/SinglePlant.vue'
export default {
  name:'plant-list',
  components:{
    'single-plant':SinglePlant
  },
  props:['plantList']
}
</script>

<style lang="css" scoped>
</style>
