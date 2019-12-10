<template>
  <div id="app">
    <welcome  v-if="showWelcome"> </welcome>
    <create-environment class="show-env" v-if="showEnvironment" :class="{hidden:!showEnvironment}"> </create-environment>
    <virtual-garden v-if="showGarden" :gardenWOEID='gardenWOEID'> </virtual-garden>
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
      showGarden: null,
      userID:'',
      gardenWOEID:''


    }
  },
  components: {
    "welcome": Welcome,
    'create-environment':CreateEnvironment,
    'virtual-garden':VirtualGarden,

    // "map-fullscreen": MapFullScreen
  },
  mounted(){
    eventBus.$on('showWelcome',state => {this.showWelcome=state;
    this.showEnvironment=true;});
    eventBus.$on('showEnvironment',state => {this.showEnvironment=state;
    this.showGarden = true});

    eventBus.$on("gardenWOEID",id => this.gardenWOEID = id );


  },

}

</script>

<style>
body {
    margin: 35px;
    border: 6px solid #222224;
    box-sizing: border-box;
    height: calc(100vh - 70px);
}
.hidden{
  pointer-events: none;
  display: none;
  visibility: hidden;
}

</style>
