<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto;
    //background-color: #000;
  }
  .left {
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>
