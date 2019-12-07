<template >
  <div >
    <p>Preset-environment file linked</p>
    <virtual-garden> </virtual-garden>
  </div>
</template>

<script>
import VirtualGarden from '@/components/VirtualGarden.vue'

export default {
  name:'preset-environment',
  components:{
    'virtual-garden':VirtualGarden
  }

}
</script>

<style lang="css" scoped>
</style>
