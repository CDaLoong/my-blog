<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>
    <Menu />
    <Contact v-if="data" />
    <p v-if="data" class="footer">
      {{ data.icp }}
    </p>
  </div>
</template>

<script>
import Menu from './Menu';
import Contact from './Contact';
import { mapState } from 'vuex';
export default {
  components: {
    Menu,
    Contact,
  },
  computed: mapState('setting', ['data']),
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
