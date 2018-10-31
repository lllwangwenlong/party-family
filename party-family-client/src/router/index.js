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
  MewsShow: () => import('@/views/News-show/index'),
  SwiDetail: () => import('@/views/swiper-detail/index'),
  InterractionShows: () => import('@/views/interractionshows/index'),
  PartyAction: () => import('@/views/party-interraction/index'),
  InterractionDetail: () => import('@/views/interraction-detail/index'),
  UserInfo: () => import('@/views/userInfo/index'),
  EditUserInfo: () => import('@/views/edituserInfo/index'),
  ChangePassword: () => import('@/views/change-password/index'),
  PerosnalLhjf: () => import('@/views/perosnal-lhjf/index'),
  ScoreDetail: () => import('@/views/score-detail/index'),
  FindOrg: () => import('@/views/findorg/index'),
  PartyToday: () => import('@/views/party-today/index'),
  Demo: () => import('@/views/demo/index'),
  Second: () => import('@/views/demo/secondPage'),

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
          meta: {
            type: 0
          },
          component: components.HomePage,
        },
        {
          path: 'notice',
          name: 'notice',
          meta: {
            title: '通知',
            type: 2
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
      path: '/demo',
      name: 'demo',
      component: components.Demo,
    },
    {
      path: '/second',
      name: 'second',
      component: components.Second,
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
      path: '/partyactionshows',
      name: 'partyactionshows',
      meta: {
        title: '党员云互动'
      },
      component: components.InterractionShows,
      redirect: '/partyactionshows/partyaction',
      children: [
        {
          path: 'partyaction',
          name: 'partyaction',
          meta: {
            title: '党员云互动'
          },
          component: components.PartyAction,
        },
        {
          path: 'interractiondetail',
          name: 'interractiondetail',
          meta: {
            title: '党员云互动'
          },
          component: components.InterractionDetail,
        }
      ]
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
    {
      path: '/edituserInfo',
      name: 'edituserInfo',
      meta: {
        title: '修改个人信息'
      },
      component: components.EditUserInfo,
    },
    {
      path: '/perosnallhjf',
      name: 'perosnallhjf',
      meta: {
        title: '个人量化积分'
      },
      component: components.PerosnalLhjf,
    },
    {
      path: '/scoredtail',
      name: 'scoredtail',
      meta: {
        title: '积分明细'
      },
      component: components.ScoreDetail,
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      meta: {
        title: '修改密码'
      },
      component: components.ChangePassword,
    },
    {
      path: '/findorg',
      name: 'findorg',
      meta: {
        title: '流动党员找组织'
      },
      component: components.FindOrg,
    },
    {
      path: '/partytoday',
      name: 'partytoday',
      meta: {
        title: '党史上的今天'
      },
      component: components.PartyToday,
    },
  ]
})
