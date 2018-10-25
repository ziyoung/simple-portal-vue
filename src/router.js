import Vue from 'vue'
import Router from 'vue-router'
import StoreTest from './example/store-test'
import Basic from './example/basic'
import Multiple from './example/multiple'
import ScopedSlot from './example/scoped-slot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/store-test',
      component: StoreTest
    },
    {
      path: '/basic',
      component: Basic
    },
    {
      path: '/multiple',
      component: Multiple
    },
    {
      path: '/scoped-slot',
      component: ScopedSlot
    }
  ]
})
