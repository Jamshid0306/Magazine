<script setup>
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
import { useProductsStore } from "@/stores/productsStore";
import { ref, computed, defineProps } from "vue";
import LeftArrow from "./icons/LeftArrow.vue";

const productsStore = useProductsStore();

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

function productCount(product) {
    if (product.amount == 1) {
        productsStore.dellBasket(product.id, product.totalSum, product.amount)
    } else {
        product.amount--
        productsStore.navCount -= 1
    }
}

</script>

<template>

    <div class="cart__item">
        <div class="cart__item-blocks">
            <img class="cart__item-img" :src="product.thumbnail" alt="" />
        </div>
        <RouterLink :to="'/about/' + product.id" class="cart__item-txts">
            <h3 class="cart__item-title">{{ product.title }}</h3>
            <p class="cart__item-desc">{{ product.description }}</p>
            <div class="product__percent-block">
                <p class="product__price2">${{ product.price }}</p>
                <h3 class="product__percent">
                    -{{ Math.round(product.discountPercentage) }}%
                </h3>
            </div>
            <h2 class="product__price">
            ${{ product.totalSum }}
            </h2>
        </RouterLink>
        <div class="product__theme-count-number">
            <button class="product__theme-count-number-b" @click="productCount(product), productsStore.controlAmount()">
                -
            </button>
            <input v-model="product.amount" class="product__theme-count-number-n" />
            <!-- <p class="cart__item-count">{{ product.amount }}</p> -->
            <button class="product__theme-count-number-b"
                @click="product.amount++, productsStore.controlAmount(), productsStore.navCount += 1">
                +
            </button>
        </div>
        <RouterLink to="/basket" class="cart__item-blocks">
            <DeleteIcon @click="productsStore.dellBasket(product.id, product.totalSum, product.amount)" :size="45" />
        </RouterLink>
    </div>
</template>
