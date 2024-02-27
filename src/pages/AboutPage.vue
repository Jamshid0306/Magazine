<script setup>
import { useProductsStore } from '@/stores/productsStore';
import ProductSingle from '@/views/ProductSingle.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productStore = useProductsStore()
productStore.getAboutProducts(route.params.id)

</script>
<template>
    <ProductSingle v-if="productStore.aboutProductId" :products="productStore.aboutProductId" />
</template>
