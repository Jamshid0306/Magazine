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
      <div class="basket__page-main" v-for="item in productsStore.basket" :key="item.id">
        <CartItem :product="item" />
      </div>
    </div>
  </div>
</template>
