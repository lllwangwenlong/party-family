import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Admin from '@/views/Admin'
import addAdmin from '@/views/Admin/add'
import New from '@/views/News'
import addNews from '@/views/News/add'

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
          component: addAdmin,
          meta: {
            title: '添加管理员'
          }
        },
        {
          path: 'news',
          name: 'news',
          component: New,
          meta: {
            title: '新闻管理'
          }
        },
        {
          path: 'addNews',
          name: 'addNews',
          component: addNews,
          meta: {
            title: '添加新闻'
          }
        }
      ]
    }
  ]
})
