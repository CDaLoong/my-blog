<template>
  <div class="main">
    <canvas ref="homeCanvas" style="position: fixed; top: 0; left: 0; pointer-events: none; z-index: -1"></canvas>
    <div class="body">
      <div>
        <p class="words-begin">与君横盘立键,</p>
        <div><p class="words-end">敲出世间繁华！</p></div>
      </div>
    </div>
    <div class="bottom"><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">鲁ICP备2021031333号</a></div>
  </div>
</template>

<script>
import { FlowerList } from '../canvas/Flower';

export default {
  name: 'HomePage',
  components: {
  },
  data () {
    return {
      canvasCtx: null,
      flowers: null,
      timer: null
    }
  },
  mounted () {
    this.init();
    window.onresize = this.update;
  },
  methods: {
    init() {
      // canvas init
      const canvas = this.$refs.homeCanvas;
      const ctx = canvas.getContext('2d');
      this.canvasCtx = ctx;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const flowerList = new FlowerList(199, ctx, window.innerWidth, window.innerHeight);
      flowerList.init();
      this.flowers = flowerList;
      this.move();
    },
    move() {
      this.canvasCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < this.flowers.length; i++) {
        this.flowers.flowers[i].draw();
      }
      window.requestAnimationFrame(this.move);
    },
    update() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$refs.homeCanvas.width = window.innerWidth;
        this.$refs.homeCanvas.height = window.innerHeight;
        for (let i = 0; i < this.flowers.length; i++) {
          this.flowers.flowers[i].width = window.innerWidth;
          this.flowers.flowers[i].height = window.innerHeight;
        }
        clearTimeout(this.timer);
      }, 200)
    }
  },
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
