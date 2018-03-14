import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import $ from 'jquery'
import store from './store/store.js'
import router from './router.js'
import directives from './plugin/direct.js'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'

Vue.use(VueRouter)
Vue.use(MuseUI)
Vue.use(directives)


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
