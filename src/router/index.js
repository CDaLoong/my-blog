import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/NavList/HomePage')
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
    path: '/vow',
    component: () => import('../views/NavList/VowWall')
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
