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
      component: () => import('@/pages/CategorySinglePage.vue'),
      beforeEnter(to, from) {
        const productsStore = useProductsStore()
        const exists = productsStore.categoryTitles.includes(to.params.category);
        if (!exists) {
          return {
            name: "NotFound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },

    
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
      beforeEnter(to, from) {
        const productsStore = useProductsStore();
        const exists = to.params.id <= productsStore?.total && to.params.id > 0;
        if (!exists) {
          return {
            name: "NotFound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },
    {
      path: '/basket/',
      name: 'basket',
      component: () => import('@/pages/BasketPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: "NotFound",
      component: () => import('@/pages/NotFound.vue'),
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

export default router
