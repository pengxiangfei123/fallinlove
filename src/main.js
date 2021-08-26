/*
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-06-23 11:39:02
 * @LastEditTime: 2021-07-07 10:55:14
 * @LastEditors: 彭祥飞（pengXiangfei）
 * @Description:
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueDND from 'awe-dnd'
// Vue.use(VueDND)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
