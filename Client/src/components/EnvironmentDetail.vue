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

export default {
  name:'environment-detail',
  data(){
    return{
      'coords':[],
      'lat':'10.006722349135584',
      'lng':'0.00274658203125',
      'allWeather':[]
    }
  },
  computed:{

  },
  mounted(){
    eventBus.$on('latAndLng', values =>{
    this.coords = values;
    this.lat = values['lat'];
    this.lng = values['lng']
    // this.allWeather = this.fetchWeather(this.lat,this.lng)
    });
    eventBus.$on('weatherData', weather =>{ this.allWeather=weather})

  },
  methods:{


  }

}
</script>

<style lang="css" scoped>
</style>
