<template >
  <div v-if='plant' class='border single-plant'>
    <p>Common Name: {{toTitleCase(plant['common_name'])}}</p>
    <p>Scientific Name: {{toTitleCase(plant['scientific_name'])}}</p>
    <button class="btn btn-list" @click.prevent='moreInfo' >More Information</button>
    <div class="plant-info" v-if='show'>
      <p>{{plant['common_name']}}</p>

      <p></p>
    </div>
    <button class="btn btn-list" @click='newPlant' type="button" name="button">Add Plant</button>
    <button class="btn btn-list" @click='plantCycle' type="button" name="button">Experiment</button>
  </div>
</template>

<script>
import GardenServices from "../services/gardenServices"
import {eventBus} from "../main.js"

export default {
  name:'single-plant',
  props:['plant','weatherData','refreshTime'],
  data(){
    return{
      plantInfo:null,
      images:null,
      minTempC:5,
      flowerColor:null,
      waterLevel: 0,
      dbId: null,
      canvasParams:{
        volume: 0,
        height: 0
      },
      show: false,
      isOnGarden:false,
      dbPlant:{
        water:0.5,
        volume:0,
        height:0,
        with:0
      }

    }
  },
  mounted(){
  },
  methods:{
    plantCycle(){
    //need to fetch data from the plant
    //NOT FINISHED THE SHOW REQUEST ON SERVICES
    //should get the id of the plant
    //****************
    GardenServices.showPlant(this.dbId)
    .then(res => this.waterLevel = res.waterLevel)
    .then(() =>  console.log(this.waterLevel))
    //****************
    // if the humidity level is > than 50% water level +10% else -10%
    //WEATHER TEMPERATURE NOT SHURE IF DEFINED LIKE THAT
    //**************
    if(this.weatherData.humidity > 60){
      this.waterLevel += 0.10;
      this.dbPlant.volume += 0.1
    }else{
      this.waterLevel -= 0.10;
      this.dbPlant.volume -= 0.1
      this.dbPlant.height += 0.1

    }
    // this.weatherData.humidity > 60 ? this.waterLevel += 0.10 : this.waterLevel -= 0.10;
    //***************
    // if the weather temperature is > Plant min temperature +5% else -5%
    //WEATHER TEMPERATURE NOT SHURE IF DEFINED LIKE THAT
    if(this.weatherData.min_temp > this.minTempC){
      this.waterLevel += 0.5;
      this.dbPlant.with += 0.2
      this.dbPlant.height += 0.4

    }else {
      this.dbPlant.volume -= 0.4
      this.dbPlant.volume -= 0.2
      this.waterLevel -=0.10;
    }
    // this.waterData.temperature > this.plant.main_species.growth.temperature_minimum ?
    // this.waterLevel += 0.5 : this.waterLevel -= 0.5;

    if (waterLevel > 0.60){
      canvasParams.volume += 0.1;
      canvasParams.height -= 0.3;
      this.waterLevel -= 0.50
    };
    //update waterLevel on db
    this.waterLevel = this.dbPlant.water
    //setting the dbPlant to the
    this.dbPlant.water = this.waterLevel
    GardenServices.updateP(this.dbPlant,'/'+this.dbId)
}
,

    hellos(){
      if (this.isOnGarden)console.log('hey')
    },


    moreInfo(){
      if(this.plantInfo = null){fetch(`http://localhost:3000/specificplant/${this.plant['id']}`)
        .then(results=>results.json())
        .then(res => console.log(res))
        .then(plantInfo => this.plantInformation = plantInfo)
        console.log(this.plantInfo);
        }
        this.show = !this.show
    },
    newPlant(){
      const newPlant = {
        "name": this.plant.common_name,
 	      "plantApiId": this.plant.id,
        "water": 0.5,
        "birthDate": Date(),
        flowerColor:this.flowerColor

      }


      GardenServices.addPlant(newPlant)
      .then(res => {
        this.dbId = res._id;
        this.waterLevel = res.water
      })
      .then(() => {
        GardenServices.showPlant(this.dbId)
        .then(res => this.waterLevel)
        //fetching data once added (flowerColor,images,)
        .then(() => {
          fetch(`http://localhost:3000/specificplant/${this.plant['id']}`)
            .then(results=>results.json())
            .then(res => {
                console.log(res);
               this.flowerColor = res.main_species.flower.color;
               this.images = res.main_species.images;
               this.minTempC = res.main_species.growth.temperature_minimum.deg_c;
               this.minPrecipitation = res.main_species.growth.precipitation_minimum.cm;
            })
        })
        .then(() => {
          //need to fetch data from the plant
          //NOT FINISHED THE SHOW REQUEST ON SERVICES
          //should get the id of the plant
          //****************
          GardenServices.showPlant(this.dbId)
          .then(res => this.waterLevel = res.waterLevel)
          .then(() =>  console.log(this.waterLevel))
          //****************
          // if the humidity level is > than 50% water level +10% else -10%
          //WEATHER TEMPERATURE NOT SHURE IF DEFINED LIKE THAT
          //**************
          if(this.weatherData.humidity > 60){
            this.waterLevel += 0.10;
            this.dbPlant.volume += 0.1
          }else{
            this.waterLevel -= 0.10;
            this.dbPlant.volume -= 0.1
            this.dbPlant.height += 0.1

          }
          // this.weatherData.humidity > 60 ? this.waterLevel += 0.10 : this.waterLevel -= 0.10;
          //***************
          // if the weather temperature is > Plant min temperature +5% else -5%
          //WEATHER TEMPERATURE NOT SHURE IF DEFINED LIKE THAT
          if(this.weatherData.min_temp > this.minTempC){
            this.waterLevel += 0.5;
            this.dbPlant.with += 0.2
            this.dbPlant.height += 0.4

          }else {
            this.dbPlant.volume -= 0.4
            this.dbPlant.volume -= 0.2
            this.waterLevel -=0.10;
          }
          // this.waterData.temperature > this.plant.main_species.growth.temperature_minimum ?
          // this.waterLevel += 0.5 : this.waterLevel -= 0.5;

          if (this.waterLevel > 0.60){

            this.waterLevel -= 0.50
          };
          //update waterLevel on db
          this.waterLevel = this.dbPlant.water
          //setting the dbPlant to the
          this.dbPlant.water = this.waterLevel
          GardenServices.updateP(this.dbPlant,'/'+this.dbId)
        });
      })

        // .then((data) => eventBus.$emit('plant-added',data))
      // .then(res => console.log(res))
      // eventBus.$emit('plant-added',this.plant);
      // GardenServices.getPlants()
      // .then(res => eventBus.$emit("plant-added", this.plant))
      // GardenServices.getPlants()
      // .then(res => eventBus.$emit("getPlants", res))
    },

    toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
  }}
}



</script>

<style lang="css" scoped>

.hidden{
  pointer-events: none;
  display: none;
  visibility: hidden;
}
</style>
