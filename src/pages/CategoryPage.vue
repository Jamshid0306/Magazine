<script setup>
import { useProductsStore } from "@/stores/productsStore";
const productsStore = useProductsStore();
import product from "@/components/product/Product.vue"
import LeftArrow from "@/components/icons/LeftArrow.vue";
productsStore.getFetchCategoryTitles()
</script>

<template>
  <section class="category">
    <div class="category__titles">
      <RouterLink to="/">
        <LeftArrow :size="40" />
      </RouterLink>
      <h2>Categories</h2>
    </div>
    <div class="container">
      <div class="category__items" v-for="(item) in productsStore.categoryTitles" :key="item.id">
        <RouterLink :to="'/category-single/' + item" class="category__item">
          <h2 class="categor__item-txt">{{ item }}</h2>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
