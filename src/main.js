import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.scss'
import './assets/iconfont.css'
import Icon from './components/Icon'
import Avatar from './components/Avatar'
import './mock'
import './eventBus'

import showMessage from './utils/showMessage';

import vLoading from './directives/loading';
import vLazy from './directives/lazy';

Vue.config.productionTip = false
Vue.component(Icon.name, Icon)
Vue.component(Avatar.name, Avatar)

Vue.prototype.$showMessage = showMessage;

// 注册全局指令
Vue.directive('loading', vLoading);
Vue.directive('lazy', vLazy);

// 获取全局数据
store.dispatch('setting/fetchSetting')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
