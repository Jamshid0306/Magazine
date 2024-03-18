<script setup>
import ShopCartIcon from "@/components/icons/Icon-Shop-cart.vue";
import { useProductsStore } from "@/stores/productsStore";

const productsStore = useProductsStore()

</script>

<template>
  <nav class="nav">
    <div class="container">
      <RouterLink to="/">
        <img src="@/assets/images/logo.svg" alt="" />
      </RouterLink>
      <div class="nav__links">
        <RouterLink to="/" class="nav__link">
          <p class="nav__link-txt">Новинки</p>
        </RouterLink>
        <RouterLink to="/category" class="nav__link">
          <p class="nav__link-txt">Категории</p>
        </RouterLink>
        <RouterLink to="/" class="nav__link">
          <p class="nav__link-txt">Скидки</p>
        </RouterLink>
        <RouterLink to="/" class="nav__link">
          <p class="nav__link-txt">Контакты</p>
        </RouterLink>
        <RouterLink to="/" class="nav__link">
          <p class="nav__link-txt">О нас</p>
        </RouterLink>
      </div>
      <div class="nav__icons">
        <RouterLink to="/basket/" class="shop__cart">
          <ShopCartIcon :size="50" />
          <p class="count" v-if="productsStore.basket?.length">{{ productsStore.basket?.length }}</p>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
