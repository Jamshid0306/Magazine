<script setup>
import { useProductsStore } from '@/stores/productsStore';
import ProductSingle from '@/views/ProductSingle.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productsStore = useProductsStore()
productsStore.getAboutProducts(route.params.id)

</script>
<template>
    <ProductSingle v-if="productsStore.aboutProductId" :product="productsStore.aboutProductId" />
</template>
