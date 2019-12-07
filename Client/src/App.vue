<template>
  <div id="app">
    <welcome> </welcome>
  </div>
</template>


<script>
import Welcome from '@/components/Welcome.vue'

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
