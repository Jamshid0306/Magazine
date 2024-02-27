<script setup>
import { useProductsStore } from "@/stores/productsStore";
const productsStore = useProductsStore();
productsStore.getFetchCategoryTitles()
</script>

<template>
  <section class="category">
    <div class="container">
      <div class="category__items" v-for="(item, index) in productsStore.categoryTitles" :key="item.id">
        <RouterLink :to="'/category-single/'+ item" class="category__item">
          <h2 class="categor__item-txt">{{ item }}</h2>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
