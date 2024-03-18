<script setup>
import CartItem from "@/components/CartItem.vue";
import LeftArrow from "@/components/icons/LeftArrow.vue";
import Empty from "@/views/Empty.vue"
import BasketIcon from "@/components/icons/BasketIcon.vue"
import { useProductsStore } from "@/stores/productsStore";
import { ref } from 'vue';

const productsStore = useProductsStore();
</script>

<template>
  <div class="basket__page">
    <div class="container">
      <div class="basket__page-title">
        <RouterLink class="basket__page-title-txt" to="/">
          <LeftArrow :size="50" />
          <h1 class="basket__title">basket</h1>
        </RouterLink>
        <div class="basket__page-total" v-if="productsStore.basket.length > 0">
          <h2 class="total">Total: $ {{ productsStore.allsum }}</h2>
        </div>
      </div>
      <Empty v-if="productsStore.basket.length === 0">
        <BasketIcon :size="40" :color="'grey'" />
        <h3 class="basket__clean-title">Basket is clean</h3>
      </Empty>
      <div class="basket__page-main" v-for="item in productsStore.basket" :key="item.id">
        <CartItem :product="item" />
      </div>
    </div>
  </div>
</template>
