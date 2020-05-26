import Vue from 'vue'
import App from './App.vue'
// 导入路由对象
import router from '@assets/router/index'
import Router from 'vue-router'
import store from '@assets/store/index'

Vue.config.productionTip = false

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
new Vue({
	// 挂载路由对象
	router,
	store,
  render: h => h(App),
}).$mount('#app')
