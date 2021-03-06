import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
// import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// import 'swiper/dist/css/swiper.css'

require('swiper/dist/css/swiper.css')

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 2.x.x */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })
