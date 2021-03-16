<template>
  <div class="main">
    <div class="nav-box" :class="{ home: isHome }">
      <div class="logo">
<!--        <router-link to="/home">小龙哥</router-link>-->
      </div>
      <div class="nav-list">
        <router-link v-for="nav in navList" :key="nav.url" @click.native="HomeShow(nav.url)" :to="nav.url">{{ nav.title }}</router-link>
      </div>
      <div
        class="nav-btn iconfont icon-nav-btn"
        @click="BtnShow = !BtnShow"
      ></div>
      <div class="btn-box" :class="{ show: BtnShow }">
        <div class="btn-logo">
          <div class="logo">
<!--            <router-link to="/home">小龙哥</router-link>-->
          </div>
        </div>
        <div
          class="btn-close iconfont icon-close-btn"
          @click="BtnShow = !BtnShow"
        ></div>
        <div class="btn-list" ref="nav">
          <router-link v-for="nav in navList" :key="nav.url" @click.native="HomeShow(nav.url)" :to="nav.url">{{ nav.title }}</router-link>
        </div>
      </div>
    </div>
    <div class="container" :class="{ containerTop: isHome }">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      BtnShow: false,
      isHome: true,
      navHeight: '',
      navList: [
        {
          url: '/home',
          title: 'Home'
        },
        {
          url: '/blog',
          title: 'Blog'
        },
        {
          url: '/essay',
          title: 'Essay'
        },
        {
          url: '/wishing',
          title: 'WishingWall'
        },
        {
          url: '/about',
          title: 'About'
        }
      ]
    }
  },
  computed: {
  },
  created () {
    this.isHome = this.$route.path === '/home'
  },
  methods: {
    HomeShow (btn) {
      this.isHome = btn === '/home'
    }
  },
  mounted () {
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">

.nav-box {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  align-items: center;
  background-color: rgba(47, 47, 47, 0.98);
  position: fixed;
  color: #fff;
  top: 0;

  //logo
  .logo {
    box-sizing: border-box;
    height: 66px;
    width: 236px;
    text-align: center;
    line-height: 66px;
    background-image: url("../assets/public/CDaLoong-logo.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 36px;
    cursor: pointer;

    a {
      box-sizing: border-box;
      text-decoration: none;
      color: inherit;
    }
  }

  .nav-list {
    display: none;
  }
  @media (min-width: 992px) {
    //导航列表
    .nav-list {
      box-sizing: border-box;
      width: 600px;
      height: 66px;
      line-height: 66px;
      font-size: 20px;
      display: flex;
      justify-content: space-around;
      margin-right: 66px;
      a {
        box-sizing: border-box;
        text-decoration: none;
        color: inherit;
      }
      a:hover {
        color: #24c3b5;
      }
      a.router-link-active {
        font-weight: bold;
      }
    }
  }

  //下拉导航按钮
  .nav-btn {
    font-size: 20px;
    position: absolute;
    right: 66px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: none;
  }
  .nav-btn:hover {
    color: #24c3b5;
 }
  @media (max-width: 992px) {
    .nav-btn{
      display: block;
    }
  }
  //下拉导航页面
  .btn-box {
    width: 300px;
    height: 100vh;
    background-color: skyblue;
    position: fixed;
    top: 0;
    right: 0;
    margin-right: -320px;
    transition: margin-right 0.3s;
    box-sizing: border-box;
    // 侧边栏logo
    .btn-logo {
      width: 100%;
      height: 150px;
      background: rgba(47, 47, 47, 0.98);
      overflow: hidden;

      .logo {
        margin: 40px auto;
      }
    }
    //侧边栏导航
    .btn-list {
      a {
        display: block;
        text-decoration: none;
        color: inherit;
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-bottom: 1px solid #000;
        box-sizing: border-box;
      }
      a:last-child {
        border: none;
      }
    }
    //关闭按钮
    .btn-close {
      font-size: 36px;
      position: absolute;
      top: 0;
      cursor: pointer;
    }
    .btn-close:hover{
      color: #24c3b5;
    }
  }
  .show {
    margin-right: 0;
  }
}
// 主页导航
.nav-box.home {
  height: 100px;
  background-color: #fff;
  .nav-btn{
    color: #000;
  }
  .nav-btn:hover {
    color: #24c3b5;
  }

  @media (min-width: 992px) {
    //导航列表
    .nav-list {
      color: #000;
      a {
        box-sizing: border-box;
        text-decoration: none;
        color: inherit;
      }
      a:hover {
        color: #24c3b5;
      }
      a.router-link-active {
        font-weight: bold;
      }
    }
  }
}

.container {
  width: 100%;
  height: 1000px;
  margin-top: 80px;
}
.containerTop {
  margin-top: 100px;
}
</style>
