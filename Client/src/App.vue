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
    "welcome": Welcome
  }
}
</script>

<style>

</style>
