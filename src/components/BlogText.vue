<template>
  <div>
    <div class="title">{{title}}</div>
    <ul class="content">
      <li v-for="(item, index) in text" :key="item.title">
        <div class="head">
          <span class="title" @click="watchBtn(index)">{{item.title}}</span>
          <span class="time">发布于 {{item.time}}</span>
        </div>
        <p class="content">{{item.content}}</p>
        <div class="foot">
          <div>
            <span class="tag">[{{item.tag}}]</span>
            <span class="btn"><el-button type="text" @click="watchBtn(index)">阅读全文<i class="el-icon-d-arrow-right"></i></el-button></span>
          </div>
          <div>
            <span class="watch"><i class="iconfont icon-watched"><span> {{item.watch}}</span></i></span>
            <span class="star"><el-button type="text" @click="iconClassBtn(index)"><i :class="{'el-icon-star-on': iconClass, 'el-icon-star-off': !iconClass}"><span> {{item.star}}</span></i></el-button></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogText',
  props: {
    title: String
  },
  data () {
    return {
      text: [{
        title: 'http协议中的缓存',
        content: '在一个C/S结构中，最基本的缓存分为两种： 客户端缓存 服务器缓存 本文仅讨论客户端缓存 所谓客户端缓存，顾名思义，是将某一次的响应结果保存在客户端（比如浏览器）中，而后续的请求仅需要从缓存中读取即可，极大的降低了服务器的处理压力。',
        tag: '网络',
        time: '2020/2/1',
        star: 1,
        watch: 1
      }],
      iconClass: false
    }
  },
  methods: {
    watchBtn (index) {
      this.text[index].watch++
    },
    iconClassBtn (index) {
      if (!this.iconClass) {
        this.iconClass = true
        this.text[index].star++
      } else {
        this.iconClass = false
        this.text[index].star--
      }
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  height: 120px;
  font-size: 36px;
  line-height: 120px;
  color: #666;
  padding-left: 36px;
}
.content {
  li {
    padding: 20px 0;
    margin: 0 36px;
    height: 200px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      .title {
        padding: 0;
        height: 60px;
        line-height: 60px;
      }
      .title:hover {
        color: #2479cc;
        cursor: pointer;
      }
      .time {
        font-size: 14px;
        color: #999;
        width: 150px;
      }
    }
    .foot {
      height: 36px;
      line-height: 36px;
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      .btn {
        margin-left: 24px;
      }
      .watch, .star {
        margin-right: 20px;
        i {
          color: #2479cc;
          span {
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
