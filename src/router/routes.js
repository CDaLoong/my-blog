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

export default [
  { name: 'HomePage', path: '', component: HomePage, },
  { name: 'About', path: '/about', component: About, },
  {
    name: 'Blog',
    path: '/blog',
    redirect: '/blog/home',
    component: Blog,
    children: [
      { name: 'BlogHome', path: 'home', component: BlogHome },
      { name: 'BlogAbout', path: 'about', component: BlogAbout },
      { name: 'BlogArticle', path: 'article', component: BlogArticle },
      { name: 'CategoryBlogArticle', path: '/article/cate/:categoryId', component: BlogArticle },
      { name: 'BlogDetail', path: '/article/:id', component: BlogDetail },
      { name: 'BlogProject', path: 'project', component: BlogProject },
      { name: 'BlogMessage', path: 'message', component: BlogMessage }
    ]
  },
  { name: 'Essay', path: '/essay', component: Essay, },
  { name: 'WishingWall', path: '/wishing', component: WishingWall, },
];
