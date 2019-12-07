<template >
  <div class="">
    Canvas linked
    <single-plant></single-plant>
  </div>
</template>

<script>
import SinglePlant from '@/components/SinglePlant.vue'
export default {
  name:"canvas-component",
  components:{
    'single-plant':SinglePlant
  }
}
</script>

<style lang="css" scoped>
</style>
