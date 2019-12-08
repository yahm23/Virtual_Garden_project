<template>
  <div id="app">
    <welcome> </welcome>
  </div>
</template>


<script>
import Welcome from '@/pages/Welcome.vue'

export default {
  name: 'app',
  data(){
    return{
      test:'Hello World'
    }
  },
  components: {
<<<<<<< HEAD
    "welcome": Welcome,
    "map-fullscreen": MapFullScreen
=======
    "map-fullscreen": MapFullScreen
>>>>>>> create/Map_Component_v2
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
