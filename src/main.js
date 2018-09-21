import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { all } from './mixin/mixin'

Vue.config.productionTip = false
Vue.mixin(all)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')