<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
import { icon } from '../config'

export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    // 图标类样式
    fontClass() {
      return (icon.find(item => this.type === item.name)).font_class
    }
  }
}
</script>

<style lang="scss" scoped>
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
