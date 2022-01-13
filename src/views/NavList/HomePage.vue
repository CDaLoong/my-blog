<template>
  <div class="main">
    <div class="body">
      <div>
        <p class="words-begin">与君横盘立键,</p>
        <div><p class="words-end">敲出世间繁华！</p></div>
      </div>
    </div>
    <canvas ref="homeCanvas" style="position: fixed; top: 0; left: 0; z-index: 99; pointer-events: none;"></canvas>
    <div class="bottom"><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">鲁ICP备2021031333号</a></div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
  },
  data () {
    return {
      particles: [],
      mp: 3000,
      angle: 0,
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
  mounted () {
    this.init()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    init() {
      // canvas init
      const canvas = this.$refs.homeCanvas;
      const ctx = canvas.getContext('2d');
      canvas.width = this.canvasWidth;
      canvas.height = this.canvasHeight;
      for (let i = 0; i < this.mp; i++) {
        this.particles.push({
          x: Math.random() * this.canvasWidth, // x-coordinate
          y: Math.random() * this.canvasHeight, // y-coordinate
          r: Math.random() * 3 + 1, // radius
          d: Math.random() * this.mp // density
        })
      }
      // Lets draw the flakes
      // animation loop
      this.timer = setInterval(() => {
        this.draw(ctx)
      }, 50);
    },
    draw(ctx) {
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

      ctx.fillStyle = 'rgba(230, 120, 140, 0.5)';
      /* ctx.fillStyle = "#FF0000"; */
      ctx.beginPath();
      for (let i = 0; i < this.mp; i++) {
        const p = this.particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      this.update();
    },
    update() {
      this.angle += 0.01;
      for (let i = 0; i < this.mp; i++) {
        const p = this.particles[i];
        p.y += Math.cos(this.angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(this.angle) * 2;
        if (p.x > this.canvasWidth || p.x < 0 || p.y > this.canvasHeight) {
          if (i % 3 > 0) { // 66.67% of the flakes
            this.particles[i] = { x: Math.random() * this.canvasWidth, y: -10, r: p.r, d: p.d };
          } else {
            if (Math.sin(this.angle) > 0) {
              this.particles[i] = { x: -5, y: Math.random() * this.canvasHeight, r: p.r, d: p.d };
            } else {
              this.particles[i] = { x: this.canvasWidth + 5, y: Math.random() * this.canvasHeight, r: p.r, d: p.d };
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
  height: calc(100vh - 36px);
  width: 100%;
  .body {
    position: absolute;
    top: calc(50% - 36px);
    left: calc(50% - 88px);
    transform: translate(-50%,-50%);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    div {
      font-size: 96px;
      width: 672px;
      text-align: left;
      .words-begin {
        background: linear-gradient(to right, #7f4fa4, #4765a6, #cd3464);
        -webkit-background-clip: text;
        color: transparent;
      }
      div {
        margin-left: 192px;
      }
      .words-end {
        width: 0;
        height: 120px;
        line-height: 120px;
        white-space: nowrap;
        border-right: 1px solid darkgray;
        background: linear-gradient(to right, #cd3464, #4765a6, #97f0fa);
        -webkit-background-clip: text;
        color: transparent;
        /*
        Steps(<number_of_steps>，<direction>)
        steps接收两个参数：第一个参数指定动画分割的段数；第二个参数可选，接受 start和 end两个值，指定在每个间隔的起点或是终点发生阶跃变化，默认为 end。
        */
        animation: write 3s steps(8) infinite,
        blink .6s steps(1) infinite;
        overflow: hidden;
      }
      @keyframes write {
        0% {
          width: 0;
        }

        100% {
          width: 770px;
        }
      }
      @keyframes blink {
        50% {
          /* transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值。 */
          border-color: transparent; /* #00000000 */
        }
      }
    }
  }
  .bottom {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: rgba(0, 0, 0, .5);
    font-size: 10px;
    a:hover{
      color: skyblue;
    }
  }
}
</style>
