import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import './assets/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Icon from './components/Icon'
import Avatar from './components/Avatar'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(Icon.name, Icon)
Vue.component(Avatar.name, Avatar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
