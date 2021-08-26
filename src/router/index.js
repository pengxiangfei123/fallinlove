/*
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-06-23 11:39:02
 * @LastEditTime: 2021-08-09 16:42:32
 * @LastEditors: 彭祥飞（pengXiangfei）
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'
import Manage from '@/components/Manage'

Vue.use(Router)

const VueRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Manage',
      component: Manage,
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: () => import('@/components/Home')
        },
        {
          path: '/Information',
          name: 'Information',
          component: () => import('@/components/Information')
        },
        {
          path: '/InformationDetall',
          name: 'InformationDetall',
          component: () => import('@/components/InformationDetall')
        },
        {
          path: '/Add',
          name: 'Add',
          component: () => import('@/components/Add')
        }
      ]
    }
  ]
})

export default VueRouter
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
