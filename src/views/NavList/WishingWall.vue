<template>
  <div class="wish-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { random } from '@/utils';

export default {
  name: 'WishingWall',
  data () {
    return {
      rains: [],
      count: 30,
      rSpeed: 1,
      ySpeed: random(4, 7),
      timer: null,
    }
  },
  computed: {
    canvasWidth() {
      return window.innerWidth
    },
    canvasHeight() {
      return window.innerHeight
    }
  },
  created () {
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      // const ctx = canvas.getContext('2d');
      canvas.width = this.canvasWidth;
      canvas.height = this.canvasHeight;
    },
  },
}
</script>

<style lang="scss" scoped>
.wish-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000000;
}
</style>
