import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/shop/Index.vue'
import Cart from '../views/cart/Index.vue'
import Detail from '../views/Detail/Index.vue'
import Admin from '../views/admin/Index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home},
  { path:'/shop', name: 'Shop', component: Shop },
  { path:'/cart', name: 'Cart', component: Cart },
  { path:'/detail/:id', name: 'Detail', component: Detail },
  { path:'/admin', name: 'Admin', component: Admin }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
