import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/NavList/HomePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/blog',
    component: () => import('../views/NavList/Blog')
  },
  {
    path: '/essay',
    component: () => import('../views/NavList/Essay')
  },
  {
    path: '/WishingWall',
    component: () => import('../views/NavList/WishingWall')
  },
  {
    path: '/about',
    component: () => import('../views/NavList/AboutMe')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
