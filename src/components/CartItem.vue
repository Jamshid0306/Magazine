<script setup>
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
import { useProductsStore } from "@/stores/productsStore";

const productsStore = useProductsStore()

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="cart__item">
        <div class="cart__item-blocks">
            <img class="cart__item-img" :src="product.thumbnail" alt="" />
        </div>
        <div class="cart__item-txts">
            <h3 class="cart__item-title">{{ product.title }}</h3>
            <p class="cart__item-desc">{{ product.description }}</p>
            <div class="product__percent-block">
                <p class="product__price2">${{ product.price }}</p>
                <h3 class="product__percent">-{{ Math.round(product.discountPercentage) }}%</h3>
            </div>
            <h2 class="product__price">${{ Math.round(product.price * (1 - product.discountPercentage / 100)) }}</h2>

        </div>
        <div class="cart__item-blocks">
            <DeleteIcon @click="productsStore.dellBasket(product.id)" :size="45" />
        </div>
    </div>
</template>
