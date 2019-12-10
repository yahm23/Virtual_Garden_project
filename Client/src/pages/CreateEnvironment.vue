<template >
  <div class="">
    <map-environment> </map-environment>
    <!-- <preset-environment> </preset-environment> -->
    <!-- <virtual-garden v-if="showGarden"> </virtual-garden> -->
  </div>

</template>

<script>
import MapEnvironment from '@/components/Map.vue'
// import PresetEnvironment from '@/components/PresetEnvironments.vue'

export default {
  name:'create-environment',
  components:{
    'map-environment':MapEnvironment,
    // 'preset-environment':PresetEnvironment
  },

}
</script>

<style lang="css" scoped>
</style>
