<template >
  <div v-if='plant' class='border'>
    <p>Common Name: {{plant['common_name']}}</p>
    <p>Scientific Name: {{plant['scientific_name']}}</p>
    <button @click.prevent='moreInfo' >Click here for More Information</button>
    <p>{{plantInformation}}</p>
  </div>
</template>

<script>

export default {
  name:'single-plant',
  props:['plant'],
  data(){
    return{
      plantInformation:[],
      show: false
    }
  },
  mounted(){
  },
  methods:{
    moreInfo(){
      fetch(`http://localhost:3000/specificplant/${this.plant['id']}`)
        .then(results=>results.json())
        .then(plantInfo => this.plantInformation = plantInfo)

      this.show=true

    }

  }

}
</script>

<style lang="css" scoped>

.border{
  border: 2px solid slategrey;
}
.hidden{
  pointer-events: none;
  display: none;
  visibility: hidden;
}
</style>
