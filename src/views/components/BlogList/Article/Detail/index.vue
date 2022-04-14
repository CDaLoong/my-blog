<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail v-if="data" :blog="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC v-if="data" :toc="data.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import { getBlog } from '@/api/testApi/blog';
import Layout from '@/components/blog/Layout';
import BlogDetail from './BlogDetail';
import BlogTOC from '../BlogTOC';
import BlogComment from '../BlogComment';
import mainScroll from '@/mixins/mainScroll.js';
import { titleController } from '@/utils';

export default {
  name: 'Detail',
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  data() {
    return {
      isLoading: false,
      data: null,
      checkPath: /^\/article\/\w+$/,
    };
  },
  computed: {
    param() {
      if (this.$route.params.id) return this.$route.params.id;
      return null;
    }
  },
  mixins: [mainScroll('mainContainer')],
  updated() {
    const hash = location.hash;
    location.hash = '';
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    async fetchData() {
      this.isloading = true;
      console.log(123, this.$route.params.id)
      const resp = await getBlog(this.$route.params.id);
      if (!resp) {
        // 文章不存在，暂跳404，后续完善
        this.$router.push('/404');
        return;
      }
      titleController.setRouteTitle(resp.title);
      this.data = resp;
      this.isloading = false;
    },
  },
  watch: {
    param: {
      handler(newVal, oldVal) {
        if (newVal && this.checkPath.exec(this.$route.path) !== null && newVal !== oldVal) this.fetchData()
      },
      immediate: true,
      deep: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
