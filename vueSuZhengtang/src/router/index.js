import Vue from 'vue'
import Router from 'vue-router'
import Jul3 from '@/components/Jul3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Jul3',
      component: Jul3
    }
  ]
})
