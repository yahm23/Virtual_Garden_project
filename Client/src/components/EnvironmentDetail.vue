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
      'lat':0,
      'lng':0,
      'allWeather':''
    }
  },
  computed:{

  },
  mounted(){
    eventBus.$on('latAndLng', values =>{
    this.coords = values;
    this.lat = values['lat'];
    this.lng = values['lng'];
    this.fetchWeather()
    })
  },
  methods:{
    fetchWeather: ()=>{
      const link = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`
      console.log('test',link);
      // fetch(`https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`)
      // .then(results =>  this.allWeather = results);
    }
  }

}
</script>

<style lang="css" scoped>
</style>
