<template>
  <div class="site-aside-container">
    <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" />
    <h1 class="title">DaLoong的博客</h1>
    <Menu />
    <Contact />
    <p class="footer">
      鲁ICP备2021031333号
    </p>
  </div>
</template>

<script>
import Menu from './Menu';
import Contact from './Contact';
export default {
  components: {
    Menu,
    Contact,
  },
};
</script>

<style lang="scss" scoped>
.site-aside-container {
  width: 100%;
  height: 100%;
  background: $blogDark;
  padding: 20px 0;
  box-sizing: border-box;
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1em;
  margin-top: 6px;
  color: #fff;
  text-align: center;
}
</style>
