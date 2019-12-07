<template>
  <div id="app">
    <welcome v-if="showWelcome"> </welcome>
    <create-environment class="show-env" v-if="showEnvironment"> </create-environment>
    <virtual-garden v-if="showGarden"> </virtual-garden>
  </div>
</template>


<script>
import Welcome from '@/pages/Welcome.vue'
import CreateEnvironment from '@/pages/CreateEnvironment.vue'
import VirtualGarden from '@/pages/VirtualGarden.vue'

import{eventBus} from './main.js'
export default {
  name: 'app',
  data(){
    return{
      showWelcome:true,
      showEnvironment:false,
      showGarden: null
    }
  },
  components: {
    "welcome": Welcome,
    'create-environment':CreateEnvironment,
    'virtual-garden':VirtualGarden
  },
  mounted(){
    eventBus.$on('showWelcome',state => {this.showWelcome=state;
    this.showEnvironment=true;})
  },
}
</script>

<style>

</style>
