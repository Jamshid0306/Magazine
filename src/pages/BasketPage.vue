<script setup>
import CartItem from "@/components/CartItem.vue";
import LeftArrow from "@/components/icons/LeftArrow.vue";
import { useProductsStore } from "@/stores/productsStore";
import { ref } from 'vue';

const productsStore = useProductsStore();
</script>

<template>
  <div class="basket__page">
    <div class="container">
      <div class="basket__page-title">
        <RouterLink to="/">
            <LeftArrow :size="50" />
        </RouterLink>
        <h1 class="basket__title">basket</h1>
        <div class="basket__page-total">
            <h2 class="total">Total: $</h2>
        </div>
    </div>
      <div class="basket__page-main" v-for="item in productsStore.basket" :key="item.id">
        <CartItem :product="item" />
      </div>
    </div>
  </div>
</template>
