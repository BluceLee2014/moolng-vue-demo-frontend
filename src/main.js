// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import But from './components/mybutton.js'

import HttpClient from './components/utils/HttpClient'

// import MyRender from './components/MyRender.vue'

Vue.config.productionTip = false

Vue.use(But)
Vue.use(HttpClient)
// Vue.use(MyRender)

Vue.use(ViewUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
