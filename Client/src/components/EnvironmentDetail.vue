<template lang="html">
  <div class="">
    <div v-if='coords'>
      <p>Average temperature</p>
      Your lat is {{lat}} and  long {{lng}}
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import {LMap, LTileLayer, LMarker ,LControlZoom,} from 'vue2-leaflet';

export default {
  name:'environment-detail',
  data(){
    return{
      'coords':[],
      'lat':'',
      'lng':''

    }
  },
  computed:{

  },
  mounted(){
    eventBus.$on('latAndLng', values =>{
    this.coords = values;
    this.lat = values['lat'];
    this.lng = values['lng']})
  },
  method:{
    fetchWeather: function() {
      // fetch(``)
      //   .then(bookings => this.bookings = bookings);
    }
  }

}
</script>

<style lang="css" scoped>
</style>
