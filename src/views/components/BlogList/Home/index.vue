<template>
  <div class="home-container">
    <html-element class="html-element" />
    <key class="key" />
  </div>
<!--  <div-->
<!--    v-loading="loading"-->
<!--    class="home-container"-->
<!--    ref="container"-->
<!--    @wheel="handleWheel"-->
<!--  >-->
<!--    <ul-->
<!--      class="carousel-container"-->
<!--      :style="{-->
<!--        marginTop,-->
<!--      }"-->
<!--      @transitionend="handleTransitionEnd"-->
<!--    >-->
<!--      <li v-for="item in data" :key="item.id">-->
<!--        <CarouselItem :carousel="item" />-->
<!--      </li>-->
<!--    </ul>-->
<!--    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">-->
<!--      <icon type="arrowsUp" />-->
<!--    </div>-->
<!--    <div-->
<!--      v-show="index < data.length - 1"-->
<!--      @click="switchTo(index + 1)"-->
<!--      class="icon icon-down"-->
<!--    >-->
<!--      <icon type="arrowsDown" />-->
<!--    </div>-->
<!--    <ul class="indicator">-->
<!--      <li-->
<!--        v-for="(item, i) in data"-->
<!--        :key="item.id"-->
<!--        :class="{-->
<!--          active: i === index,-->
<!--        }"-->
<!--        @click="switchTo(i)"-->
<!--      ></li>-->
<!--    </ul>-->
<!--  </div>-->
</template>

<script>
// import CarouselItem from './Carouselitem';
// import { mapState } from 'vuex';
import Key from './Key'
import HtmlElement from './HtmlElement'

export default {
  name: 'BlogHome',
  components: {
    // CarouselItem,
    Key,
    HtmlElement
  },
  data() {
    return {
      // index: 0, // 当前显示的是第几张轮播图
      // containerHeight: 0, // 整个容器的高度
      // switching: false, // 是否正在切换中
    };
  },
  created() {
    // this.$store.dispatch('banner/fetchBanner');
  },
  mounted() {
    // this.containerHeight = this.$refs.container.clientHeight;
    // window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    // window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    // marginTop() {
    //   return -this.index * this.containerHeight + 'px';
    // },
    // ...mapState('banner', ['loading', 'data']),
  },
  methods: {
    // 切换轮播图
    // switchTo(i) {
    //   this.index = i;
    // },
    // handleWheel(e) {
    //   if (this.switching) {
    //     return;
    //   }
    //   if (e.deltaY < -5 && this.index > 0) {
    //     // 往上滚动
    //     this.switching = true;
    //     this.index--;
    //   } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
    //     // 往下滚动
    //     this.switching = true;
    //     this.index++;
    //   }
    // },
    // handleTransitionEnd() {
    //   this.switching = false;
    // },
    // handleResize() {
    //   this.containerHeight = this.$refs.container.clientHeight;
    // },
  },
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: paleturquoise;
//  ul {
//    margin: 0;
//    list-style: none;
//    padding: 0;
//  }
//}
//.carousel-container {
//  width: 100%;
//  height: 100%;
//  transition: 500ms;
//  li {
//    width: 100%;
//    height: 100%;
//  }
//}
//.icon {
//  @include self-center();
//  font-size: 30px;
//  $gap: 25px;
//  color: $gray;
//  cursor: pointer;
//  transform: translateX(-50%);
//  &.icon-up {
//    top: $gap;
//    animation: jump-up 2s infinite;
//  }
//  &.icon-down {
//    top: auto;
//    bottom: $gap;
//    animation: jump-down 2s infinite;
//  }
//  $jump: 5px;
//  @keyframes jump-up {
//    0% {
//      transform: translate(-50%, $jump);
//    }
//    50% {
//      transform: translate(-50%, -$jump);
//    }
//    100% {
//      transform: translate(-50%, $jump);
//    }
//  }
//  @keyframes jump-down {
//    0% {
//      transform: translate(-50%, -$jump);
//    }
//    50% {
//      transform: translate(-50%, $jump);
//    }
//    100% {
//      transform: translate(-50%, -$jump);
//    }
//  }
//}
//.indicator {
//  @include self-center();
//  transform: translateY(-50%);
//  left: auto;
//
//  right: 20px;
//  li {
//    width: 7px;
//    height: 7px;
//    border-radius: 50%;
//    background: $words;
//    cursor: pointer;
//    margin-bottom: 10px;
//    border: 1px solid #fff;
//    box-sizing: border-box;
//    &.active {
//      background: #fff;
//    }
//  }
}
@media (max-height: 1080px) {
  .key {
    display: none;
  }
}
</style>
