<template>
  <div id="app">
    <welcome> </welcome>
      <map-fullscreen/>
  </div>
</template>


<script>
import Welcome from '@/pages/Welcome.vue'
import MapFullScreen from './components/Map.vue'
>>>>>>> create/Map_Component_v2

export default {
  name: 'app',
  data(){
    return{
      test:'Hello World'
    }
  },
  components: {
    "welcome": Welcome
    "map-fullscreen": MapFullScreen
  }
}
</script>

<style>
body {
    margin: 35px;
    border: 6px solid #222224;
    box-sizing: border-box;
    height: calc(100vh - 70px);
}
</style>
