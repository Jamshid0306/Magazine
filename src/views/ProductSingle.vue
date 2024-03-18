<script setup>
import AddCartIcon from "@/components/icons/AddCartIcon.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import { EffectCards } from "swiper/modules"
import { useProductsStore } from "@/stores/productsStore";
import LeftArrow from "@/components/icons/LeftArrow.vue";

const productsStore = useProductsStore()

const props = defineProps({
  products: {
    type: Object,
    required: true,
  },
});

const modules = [EffectCards]

const cardEffect = {
  shadow: true,
  slideShadows: true,
  shadowOffset: 20,
  shadowScale: 0.94,
}

</script>
<template>
  <section class="product__single">
    <div class="container">
      <div class="product__single-title">
        <RouterLink to="/" class="product__single-title-txt">
          <LeftArrow :size="40" />
          <div class="about__product-title">About {{ products.title }}</div>
        </RouterLink>
      </div>
      <div class="product__blocks">
        <div class="product__blocks-swiper">
          <Swiper :modules="modules" :effect="'cards'" :loop="true" :grab-cursor="true" :cardEffect="cardEffect">
            <SwiperSlide v-for="photo in products.images" :key="photo">
              <img :src="photo" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="product__block">
          <h2 class="product__name">{{ products.title }}</h2>
          <div class="product__percent-block">
            <h4 class="product__price2">${{ products.price }}</h4>
            <h3 class="product__percent">-{{ Math.round(products.discountPercentage) }}%</h3>
          </div>
          <h2 class="product__price">${{ Math.round(products.price * (1 - products.discountPercentage / 100)) }}</h2>

          <div class="product__desc">
            <h2 class="product__des-txt">Description</h2>
            <p class="product__desc-txt2">
              {{ products.description }}
            </p>
          </div>
          <button class="product__single-buy" @click="productsStore.addBasket(products.id)">
            <p class="product__single-buy-txt">buy</p>
            <AddCartIcon :size="26" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
