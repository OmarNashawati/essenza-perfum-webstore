import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductView from '@/views/ProductView.vue'
import SummaryView from '@/views/SummaryView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import NotFound from '@/views/NotFound.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    meta: { title: (route) => `${route.query.category || ''} Products` },
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView,
    meta: { title: (route) => `${route.params.id} Product` },
  },
  {
    path: '/cart',
    name: 'cart',
    component: SummaryView,
    meta: { title: 'Cart' },
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
    meta: { title: 'Checkout' },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: (route) => `${route.query.action ? 'Register' : 'Login'}` },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '404 Not Found' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

router.afterEach((to) => {
  let title = ''

  if (to.meta.title) {
    if (typeof to.meta.title === 'function') {
      title = to.meta.title(to)
    }
  }

  document.title = title || 'Essenza | The Essence of Luxury'
})

export default router
