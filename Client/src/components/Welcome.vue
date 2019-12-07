<template>
  <div >
    <create-environment> </create-environment>
  </div>
</template>


<script>

import CreateEnvironment from '@/components/CreateEnvironment.vue'


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
