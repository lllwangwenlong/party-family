import Vue from 'vue'
import Router from 'vue-router'

const components = {
  HomePage : () => import('@/components/HomePage'),
  Notice : () => import('@/components/Notice'),
  Personal : () => import('@/components/Personal'),
  Login: () => import('@/components/Login'),
  NewsList: () => import('@/components/NewsList'),
  NewDetail: () => import('@/components/NewDetail'),
  PhotoAction: () => import('@/components/PhotoAction'),
  Home: () => import('@/views/home/index'),
  MoLife: () => import('@/views/mobile-life/index'),
  MewsShow: () => import('@/views/news-show/index'),
  SwiDetail: () => import('@/views/swiper-detail/index'),
  PartyAction: () => import('@/views/party-interraction/index'),
  UserInfo: () => import('@/views/userInfo/index'),
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/homePage',
      component: components.Home,
      children: [
        {
          path: 'homePage',
          name: 'homePage',
          component: components.HomePage,
        },
        {
          path: 'notice',
          name: 'notice',
          meta: {
            title: '通知'
          },
          component: components.Notice
        },
        {
          path: 'personal',
          name: 'personal',
          meta: {
            title: '我的党建'
          },
          component: components.Personal
        },
      ]
    },
    {
      path: '/swiperdetail',
      name: 'swiperdetail',
      meta: {
        title: '随时随地学'
      },
      component: components.SwiDetail

    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: components.Login
    },
    {
      path: '/moblife',
      name: 'moblife',
      meta: {
        title: '党员与组织'
      },
      component: components.MoLife
    },
    {
      path: '/partyaction',
      name: 'partyaction',
      meta: {
        title: '党员云互动'
      },
      component: components.PartyAction,
    },
    {
      path: '/newsshow',
      name: 'newsshow',
      meta: {
        title: '新闻显示'
      },
      redirect: '/newsshow/newslist',
      component: components.MewsShow,
      children: [
        {
          path: 'newslist',
          name: 'newslist',
          meta: {
            title: '新闻列表'
          },
          component: components.NewsList,
        },
        {
          path: 'photoaction',
          name: 'photoaction',
          meta: {
            title: '图片展览'
          },
          component: components.PhotoAction,
        },
        {
          path: 'newdetail',
          name: 'newdetail',
          meta: {
            title: '新闻详情'
          },
          component: components.NewDetail,
        },
      ]
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      meta: {
        title: '个人信息'
      },
      component: components.UserInfo,
    },
  ]
})
