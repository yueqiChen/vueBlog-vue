// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import axios from 'axios'

import "./axios"
import "./permission"

// 全局注册
import mavonEditor from 'mavon-editor'

import 'mavon-editor/dist/css/index.css'
import "element-ui/lib/theme-chalk/index.css"


Vue.use(Element)
Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
