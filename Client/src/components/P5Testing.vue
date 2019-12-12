<template>
  <div>
    <vue-p5 @setup="setup" @draw="draw"></vue-p5>
    <div class="renderInfo">
      <h4>{{plant['name']}}</h4>
      <p>Planted on: {{plant['birthDate']}}</p>
    </div>


  </div>
</template>
<script>
import VueP5 from 'vue-p5';
export default {
  name: 'p5-comp',
  data() {
    return {
      angle: 0,
      slider: null,
      lon: 100,
      volume: 20,
      tronkWith: 50,
      tronkHeight: 100,
      long: null,
      close: null,
      plantInformation:''
    }
  },
  props:['plant'],
  computed:{
    // minTempC:3
  },
  methods: {
  setup: function(sk) {
    // let randVal = (Math.random()*20)
    let randVal = 8
    let value = 1
  sk.createCanvas(sk.windowWidth - 182, 300);
  sk.background(255,255,255);
  sk.growth = sk.createSlider(0, Math.PI/(2*randVal), Math.PI/4, 0.01);
  sk.length = sk.createSlider(20,100*value, 2, 0.2);
  // sk.longness = sk.createSlider(0.10, 0.70, 0.1, 0.01);
  // sk.closeness = sk.createSlider(0, 1, 0.1, 0.02);
  },
   draw: function(sk) {
    sk.background(51);
    this.volume = sk.length.value();
    this.angle = sk.growth.value();
    this.long = 0.6;
    this.close = 0.4;
    sk.stroke(255);
    sk.translate(200,sk.height);
    this.branch(sk,this.lon);
    // sk.noLoop()
  },
  branch: function(sk,len){
    sk.strokeWeight((len/this.lon * 5));
    if(len/this.lon * 5 === 5){
      sk.strokeWeight(this.tronkWith);
      len = this.tronkHeight;
    }
    sk.line(0,0,0,-len);
    sk.translate(0,-len);
    if(len > this.volume ){
      sk.push();
      sk.rotate(this.angle);
      this.branch(sk,len * this.long);
      sk.pop();
      sk.push();
      sk.rotate(-this.angle);
      this.branch(sk,len * this.long);
      sk.pop();
      sk.push();
      sk.rotate(-this.angle * this.close);
      this.branch(sk,len * this.long);
      sk.pop();
      sk.push();
      sk.rotate(this.angle * this.close);
      this.branch(sk,len * this.long);
      sk.pop();
    }
  }},
  // keypressed: function(sk) {
  //   // convert the key code to it's string
  //   // representation and print it
  //   const key = String.fromCharCode(sk.keyCode);
  //   sk.print(key);
  // }
  // },
  components: {
    "vue-p5": VueP5
  },
  mounted(){
    console.log(this.plant);

    fetch(`http://localhost:3000/specificplant/${this.plant['id']}`)
      .then(results=>results.json())
      .then(plantInfo => this.plantInformation = plantInfo)

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
