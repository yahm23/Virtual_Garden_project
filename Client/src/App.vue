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
    <virtual-garden v-if="showGarden" :gardenWOEID='gardenWOEID' :coordsV='coordsV'> </virtual-garden>
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
      gardenWOEID:'',
      gardenData:[],
      allPlants:[],
      coordsV:''


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
    // eventBus.$on("plant-added", plant => this.plants.push(plant));
    eventBus.$on('getPlants', data => {
      this.Allplants = data;
    });

    //weather data your mama fat
    eventBus.$on("weatherData", data => {this.gardenData = data})

    eventBus.$on('latAndLng', values =>{
    this.coordsV = values;
    })

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
