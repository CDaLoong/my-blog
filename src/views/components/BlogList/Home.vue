<template>
  <div>
    <h2>博客主页</h2>
    <button @click="btnTest">点我弹出消息</button>
  </div>
</template>

<script>
export default {
  name: 'BlogHome',
  methods: {
    btnTest() {
      this.$showMessage({
        content: '测试一下',
        duration: 3000,
      })
    }
  }
}
</script>

<style scoped>

</style>
