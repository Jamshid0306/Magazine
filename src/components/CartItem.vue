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

const productQuantity = ref(1);

const decreaseQuantity = () => {
    productQuantity.value = Math.max(1, productQuantity.value - 1);
    if (productQuantity.value === 1) {
        productsStore.dellBasket(props.product.id)
    }
};

const increaseQuantity = () => {
    productQuantity.value++;
};

const calculateFormatted = (product) => {
    const discountedPrice = product.price - (product.price / 100) * product.discountPercentage;
    return discountedPrice.toFixed(0);
};

const totalFormattedPrice = computed(() => {
    const totalPrice = calculateFormatted(props.product) * productQuantity.value;
    return totalPrice.toFixed(0);
});


</script>

<template>
    <div class="basket__page-title">
        <RouterLink to="/">
            <LeftArrow :size="50" />
        </RouterLink>
        <h1 class="basket__title">basket</h1>
        <div class="basket__page-total">
            <h2 class="total">Total: ${{ totalFormattedPrice }}</h2>
        </div>
    </div>
    <div class="cart__item">
        <div class="cart__item-blocks">
            <img class="cart__item-img" :src="product.thumbnail" alt="" />
        </div>
        <div class="cart__item-txts">
            <h3 class="cart__item-title">{{ product.title }}</h3>
            <p class="cart__item-desc">{{ product.description }}</p>
            <div class="product__percent-block">
                <p class="product__price2">${{ product.price * productQuantity }}</p>
                <h3 class="product__percent">
                    -{{ Math.round(product.discountPercentage) }}%
                </h3>
            </div>
            <!-- <h2 class="product__price">
                ${{
                    Math.round(product.price * (1 - product.discountPercentage / 100 * productQuantity))
                }}
            </h2> -->
            <h2 class="product__price">
                ${{
                totalFormattedPrice
            }}
            </h2>
        </div>
        <div class="product__theme-count-number">
            <button class="product__theme-count-number-b" @click="decreaseQuantity">
                -
            </button>
            <input v-model="productQuantity" class="product__theme-count-number-n" type="number" name="" id="" />
            <button class="product__theme-count-number-b" @click="increaseQuantity">
                +
            </button>
        </div>
        <div class="cart__item-blocks">
            <DeleteIcon @click="productsStore.dellBasket(product.id)" :size="45" />
        </div>
    </div>
</template>
