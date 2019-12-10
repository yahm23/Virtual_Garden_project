<template>
  <div id="app">
    <header>
      <nav>
        <div class="logoIcon">
          <p>Virtual Garden</p>
        </div>
        <ul>
          <li>Hello</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
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

.hidden{
  pointer-events: none;
  display: none;
  visibility: hidden;
}

</style>
