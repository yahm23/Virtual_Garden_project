<template>
  <div >
    Welcome linked
    <create-environment> </create-environment>
  </div>
</template>


<script>

import CreateEnvironment from '@/pages/CreateEnvironment.vue'


export default {
  name: 'welcome',
  data(){
    return{
    }
  },
  components: {
    "create-environment": CreateEnvironment,
  }

}
</script>

<style lang="css" scoped>
</style>
