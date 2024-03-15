<script setup>

import BuyIcon from "@/components/icons/AddCartIcon.vue"
import { useProductsStore } from "@/stores/productsStore";


const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const productStore = useProductsStore()
</script>

<template>
  <RouterLink :to="'/about/' + product.id" class="product__card">
    <div class="rating">
      <h3 class="rating__txt">{{ product.rating }}</h3>
    </div>
    <div class="product__img">
      <img :src="product.thumbnail" alt="" loading="lazy" class="product-in__img" />
    </div>
    <div class="product__detail">
      <RouterLink to="/basket/" class="buy__icon">
          <BuyIcon @click="productStore.addBasket(product.id)"/>
      </RouterLink>
      <h2 class="product__title">{{ product.title }}</h2>
      <p class="product__desc">{{ product.description }}</p>
      <div class="product__percent-block">
      <h4 class="product__price2">${{ product.price }}</h4>
      <h3 class="product__percent">-{{ Math.round(product.discountPercentage) }}%</h3>
      </div>
      <h2 class="product__price">${{ Math.round(product.price * (1 - product.discountPercentage / 100)) }}</h2>
      
    </div>
  </RouterLink>
</template>
