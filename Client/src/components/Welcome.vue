<template>
  <div >
    <new-environment> </new-environment>
    <preset-environment> </preset-environment>

  </div>
</template>


<script>

import NewEnvironment from '@/components/CreateEnvironment.vue'
import PresetEnvironment from '@/components/PresetEnvironments.vue'

export default {
  name: 'welcome',
  data(){
    return{
    }
  },
  components: {
    "new-environment": NewEnvironment,
    "preset-environment": PresetEnvironment
  }

}
</script>

<style lang="css" scoped>
</style>
