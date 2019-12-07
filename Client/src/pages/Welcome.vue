<template>
  <div >
    Welcome linked
    <button @click="onClick" type="button" value="Proceed">Hide Welcome</button>
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
