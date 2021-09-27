<template>
  <div class="main">
    <div class="carousel">
      <el-carousel :interval="4000" height="calc(100vh - 240px)">
        <el-carousel-item v-for="(item, index) in imageUrl" :key="index">
          <img :src="item.url" :alt="item.title" style="height: calc(100vh - 240px);">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="editor">
      <el-button type="text" @click="dialogVisible = true">写博客</el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="handleClose">
        <write-blog />
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import WriteBlog from '@/components/WriteBlog'
export default {
  name: 'HomePage',
  components: {
    WriteBlog
  },
  data () {
    return {
      imageUrl: [],
      dialogVisible: false
    }
  },
  mounted () {
    // TODO: 暂时使用一张图
    for (let i = 1; i <= 6; i++) {
      this.imageUrl.push({ url: require('../../assets/public/images/1.png'), title: `${i}.png` })
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
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
