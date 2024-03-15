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


// const decreaseQuantity = () => {
//     productQuantity.value = Math.max(1, productQuantity.value - 1);
// };

// const increaseQuantity = () => {
//     productQuantity.value++;
// };

// const calculateFormatted = (product) => {
//     const discountedPrice = product.price - (product.price / 100) * product.discountPercentage;
//     console.log(product.amount);
//     product.amount++    
//     return product.amount++
// };

// const totalFormattedPrice = computed(() => {
//     const totalPrice = calculateFormatted(props.product) * productQuantity.value;
//     return totalPrice.toFixed(0);
// });

// console.log(props.product.amount);
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
                <h3 class="product__percent">
                    -{{ Math.round(product.discountPercentage) }}%
                </h3>
            </div>
            <h2 class="product__price">
                ${{
                Math.round(product.price * (1 - product.discountPercentage / 100))
            }}
            </h2>
        </div>
        <div class="product__theme-count-number">
            <button class="product__theme-count-number-b" @click="productsStore.minusAmount()">
                -
            </button>
            <!-- <input v-model="inputc" class="product__theme-count-number-n" type="number" name="" id="" /> -->
            <p>{{ productsStore.productAmount }}</p>
            <button class="product__theme-count-number-b" @click="productsStore.plusAmount(product.id)">
                +
            </button>
        </div>
        <div class="cart__item-blocks">
            <DeleteIcon @click="productsStore.dellBasket(product.id)" :size="45" />
        </div>
    </div>
</template>
