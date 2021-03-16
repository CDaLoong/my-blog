<template>
  <div class="main">
    <div class="carousel">
      <el-carousel :interval="4000" height="calc(100vh - 240px)">
        <el-carousel-item v-for="(item, index) in imageUrl" :key="index">
          <img :src="item.url" :alt="item.title" style="height: calc(100vh - 240px);">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      imageUrl: []
    }
  },
  mounted () {
    for (let i = 1; i <= 6; i++) {
      this.imageUrl.push({ url: require(`../../assets/public/images/${i}.png`), title: `${i}.png` })
    }
    console.log(this.imageUrl)
  }
}
</script>

<style scoped lang="scss">
.main {
  padding-top: 36px;
  text-align: center;
  .carousel {
    display: inline-block;
    width: 66%;
  }
}
</style>
