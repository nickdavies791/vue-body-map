<template>
  <div>
    <canvas
        id="vue-body-map"
        ref="vue-body-map"
        @mousemove="draw"
        @mousedown="start"
        @mouseup="stop"
        :width="this.width"
        :height="this.height">
    </canvas>
  </div>
</template>

<script>
import Diagram from './assets/diagram.jpg'

export default {
  name: "BodyMap",

  props: ['colour', 'width', 'height'],

  data() {
    return {
      canvas: null,
      drawing: false,
      x: 0,
      y: 0
    }
  },

  computed: {},

  methods: {

    /**
     * Initialise line drawing.
     */
    draw(e) {
      if (this.drawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },

    /**
     * Start line drawing.
     */
    start(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.drawing = true;
    },

    /**
     * Stop line drawing.
     */
    stop(e) {
      if (this.drawing) {
        this.draw(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.drawing = false;
      }
    },

    /**
     * Draw the line.
     */
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = this.colour;
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },

    /**
     * Initialise the canvas.
     */
    initCanvas() {
      const c = this.$refs["vue-body-map"];
      this.canvas = c.getContext('2d');
    },

    /**
     * Load the diagram onto the canvas.
     */
    loadDiagram() {
      let baseImage = new Image();
      baseImage.src = Diagram

      baseImage.onload = () => {
        this.canvas.drawImage(baseImage, 0, 0, this.width, this.height);
      }
    }
  },

  mounted() {
    this.initCanvas()
    this.loadDiagram()
  }
}
</script>

<style scoped>
#vue-body-map {
  border: 1px solid grey;
}
</style>
