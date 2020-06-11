import Vue from 'vue'
import Router from 'vue-router'
import index from '@/sections/index'
import cart from '@/sections/cart'
import furniture from '@/sections/furniture'
import Art_Shop from '@/sections/Art_Shop'
import bags from '@/sections/bags'
import SideMainLayout from '@/layout/SideMainLayout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: SideMainLayout,
      children: [
        {
          path: '/',
          component: index
        },
        {
          path: '/furniture',
          name: 'furniture',
          component: furniture
        },
        {
          path: '/Art_Shop',
          name: 'Art_Shop',
          component: Art_Shop
        },
        {
          path: '/bags',
          name: 'bags',
          component: bags
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
