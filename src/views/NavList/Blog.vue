<template>
  <el-row>
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :class="{ left: true }">
      <el-card shadow="never" :body-style="{ padding: '48px', textAlign: 'center', background: '#202020', maxHeight: '288px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div class="my-text">
          <span class="name">大龙的博客</span>
          <p class="bottom">人生不止有技术</p>
        </div>
      </el-card>
      <div class="contentBtn">
        <ul>
          <li v-for="item in btns" :key="item.name"><el-button :icon="item.icon" :class="{ btn: true, click: item.click }" @click="contentBtn(item)">{{item.name}}</el-button></li>
        </ul>
      </div>
      <div class="linkBtn">
        <span><a href="" class="iconfont icon-github"></a></span>
        <span><a href="" class="el-icon-message"></a></span>
      </div>
    </el-col>
    <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" :class="{ right: true }">
      <blog-text :title="textTitle" />
    </el-col>
  </el-row>
</template>

<script>
import BlogText from '@/components/BlogText'
export default {
  name: 'Blog',
  components: {
    BlogText
  },
  data () {
    return {
      btns: [{
        name: '首页',
        icon: 'el-icon-house',
        click: true
      }, {
        name: '前端',
        icon: 'el-icon-mobile-phone',
        click: false
      }, {
        name: '网络',
        icon: 'el-icon-monitor',
        click: false
      }, {
        name: '阅读',
        icon: 'el-icon-reading',
        click: false
      }, {
        name: '生活',
        icon: 'el-icon-coffee-cup',
        click: false
      }],
      textTitle: '首页'
    }
  },
  methods: {
    contentBtn (item) {
      this.btns.forEach(e => {
        e.click = false
      })
      item.click = item.click === false
      this.textTitle = item.name
    }
  }
}
</script>

<style scoped lang="scss">

// 左边部分样式
.left{
  height: calc(100vh - 80px);
  position: fixed;
  left: 0;
  background: #202020;
  box-sizing: inherit;
  .image {
    width: 80%;
    display: block;
    border-radius: 50%;
    display: inline-block;
  }
  .my-text {
    margin-top: 20px;
    .name{
      color: #ccc;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
    }
    .bottom {
      margin-top: 13px;
      font-size: 14px;
      height: 18px;
      color: #666;
      line-height: 18px;
    }
  }
  /deep/.is-never-shadow {
    border: none;
    border-radius: 0;
  }
  .contentBtn {
    width: 100%;
    .btn {
      width: 100%;
      height: 60px;
      border-radius: 0;
      color: #ccc;
      background: #202020;
      border: none;
      font-size: 16px;
    }
    .btn:hover {
      color: #fff;
    }
    .click {
      background: #2479cc;
    }
  }
  .linkBtn {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 36px;
    span {
      width: 28px;
      height: 28px;
      line-height: 28px;
      margin: 0 6px;
      display: inline-block;
      border-radius: 50%;
      color: #ccc;
      border: 1px solid #ccc;
      a:hover {
        text-decoration: none;
        color: #fff;
      }
    }
  }
}

.right {
  position: absolute;
  right: 0;
  box-sizing: inherit;
}
</style>
