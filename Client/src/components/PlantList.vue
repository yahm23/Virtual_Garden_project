<template >
  <div >
    Plant list linked
    <single-plant></single-plant>
  </div>
</template>

<script>
import SinglePlant from '@/components/SinglePlant.vue'
export default {
  name:'plant-list',
  components:{
    'single-plant':SinglePlant
  }
}
</script>

<style lang="css" scoped>
</style>
