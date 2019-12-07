<template >
  <div class="">
    <p>Map connected</p>
    <virtual-garden> </virtual-garden>
  </div>
</template>

<script>
import VirtualGarden from '@/components/VirtualGarden.vue'

export default {
  nmae:'map-environment',
  components:{
    'virtual-garden':VirtualGarden
  }
}
</script>

<style lang="css" scoped>
</style>
