
<template>
    <div id="p5CanvasBg"></div>
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
  //   var speed = -1;
  //   var posX = 1000;
  //
  //
  //    p5.setup = _ => {
  //    var canvas = p5.createCanvas(window.innerWidth - 82, window.innerHeight - 135);
  //    canvas.parent("p5CanvasBg");
  //    p5.background( 255,255,255);
  //   }
  //
  //    p5.draw = _ => {
  //
  //    p5.containener = _ => {
  //    p5.strokeWeight(5);
  //    p5.triangle(-6, p5.height +5, -6, p5.height / 2 + 5, p5.width / 7, p5.height +5);
  // }
  //
  // p5.strokeWeight(5);
  // p5.triangle(p5.width /2 , p5.height +5, -6, p5.height / 2 + 5, p5.width / 7, p5.height +5);
  // p5.triangle(p5.width, p5.width, 50, 50, 150, p5.height);
  //
  // }
  let distances = [];
  let maxDistance;
  let spacer;

   p5.setup = _ => {
     var canvas = p5.createCanvas(window.innerWidth - 82, window.innerHeight - 135);
    //    canvas.parent("p5CanvasBg");
    p5.maxDistance = p5.dist(p5.width / 2, p5.height / 2, p5.width, p5.height);
    for (let x = 0; x < p5.width; x++) {
      p5.distances[x] = []; // create nested array
      for (let y = 0; y < p5.height; y++) {
        let distance = p5.dist(p5.width / 2, p5.height / 2, x, y);
        p5.distances[x][y] = (p5.distance / p5.maxDistance) * 255;
      }
    }
    spacer = 10;
    p5.noLoop(); // Run once and stop
  }

  p5.draw = _ => {
    p5.background(0);
    // This embedded loop skips over values in the arrays based on
    // the spacer variable, so there are more values in the array
    // than are drawn here. Change the value of the spacer variable
    // to change the density of the points
    for (let x = 0; x < p5.width; x += p5.spacer) {
      for (let y = 0; y < p5.height; y += p5.spacer) {
        p5.stroke(p5.distances[x][y]);
        p5.point(x + p5.spacer / 2, y + p5.spacer / 2);
      }
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
#p5CanvasBg {
    position: absolute;
    height: 100%;
    z-index: 0;
    bottom: -54px;
}
</style>
