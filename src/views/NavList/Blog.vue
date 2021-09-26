<template>
  <div class="blog-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        中间主区域
      </template>
      <template #right>
        右边区域
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/blog/Layout';
import SiteAside from '@/components/blog/SiteAside';
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style lang="scss" scoped>
.blog-container {
  width: 100%;
  height: 100%;
  //@include self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
