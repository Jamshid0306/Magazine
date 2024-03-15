import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import { useProductsStore } from '@/stores/productsStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/category/',
      name: 'category',
      component: () => import('@/pages/CategoryPage.vue')
    },
    {
      path: '/category-single/:category',
      name: 'category-single',
      component: () => import('@/pages/CategorySinglePage.vue')
      
    },
    {
      path: '/basket/',
      name: 'basket',
      component: () => import('@/pages/BasketPage.vue')
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
      // beforeEnter(to, from) {
      //   const productStore = useProductsStore()
      //   const exists = productStore.products?.find(
      //     item => item.id == to.params.id
      //   );
      //   if (!exists) {
      //     return {
      //       name: "NotFound",
      //       params: { pathMatch: to.path.split("/").slice(1) },
      //       query: to.query,
      //       hash: to.hash,
      //     };
      //   }
      // },
    },
    {
      path: '/:pathMatch(.*)*',
      name: "NotFound",
      component: () => import('@/pages/NotFound.vue'),
    },
    
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

export default router
