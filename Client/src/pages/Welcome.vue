<template>
  <div class="welcome-intro">
    <h1><span>Welcome to </span>Virtual Garden</h1>
    <button @click="onClick" type="button" value="Proceed" class="btn welcomeBtn">Build Your Garden Environment!</button>
  </div>
</template>


<script>

import CreateEnvironment from '@/pages/CreateEnvironment.vue'
import {eventBus} from '../main.js'

export default {
  name: 'welcome',
  data(){
    return{
    }
  },
  components: {
    "create-environment": CreateEnvironment,
  },
  methods:{
    onClick(){
      eventBus.$emit("showWelcome",false)
    }
  }

}
</script>

<style lang="css" scoped>
</style>
