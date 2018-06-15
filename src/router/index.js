import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import comp1 from '@/components/comp1'
import comp2 from '@/components/comp2'
import comp3 from '@/components/comp3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/comp1',
      name: 'comp1',
      component: comp1
    },
    {
      path: '/comp2',
      name: 'comp2',
      component: comp2
    },
    {
      path: '/comp3',
      name: 'comp3',
      component: comp3
    }
  ]
})
