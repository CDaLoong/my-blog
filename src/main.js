import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import './assets/iconfont.css'
import Icon from './components/Icon'
import Avatar from './components/Avatar'

import showMessage from './utils/showMessage';

Vue.config.productionTip = false
Vue.component(Icon.name, Icon)
Vue.component(Avatar.name, Avatar)
Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
