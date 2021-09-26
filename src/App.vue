<template>
  <div id="app">
    <blog-main />
  </div>
</template>

<script>
import BlogMain from './views/BlogMain'

export default {
  name: 'App',
  components: {
    BlogMain
  }
}
</script>

<style scoped lang="scss">
#app {
  height: 100%;
}
</style>
