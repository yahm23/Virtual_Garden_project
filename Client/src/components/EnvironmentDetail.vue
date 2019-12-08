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
      'allWeather':''
    }
  },
  computed:{

  },
  mounted(){
    eventBus.$on('latAndLng', values =>{
    this.coords = values;
    this.lat = values['lat'];
    this.lng = values['lng']
    this.fetchWeather(this.lat,this.lng)

    })

  },
  methods:{
    fetchWeather: (lat,lng)=>{
      const link = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`
      console.log('testing',link);
    }
  }

}
</script>

<style lang="css" scoped>
</style>
