<template >
  <div class="">
    <p>Map connected</p>
    <environment-detail> </environment-detail>
    <virtual-garden> </virtual-garden>
  </div>
</template>

<script>
import VirtualGarden from '@/pages/VirtualGarden.vue'
import EnvironmentDetail from '@/components/EnvironmentDetail.vue'


export default {
  nmae:'map-environment',
  components:{
    'virtual-garden':VirtualGarden,
    'environment-detail':EnvironmentDetail
  }
}
</script>

<style lang="css" scoped>
</style>
