<template>
  <div class="message-area-container">
    <div class="message-top">
      <h1>添加评论</h1>
    </div>
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from './DataForm';
import DataList from './DataList';
export default {
  name: 'MessageArea',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: relative;
  height: 100px;
}
.message-top {
  margin-top: 80px;

  h1 {
    margin: 20px 0;
    height: 36px;
    line-height: 36px;
    font-size: 24px;
  }
}
</style>
