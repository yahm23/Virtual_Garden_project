
<template>
    <div id="p5CanvasBg">









    </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  name: "p5-example",
  data: () => ({


  }),
  computed: {

  },
  methods: {

  },
  mounted() {
    const script = function (p5) {

      let angle = 0
      let slider;

      // var speed = 2;
      // var posX = 0;

    // NOTE: Set up is here
     p5.setup = _ => {
      // p5.angleMode(DEGREES);
      p5.createCanvas(100, 500);

      p5.stroke(255);
      slider =p5.createSlider(0,3.14,1.5,0.001);
     // p5.ellipse(p5.width / 2, p5.height / 2, 500, 500);
    }
    // NOTE: Draw is here
    p5.draw = _ => {

      p5.background(54);
     p5.translate(p5.width/2,p5.height);
     p5.tree(p5.width/2,p5.height,150,slider.value(),0.5,3,0);


    }
    p5.tree = (x,y,len,angle,scl,n,startingColor) =>{
      p5.stroke(startingColor,100,100);
      p5.line(0,0,0,-len);
      p5.translate(0,-len);

      if (len>1){
        for (let i=0;i<n;i++){
          p5.push();
          p5.rotate(-angle+2*angle*i/(n-1));
          p5.tree(0,0,len*scl,angle,scl,n,startingColor+20);
          p5.pop();
        }
      }
    }


   }
   // NOTE: Use p5 as an instance mode
   const P5 = require('p5');
   new P5(script)
}}


</script>


<style media="screen">
#p5CanvasBg {
    position: absolute;
    height: 100%;
    z-index: 0;
    bottom: -54px;
}
</style>
