<template>
  <div class="blog-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <keep-alive>
          <router-view />
        </keep-alive>
      </template>
      <template #right>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from '@/components/blog/Layout';
import SiteAside from '@/components/blog/SiteAside';
import ToTop from '@/components/ToTop';
export default {
  name: 'Blog',
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="scss" scoped>
.blog-container {
  width: 100%;
  height: 100%;
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
