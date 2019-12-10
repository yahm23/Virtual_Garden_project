<template >
  <div v-if='plant' class='border'>
    <p>Common Name: {{toTitleCase(plant['common_name'])}}</p>
    <p>Scientific Name: {{toTitleCase(plant['scientific_name'])}}</p>
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

    },
    toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
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
