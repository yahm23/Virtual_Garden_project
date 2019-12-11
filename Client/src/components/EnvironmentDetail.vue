<template lang="html">
  <div class="fixed-menu">
    <div v-if='coords'>
      <div v-if='allWeather' class="fixed-menu-data">
        <p > Temperature: {{allWeather[0]['the_temp'].toPrecision(2)}}°C    </p>
        <p > Weather State: {{allWeather[0]['weather_state_name']}}    </p>
        <p > Humidity: {{allWeather[0]['humidity']}}%    </p>
      </div>

      <div v-if='!coordsV' class="lat-log-box">
        Lat: {{parseFloat(lat).toPrecision(4)}} | Long: {{parseFloat(lng).toPrecision(4)}}
      </div>

      <div v-if='coordsV' class="lat-log-box">
        Lat: {{parseFloat(coordsV['lat']).toPrecision(4)}} | Long: {{parseFloat(coordsV['lng']).toPrecision(4)}}
      </div>

    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name:'environment-detail',
  props:['allWeather','coordsV'],
  data(){
    return{
      'coords':[],
      'lat':'0',
      'lng':'0',

      //'Weather':''
    }
  },
  computed:{

  },
  mounted(){
    eventBus.$on('latAndLng', values =>{
    this.coords = values;
    this.lat = values['lat'];
    this.lng = values['lng'];
    // eventBus.$on('weatherData', weather =>{ this.allWeather=weather})
    });


  },
  methods:{


  }

}
</script>

<style lang="css" scoped>
</style>
