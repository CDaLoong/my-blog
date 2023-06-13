// import HomePage from '@/views/NavList/HomePage';
// import About from '@/views/NavList/About';
// import Blog from '@/views/NavList/Blog';
// import Essay from '@/views/NavList/Essay';
// import WishingWall from '@/views/NavList/WishingWall';

// import BlogHome from '@/views/components/BlogList/Home/index';
// import BlogAbout from '@/views/components/BlogList/About/index';
// import BlogArticle from '@/views/components/BlogList/Article/index';
// import BlogProject from '@/views/components/BlogList/Project/index';
// import BlogMessage from '@/views/components/BlogList/Message/index';
// import BlogDetail from '@/views/components/BlogList/Article/Detail/index';

import NotFound from '@/views/NotFound.vue';

export default [
  { name: 'HomePage', path: '', component: () => import('@/views/NavList/HomePage'), meta: { title: '首页' } },
  { name: 'About', path: '/about', component: () => import('@/views/NavList/About'), meta: { title: '关于我' } },
  {
    name: 'Blog',
    path: '/blog',
    redirect: '/blog/home',
    component: () => import('@/views/NavList/Blog'),
    children: [
      { name: 'BlogHome', path: 'home', component: () => import('@/views/components/BlogList/Home/index'), meta: { title: '博客' } },
      { name: 'BlogAbout', path: 'about', component: () => import('@/views/components/BlogList/About/index') },
      { name: 'BlogArticle', path: 'article', component: () => import('@/views/components/BlogList/Article/index') },
      { name: 'CategoryBlogArticle', path: '/article/cate/:categoryId', component: () => import('@/views/components/BlogList/Article/index') },
      { name: 'BlogDetail', path: '/article/:id', component: () => import('@/views/components/BlogList/Article/Detail/index') },
      { name: 'BlogProject', path: 'project', component: () => import('@/views/components/BlogList/Project/index') },
      { name: 'BlogMessage', path: 'message', component: () => import('@/views/components/BlogList/Message/index') }
    ],
  },
  { name: 'Essay', path: '/essay', component: () => import('@/views/NavList/Essay'), meta: { title: '随记' } },
  { name: 'WishingWall', path: '/wishing', component: () => import('@/views/NavList/WishingWall'), meta: { title: '许愿墙' } },
  { name: 'NotFound', path: '*', component: NotFound, },
];
