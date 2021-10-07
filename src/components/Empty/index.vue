<template>
  <div class="empty-container">
    <icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    text: {
      type: String,
      default: '无数据',
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-container {
  @include self-center();
  color: $gray;
  text-align: center;
}
.icon-container {
  font-size: 72px;
}
</style>
