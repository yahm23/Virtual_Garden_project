<template>
  <div id="app">
    <welcome v-if="showWelcome"> </welcome>
    <create-environment v-if="showEnvironment"> </create-environment>
    <virtual-garden v-if="showGarden"> </virtual-garden>
  </div>
</template>


<script>
import Welcome from '@/pages/Welcome.vue'
import CreateEnvironment from '@/pages/CreateEnvironment.vue'
import VirtualGarden from '@/pages/VirtualGarden.vue'

export default {
  name: 'app',
  data(){
    return{
      showWelcome:true,
      showEnvironment:true,
      showGarden:true
    }
  },
  components: {
    "welcome": Welcome,
    'create-environment':CreateEnvironment,
    'virtual-garden':VirtualGarden
  }
}
</script>

<style>

</style>
