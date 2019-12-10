
<template>
    <div class="canvas-wrap"></div>
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
  var speed = -1;
  var posX = 1000;

  //  Set up is here
   p5.setup = _ => {
   p5.createCanvas(window.innerWidth - 82, window.innerHeight - 82);

  }
  //  Draw is here
   p5.draw = _ => {
   p5.background( 255,30,155, 0);
   const degree = p5.frameCount * 16;
   const y = p5.sin(p5.radians(degree)) * 15;
    // const y = 500;

   p5.push();
    p5.translate(10, p5.height / 10);
    p5.strokeWeight(1);
    p5.noFill( );
    p5.circle(posX, y, 50, 50);
   p5.pop();
   posX += speed;

   if (posX > p5.width || posX < 0) {
    speed *= -1;
   }
  }
 }


 // : Use p5 as an instance mode
 const P5 = require('p5');
 new P5(script)
}

}
</script>


<style media="screen">
/* .screen-sizing {
  height: 100vh;
  width: 100%;

} */
</style>
