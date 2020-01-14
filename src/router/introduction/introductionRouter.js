/**
 * 作者: penghan
 * 日期: 2019-12-24
 * 描述: 入门
 */

import createScene from '@/pages/introduction/createScene'
import lineStudy from '@/pages/introduction/lineStudy'
import index from '@/pages/newIndex/index'
import newIndex from '@/pages/index/index'

export default [
  {
    path: '/createScene',
    name: 'createScene',
    component: createScene,
    meta:{
      title:"创建场景",
    }
  },
  {
    path: '/lineStudy',
    name: 'lineStudy',
    component: lineStudy,
    meta:{
      title:"绘制一条直线",
    }
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    meta:{
      title:"新版首页",
    }
  },
  // {
  //   path: '/newIndex',
  //   name: 'newIndex',
  //   component: newIndex,
  //   meta:{
  //     title:"新版首页",
  //   }
  // },
]
