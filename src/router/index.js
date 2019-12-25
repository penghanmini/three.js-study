import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout'
import introductionRouter from './introduction/introductionRouter'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: '/',
          name: 'index',
          component: index,
          meta:{
            title:"首页",
          }
        },
        ...introductionRouter,
      ],
    }
  ]
})
