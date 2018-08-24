import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello2 from '@/components/HelloWorld2'
import Test from '@/components/test'
import Loadapi from '@/components/loadapi'
import Loadnowweatherapi from '@/components/loadnowweatherapi'
import Loadgroupweatherapi from '@/components/loadgroupweatherapi'
import Loadcafeapi from '@/components/loadcafeapi'
import Loadcafeapi_taichung from '@/components/loadcafeapi_taichung'
import Table from '@/components/table'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import Main from '@/components/practice/Main'
import UserMain from '@/components/practice/user/UserMain'
import slotpractice from '@/components/slotpractice/slotpractice'
import slot_color from '@/components/slot_color'
import myQuote from '@/components/myQuote'

Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/22',
      name: 'HelloWorld22',
      component: Hello2
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/loadapi',
      name: 'loadapi',
      component: Loadapi
    },
    {
      path: '/loadcafeapi',
      name: 'loadcafeapi',
      component: Loadcafeapi
    },
    {
      path: '/loadcafeapi_taichung',
      name: 'loadcafeapi_taichung',
      component: Loadcafeapi_taichung
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/loadnowweatherapi',
      name: 'loadnowweatherapi',
      component: Loadnowweatherapi
    },
    {
      path: '/loadgroupweatherapi',
      name: 'loadgroupweatherapi',
      component: Loadgroupweatherapi
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/usermain',
      name: 'usermain',
      component: UserMain
    },
    {
      path: '/slotpractice',
      name: 'slotpractice',
      component: slotpractice
    },
    {
      path: '/slot_color',
      name: 'slot_color',
      component: slot_color
    },
    {
      path: '/myQuote',
      name: 'myQuote',
      component: myQuote
    }
  ]
})
