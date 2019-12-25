// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import * as THREE from 'three'

import 'element-ui/lib/theme-chalk/index.css'

import Highlight from './plugins/highlight'; // from 路径是highlight.js的路径，纯属自定义
Vue.use(Highlight);

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(THREE)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
