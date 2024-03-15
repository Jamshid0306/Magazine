<script setup>
import { useCategoryStore } from '@/stores/categorySingleStore';
import { useRoute } from 'vue-router';
import Product from "@/components/product/Product.vue"
import LeftArrow from '@/components/icons/LeftArrow.vue';


const route = useRoute()
const categoryStore = useCategoryStore()
categoryStore.getProductByCategory(route.params.category)

</script>


<template>
    <div class="category__page-title">
    <RouterLink to="/category">
        <LeftArrow :size="40" />
    </RouterLink>
    <h1 class="category__single-title">Category: {{ route.params.category }}</h1>
    </div>
    <section class="product__cards">
        <Product v-for="item in categoryStore.category" :key="item.id" :product="item" />
    </section>
</template>
