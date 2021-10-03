<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/blog/Layout';
import BlogList from './BlogList';
import BlogCategory from './BlogCategory';
export default {
  name: 'BlogArticle',
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
}
</script>

<style scoped>

</style>
