import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductView from '@/views/ProductView.vue'
import SummaryView from '@/views/SummaryView.vue'
import CheckoutView from '@/views/CheckoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/products',
      component: ProductsView,
    },
    {
      path: '/products/:id',
      component: ProductView,
    },
    {
      path: '/cart',
      component: SummaryView,
    },
    {
      path: '/checkout',
      component: CheckoutView,
    },
  ],
})

export default router
