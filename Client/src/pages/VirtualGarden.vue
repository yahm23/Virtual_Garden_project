<template lang="html">
  <div class="">
    <p>Virtual Garden connected</p>
    
    <plant-list></plant-list>
  </div>
</template>

<script>
import PlantList from'@/components/PlantList.vue'
import PlantSearch from'@/components/PlantList.vue'

export default {
  name:'virtual-garden',
  components:{
    'plant-list':PlantList
  }
}
</script>

<style lang="css" scoped>
</style>
