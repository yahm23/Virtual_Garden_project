
<template>
  <div>
    <banana
      @setup="setup"
      @draw="draw"
      @keypressed="keypressed">
    </banana>

    <!-- <p>
      Press <button @click="toggleRed()">button</button> to toggle red color <br/>
      Press <code>g</code> to toggle green color <br/>
      Use mouse to draw lines <br/>
    </p> -->
  </div>
</template>

<script>
// import VueP5 from "vue-p5";

export default {
  name: "p5-example",
  components: {
    "banana": VueP5
  },
  data: () => ({

  }),
  computed: {

  },
  methods: {

    setup(sketch) {
        sketch.createCanvas(400, 400);
      },
      draw(sk) {
      // draw a line between the previous
      // and the current mouse position
      sk.line(sk.pmouseX, sk.pmouseY, sk.mouseX, sk.mouseY);
    },
    keypressed(sk) {
      // convert the key code to it's string
      // representation and print it
      const key = String.fromCharCode(sk.keyCode);
      sk.print(key);
    }
},

}
</script>
