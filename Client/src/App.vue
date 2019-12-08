<template>
  <div id="app">
    <map-fullscreen/>
  </div>
</template>

<script>
import MapFullScreen from './components/Map.vue'

export default {
  name: 'app',
  components: {
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
