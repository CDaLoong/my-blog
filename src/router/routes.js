import HomePage from '@/views/NavList/HomePage';
import About from '@/views/NavList/About';
import Blog from '@/views/NavList/Blog';
import Essay from '@/views/NavList/Essay';
import WishingWall from '@/views/NavList/WishingWall';

import BlogHome from '@/views/components/BlogList/Home/index';
import BlogAbout from '@/views/components/BlogList/About/index';
import BlogArticle from '@/views/components/BlogList/Article/index';
import BlogProject from '@/views/components/BlogList/Project/index';
import BlogMessage from '@/views/components/BlogList/Message/index';
import BlogDetail from '@/views/components/BlogList/Article/Detail/index';

import NotFound from '@/views/NotFound.vue';

export default [
  { name: 'HomePage', path: '', component: HomePage, meta: { title: '首页' } },
  { name: 'About', path: '/about', component: About, meta: { title: '关于我' } },
  {
    name: 'Blog',
    path: '/blog',
    redirect: '/blog/home',
    component: Blog,
    children: [
      { name: 'BlogHome', path: 'home', component: BlogHome, meta: { title: '博客' } },
      { name: 'BlogAbout', path: 'about', component: BlogAbout },
      { name: 'BlogArticle', path: 'article', component: BlogArticle },
      { name: 'CategoryBlogArticle', path: '/article/cate/:categoryId', component: BlogArticle },
      { name: 'BlogDetail', path: '/article/:id', component: BlogDetail },
      { name: 'BlogProject', path: 'project', component: BlogProject },
      { name: 'BlogMessage', path: 'message', component: BlogMessage }
    ],
  },
  { name: 'Essay', path: '/essay', component: Essay, meta: { title: '随记' } },
  { name: 'WishingWall', path: '/wishing', component: WishingWall, meta: { title: '许愿墙' } },
  { name: 'NotFound', path: '*', component: NotFound, },
];
