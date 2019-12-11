<template >
  <div class="">

    <div v-for="item in test" >

      <p5></p5>
    </div>
  </div>
</template>

<script>
import SinglePlant from '@/components/SinglePlant.vue'
import P5 from '@/components/P5Testing'
export default {
  name:"canvas-component",
  components:{
    'single-plant':SinglePlant,
    'p5':P5,
  },
    data(){
      return{
        test:[1]
      }
    }
}
</script>

<style lang="css" scoped>
</style>
