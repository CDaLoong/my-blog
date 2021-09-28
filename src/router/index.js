import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL,
})

export default router
