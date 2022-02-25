import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Scheduler from '../components/table/Scheduler'
import Opencv from '../components/table/Opencv'
import Data_analyze from '../components/table/Data_analyze'
import Board from '../components/table/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/scheduler/free',
      name: 'Scheduler',
      component: Scheduler
    },
    {
      path: '/opencv/free',
      name: 'Opencv',
      component: Opencv
    },
    {
      path: '/data_analyze/free',
      name: 'Data_analyze',
      component: Data_analyze
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    }
  ]
})
