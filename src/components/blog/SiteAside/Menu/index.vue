<template>
  <nav class="menu-container">
    <a
      v-for="item in items"
      :key="item.link"
      :href="item.link"
      :class="{
        selected: isSelected(item),
      }"
    >
      <Icon :type="item.icon" style="margin-right: 10px" />
      <span>{{ item.title }}</span>
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          link: '/',
          title: '首页',
          icon: 'home',
        },
        {
          link: '/blog',
          title: '文章',
          icon: 'blog',
          startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          link: '/about',
          title: '关于我',
          icon: 'about',
        },
        {
          link: '/project',
          title: '项目&效果',
          icon: 'code',
        },
        {
          link: '/message',
          title: '留言板',
          icon: 'list',
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      const link = item.link.toLowerCase() // 菜单的链接地址
      const curPathname = location.pathname.toLowerCase() // 当前浏览器的访问路径
      if (item.startWith) {
        return curPathname.startsWith(link);
      } else {
        return curPathname === link;
      }
    },
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
