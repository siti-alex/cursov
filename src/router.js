import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import Charts from './views/Chart.vue'
import Login from './views/Login.vue'
import Store from './store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
/* {
      path: '/Chart',
      name: 'chart',
      component: Charts,
      beforeEnter: AuthGuard,
   }, */
      {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
  mode: 'history'
})
function AuthGuard(from, to, next){
  if(Store.getters.isUserAutheticated)
    next()
  else 
    next('/login')
}