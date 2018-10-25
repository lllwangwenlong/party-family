import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Admin from '@/views/Admin'
import Add from '@/views/Admin/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/layout',
      component: Layout,
      redirect: '/layout/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            title: '首页'
          }
        },
        {
          path: 'adminUser',
          name: 'adminUser',
          component: Admin,
          meta: {
            title: '管理员列表'
          }
        },
        {
          path: 'addAdminUser',
          name: 'addAdminUser',
          component: Add,
          meta: {
            title: '添加管理员'
          }
        }
      ]
    }
  ]
})
