<template>
  <nav class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.name }"
      active-class="selected"
      exact-active-class=""
    >
      <Icon :type="item.icon" style="margin-right: 10px" />
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'BlogHome',
          title: '首页',
          icon: 'home',
          exact: true,
        },
        {
          name: 'BlogArticle',
          title: '文章',
          icon: 'blog',
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: 'BlogAbout',
          title: '关于我',
          icon: 'about',
          exact: true,
        },
        {
          name: 'BlogProject',
          title: '项目&效果',
          icon: 'code',
          exact: true,
        },
        {
          name: 'BlogMessage',
          title: '留言板',
          icon: 'list',
          exact: true,
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.menu-container {
  color: $gray;
  margin: 20px 0 0 0;
  a {
    &.selected {
      background: darken($words, 3%);
    }
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    &:hover {
      color: #fff;
    }
  }
}
</style>
