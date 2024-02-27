<script setup>
import { useCategoryStore } from '@/stores/categorySingleStore';
import { useRoute } from 'vue-router';
import Product from "@/components/product/Product.vue"

const route = useRoute()
const categoryStore = useCategoryStore()
categoryStore.getProductByCategory(route.params.category)

</script>


<template>
    <h1 class="category__single-title">{{ route.params.category  }}</h1>
    <section class="product__cards">
            <Product v-for="item in categoryStore.category" :key="item.id" :product="item"/>
    </section>
</template>
