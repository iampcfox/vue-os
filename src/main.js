import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { all } from './mixin/mixin'

Vue.config.productionTip = false
Vue.mixin(all)

import Grid from 'vue-js-grid'
import * as VueWindow from '@hscmap/vue-window'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import * as VueMenu from '@hscmap/vue-menu'

Vue.use(VueMenu)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(VueWindow)
Vue.use(Grid)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')