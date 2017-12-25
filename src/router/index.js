import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import food_review from '@/components/food_review'
import queue from '@/components/queue'
import forum from '@/components/forum'
import like from '@/components/like'
import Element from 'element-ui'
Vue.use(Element, { size: 'small' })
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login_component',
      component: login
    },
    {
      path: '/home',
      name: 'home_component',
      component: home
    },
    {
      path: '/Food_review',
      name: 'foodreview_component',
      component: food_review
    },
    {
      path: '/queue',
      name: 'queue_component',
      component: queue
    },
    {
      path: '/forum',
      name: 'forum_component',
      component: forum

    },
    {
      path: '/like',
      name: 'like_component',
      component: like

    }
  ]
})
